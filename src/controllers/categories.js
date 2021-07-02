

const categories = {
    getCategory: (req, res) => {
        res.send("Listado de la categoria seleccionada");
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