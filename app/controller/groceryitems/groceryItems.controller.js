'use strict'
const GroceryItems = require('../../models/groceryitems/groceryitems.model');

exports.getAllGroceryItems = function (req, res) {
    GroceryItems.getAllGroceryItems(function (err, groceryItems) {
        console.log('controller');
        if (err)
            res.send(err);
        res.send(groceryItems);
    })
};

exports.create = (req, res) => {
    const newGroceryItems = new GroceryItems(req.body);
    //console.log('req.body', req.body);
    if (!req.body) {
        res.status(400).send({
            message: 'Please Provide all required field!'
        });
    }
    else {
        console.log('newGroceryItem controler', newGroceryItems);
        GroceryItems.create(newGroceryItems, function (err, grocerryItem) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Grocery added successfully!", data: grocerryItem });
        });
    }
}

exports.update = function (req, res) {
    if (req.body.constructor == Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: true, message: 'Please provide all required feild' });
    }
    else {
        GroceryItems.update(req.params.id, new GroceryItems(req.body), function (err, grocerryItem) {
            if (err) {
                res.send(err);
            }
            res.json({ error: false, message: 'Grocery Item successfully updated!', groceryItem: grocerryItem });
        })
    }
}


exports.delete = function (req, res) {
    console.log('req.params', req.params)
    GroceryItems.delete(req.params.id, function (err, grocerryItem) {
        if (err) {
            res.send(err);
        }
        res.json({ error: false, message: 'Grocery delete successfully.' })
    });
};

