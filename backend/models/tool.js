const mongoose=require('mongoose');

const toolSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    github_url:{type:String,required:true},
    usage_instructions:{type:String},
    extra_resources:{type:String},
    //properties for the filter search queries
    category:{type:String,required:true,default:"not specified"},
    language:{type:String,required:true,default:"not specified"},
    activity:{type:String,required:true,default:"not specified"},
    trending:{type:String,required:true,default:"not specified"}

});
toolSchema.pre("save",(next)=>{
    if (this.name) {
    this.name=this.name.toLowerCase()
    }
    next()
})


module.exports=mongoose.model("Tool",toolSchema);