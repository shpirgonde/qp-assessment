const express = require('express');
const router = express.Router();

const groceryItemsController = require('../controller/groceryitems/groceryItems.controller');

router.get('/getitems', groceryItemsController.getAllGroceryItems);
router.post('/createitems', groceryItemsController.create);
router.delete('/deleteitem/:id', groceryItemsController.delete);
router.put('/updateitem/:id', groceryItemsController.update);

module.exports = router;