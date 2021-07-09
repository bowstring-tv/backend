let db = require('../../db.json');

const categories = {
    getAll: (req, res) => {
        res.status(200).json({ success: true, data: db.categories });
    },
    getCategory: (req, res) => {
        let id = req.params.id;
        res.status(200).json({ success: true, data: db.categories.filter(category => category.id == id) });
    },
    getCategoryItem: (req, res) => {
        res.send("Item de categoria");
    },
    createCategoryItem: (req, res) => {
        res.send("Creación de item nuevo en la categoria");
    },
    editCategoryItem: (req, res) => {
        res.send("Edición de item de la categoria seleccionada");
    },
    deleteCategoryItem: (req, res) => {
        res.send("Eliminación de item de la categoria seleccionada")
    }
}

module.exports = categories;