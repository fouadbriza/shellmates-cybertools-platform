const express = require("express");
const Tool = require("../models/tool");
const router = express.Router();

router.post("/addTool", async (req, res) => {
  try {
    const { name, description, github_url, category, usage_instructions, extra_resources } = req.body;

    
    if (!name || !description || !github_url || !category) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    
    const newTool = await Tool.create({
      name,
      category,
      description,
      github_url,
      usage_instructions,
      extra_resources,
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









module.exports = router;

