const express = require("express");
const Tool = require("../models/tool");
const router = express.Router();
const axios = require("axios");
const { SMTPClient } = require("emailjs");


const nodemailer = require("nodemailer");

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



router.post("/addTool", async (req, res) => {
  try {
    const { name, description, github_url, category, usage_instructions, extra_resources,email } = req.body;

    
    if (!name || !description || !github_url || !category || !email) {
      return res.status(400).json({ message: "Required fields are missing" });
    }


     const newTool = await Tool.create({
      name,
      category,
      description,
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



//search and categoty route
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


router.post("/approve/:id", async (req, res) => {
  await Tool.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.send("✅ Tool approved and now visible on the website.");
});

router.post("/reject/:id", async (req, res) => {
  await Tool.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.send("❌ Tool rejected.");
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

