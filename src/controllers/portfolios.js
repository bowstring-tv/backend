let db = require('../../db.json');

const categories = {
    getAll: (req, res) => {
        res.status(200).json({ success: true, data: db.portfolios });
    },
    getPortfolio: (req, res) => {
        let id = req.params.id;
        res.status(200).json({ success: true, data: db.portfolios.filter(category => category.id == id) });
    },
    createPortfolio: (req, res) => {
        res.send("Creación de item nuevo en la categoria");
    },
    editPortfolio: (req, res) => {
        res.send("Edición de item de la categoria seleccionada");
    },
    deletePortfolio: (req, res) => {
        res.send("Eliminación de item de la categoria seleccionada")
    }
}

module.exports = categories;