const express = require("express");
const Tool = require("../models/tool");
const router = express.Router();
const axios = require("axios");
const { SMTPClient } = require("emailjs");
const nodemailer = require("nodemailer");




router.post("/addTool", async (req, res) => {
  try {
    let { name, description, github_url, category, usage_instructions, extra_resources,email } = req.body;

    
    if (!github_url || !category || !email) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    //fetching data from github api

    let activity,language,createdAt
    try {
      const existing = await Tool.findOne({ github_url });
      if (existing) return res.status(409).json({ message: "Tool already exists" });

      const fetched = await axios.get(github_url);   
      const repo_data = fetched.data;

      name = (!name)? repo_data.name : name
      description = (!description)? repo_data.description : description;
      activity = repo_data.updated_at;
      language= repo_data.language; 
      createdAt = repo_data.created_at

    } catch (error) {
      return res.status(400).json({ message: "error repo interpretation"});
    }




     const newTool = await Tool.create({
      name,
      category,
      description,
      activity,
      language,
      createdAt,
      github_url,
      usage_instructions,
      extra_resources,
      email,
      status: "pending",
    });


   const approveLink = `${process.env.APP_URL}/tools/approve/${newTool._id}`;
   const rejectLink = `${process.env.APP_URL}/tools/reject/${newTool._id}`;



await sendEmailToAdmin({
    name,
  description,
  email,
  category,
  github_url,
  usage_instructions,
  extra_resources,
  approveLink,
  rejectLink
  });


    return res.status(201).json({
      message: "Tool added successfully",
      data: newTool,
    });

  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
});  



async function sendEmailToAdmin(tool) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,  
    port: 465,                        
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS,  
    },
  });

  const { name, description, email, category, github_url, usage_instructions, extra_resources, approveLink, rejectLink } = tool;

  const html = `
    <h2>New Tool Submitted 🛠️</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Submitted by:</strong> ${email}</p>
    <p><strong>GitHub:</strong> <a href="${github_url}">${github_url}</a></p>
    <p><strong>Usage:</strong> ${usage_instructions}</p>
    <p><strong>Extra Resources:</strong> ${extra_resources}</p>
    <br/>
    <a href="${approveLink}" style="padding:10px 20px;background:#4CAF50;color:white;text-decoration:none;">ACCEPT</a>
    &nbsp;&nbsp;
    <a href="${rejectLink}" style="padding:10px 20px;background:#D9534F;color:white;text-decoration:none;">REJECT</a>
  `;

  await transporter.sendMail({
    from: `"CyberSecurity Platform" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,   
    subject: `New Tool Submission: ${name}`,
    html,
  });

  console.log("Email sent to admin!");
}




//search and categoty route (can be used for any tool data fetching)
router.get("/search", async (req,res) => {
const {name, category, language, activity, trending} = req.query; 
const filter ={}
if (name) {filter.name=name};
if (category) {filter.category=category};
if (language) {filter.language=language};
if (activity) {filter.activity=activity};
if (trending) {filter.trending=trending};

try {

//if user didnt send any filters or searchTerm
const isEmpty = Object.keys(req.query).length === 0;

const data = (isEmpty)? await Tool.find().limit(10) : await Tool.find(filter)


if (data.length === 0) {
  return res.status(404).json({message:"No Tools Found", data})
}

return res.status(200).json(data)

} catch(error) {
  return res.status(500).json({message:"Server Error" ,error})

}
})


router.get("/category",async(req,res)=>{
  const {category}=req.query;

    try {
    const tools = await getToolsByCategory(category);

    if (!tools || tools.length === 0) {
      return res.status(404).json({ message: "No Tools Found" });
    }

    res.status(200).json(tools);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*router.get("/search", async (req, res) => {
  const { name, language, trending, activity } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: "i" };
  if (language) filter.language = { $regex: `^${language}$`, $options: "i" };
  if (trending) filter.trending = { $gte: Number(trending) };

  if (activity) {
    const now = Date.now();
    if (activity === "active") filter.lastUpdated = { $gte: new Date(now - 30 * 86400000) };
    if (activity === "recent") filter.lastUpdated = { $gte: new Date(now - 7 * 86400000) };
    if (activity === "inactive") filter.lastUpdated = { $lte: new Date(now - 90 * 86400000) };
  }

  try {
    const noFiltersUsed = Object.keys(filter).length === 0;
    const tools = noFiltersUsed
      ? await Tool.find().sort({ createdAt: -1 }).limit(10)
      : await Tool.find(filter);

    if (!tools.length) return res.status(404).json({ message: "No Tools Found" });

    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

*/




router.get("/pending", async (req, res) => {
  try {
    const pendingTools = await Tool.find({ status: "pending" });
    res.status(200).json(pendingTools);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router.get("/pending", async (req, res) => {
  try {
    const pendingTools = await Tool.find({ status: "pending" });
    res.status(200).json(pendingTools);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router.get("/approved", async (req, res) => {
  const tools = await Tool.find({ status: "approved" });
  res.json(tools);
});

router.get("/all", async (req, res) => {
  try {
    const allTools = await Tool.find();
    res.status(200).json(allTools);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});




/*router.get("/category", async (req, res) => {
  const { category } = req.query;
  try {
    const tools = await getToolsByCategory(category);
    if (!tools.length) return res.status(404).json({ message: "No Tools Found" });
    res.status(200).json(tools);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});*/

router.get("/approve/:id", async (req, res) => {
  await Tool.findByIdAndUpdate(req.params.id, { status: "approved" },{ new: true });
  res.send("Tool approved and now visible on the website.");
});

router.get("/reject/:id", async (req, res) => {
  await Tool.findByIdAndUpdate(req.params.id, { status: "rejected" },{ new: true });
  res.send("Tool rejected.");
});

router.get("/:id", async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: "Tool not found" });
    res.status(200).json(tool);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;

