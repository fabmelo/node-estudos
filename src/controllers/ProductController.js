const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    // pega tudo
    // async index(req, res){
    //     const products = await Product.find();
    //     return res.json(products);
    // },

    // pega paginado
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    // pega um
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // criação
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // atualizar
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    // apagar
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }

};