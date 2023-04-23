import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
    }
});

const attributesSchema = mongoose.Schema({
    name: {
        type: String,
    }
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    attributes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attributes"
    }
})

let Product = mongoose.model("Product", productSchema)
let Category = mongoose.model("Category", categorySchema)
let Attributes = mongoose.model("Attributes", attributesSchema)
module.exports = { Product, Category, Attributes }