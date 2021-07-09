const { Router } = require('express');
const router = Router();
const portfoliosController = require('../controllers/portfolios');

router.get('/', portfoliosController.getAll);

router.get('/:id', portfoliosController.getPortfolio)

router.post('/', portfoliosController.createPortfolio);

router.put('/:id', portfoliosController.editPortfolio);

router.delete('/:id', portfoliosController.deletePortfolio);


module.exports = router;