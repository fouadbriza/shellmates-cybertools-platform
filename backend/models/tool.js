const mongoose=require('mongoose');

const toolSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    github_url:{type:String,required:true},
    usage_instructions:{type:String},
    extra_resources:{type:String},
    email:{type:String,required:true},
    status:{type:String,enum:["pending","rejected","approved"],default:"pending"},
    //properties for the filter search queries
    category:{type:String,default:"not specified"},
    language:{type:String,default:"not specified"},
    activity:{type:String,default:"not specified"},
    trending:{type:String,default:"not specified"},
    createdAt: { type: Date, default: Date.now },

});
toolSchema.pre("save",(next)=>{
    if (this.name) {
    this.name=this.name.toLowerCase()
    }
    next()
})


module.exports=mongoose.model("Tool",toolSchema);