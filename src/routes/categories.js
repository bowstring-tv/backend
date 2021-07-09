const { Router } = require('express');
const router = Router();
const categoriesController = require('../controllers/categories');
const { route } = require('./portfolios');

router.get('/', categoriesController.getAll);

router.get('/:id', categoriesController.getCategory)

router.get('/:id/portfolios', categoriesController.getPortfoliosOfCategory)

router.get('/item-category', categoriesController.getCategoryItem);

router.post('/item-category', categoriesController.createCategoryItem);

router.put('/item-category', categoriesController.editCategoryItem);

router.delete('/item-category', categoriesController.deleteCategoryItem);


module.exports = router;