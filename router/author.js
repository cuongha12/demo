import express from "express";
import productController from "../controller/authorController";


const router = express.Router();

const allRouter = (app) => {
    router.get('/product', productController.addProduct)
    router.get('/category', productController.getCategory)
    router.get('/attributes', productController.getAttributes)
    return app.use('/', router);
}

export default allRouter