import mongoose from "./../database/database.js";

var companySchema = mongoose.Schema({
    login:String,
})

var companyData = mongoose.model("company",companySchema)

export default companyData