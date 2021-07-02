const { Router } = require('express');
const router = Router();
const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.getCategory);

router.get('/item-category', categoriesController.getCategoryItem);

router.post('/item-category', categoriesController.createCategoryItem);

router.put('/item-category', categoriesController.editCategoryItem);

router.delete('/item-category', categoriesController.deleteCategoryItem);


module.exports = router;