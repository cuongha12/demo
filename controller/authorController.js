const { Product, Category, Attributes } = require('../model/model')

const productController = {
    addProduct: async (req, res) => {
        let { page, limit, category, attributes, price } = req.query
        const pageSize = parseInt(limit) || 4
        const currentPage = parseInt(page) || 1;
        const skipPage = pageSize * (currentPage - 1)
        if (category === "top") {
            category = "644436633cecd2e28c056d43"
        }
        if (category === "bottom") {
            category = "6444366c3cecd2e28c056d46"
        }
        if (attributes === "aothun") {
            attributes = "644436e410c0f62ab912a848"
        }
        if (attributes === "aoni") {
            attributes = "644436fd10c0f62ab912a84a"
        }
        if (attributes === "quandai") {
            attributes = "6444374610c0f62ab912a84e"
        }
        if (attributes === "quansort") {
            attributes = "6444376110c0f62ab912a850"
        }
        let query = {}

        if (category) {
            query = {
                category: category,
            }
        }
        if (attributes) {
            query = {
                attributes: attributes,
            }
        }
        if (attributes && category) {
            query = {
                category: category,
                attributes: attributes,
            }
        }
        try {
            await Product.find({
                ...query
            }).sort({
                price: price === 'asc' ? 1 : price === 'desc' ? -1 : 1
            }).skip(skipPage).limit(pageSize)
                .then((data) => {
                    Product.countDocuments({...query}).then((total) => {
                        let count = Math.ceil(total / pageSize)
                        return res.json({
                            total: count,
                            data: data
                        })
                    })
                });
            // res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err); //HTTP REQUEST CODE
        }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            res.status(500).json(err);
        }
    },
    getAttributes: async (req, res) => {
        try {
            const attributes = await Attributes.find()
            res.json(attributes)
        } catch (error) {
            res.status(500).json(err);
        }
    }
}

export default productController