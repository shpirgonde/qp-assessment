'use strict';
var dbConn = require('../../config/db.config');

//grocery Object Creation

let GroceryItems = function (groceryItems) {
    console.log('groceryItems =', groceryItems);
    this.cGroceryType = groceryItems[0].cGroceryType;
    this.cItemName = groceryItems[0].cItemName;
    this.cItemPrice = groceryItems[0].cItemPrice;
    this.iStatus = groceryItems[0].iStatus;
}

GroceryItems.getAllGroceryItems = function (result) {
    let cQuery = 'SELECT * FROM groceryItems';
    dbConn.query(cQuery, function (err, res) {
        console.log('cQuery', cQuery);
        if (err) {
            console.log('error ==', err);
            result(null, err);
        }
        else {
            //console.log('grocerry Items ==', res);
            result(null, res);
        }
    })
}

GroceryItems.create = (newGroceryItem, result) => {
    let cQuery = 'INSERT INTO groceryItems SET ?'
    //console.log('newGroceryItem...',newGroceryItem);
    dbConn.query(cQuery, newGroceryItem, function (err, res) {
        if (err) {
            console.log('error ==', err);
            result(null, err);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
}

GroceryItems.update = function (id, newGroceryItem, result) {
    let cQuery = "UPDATE groceryItems SET cGroceryType=?,cItemName = ?,cItemPrice =?, iStatus = ? WHERE iItemId = ?";
    dbConn.query(cQuery,[newGroceryItem.cGroceryType, newGroceryItem.cItemName, newGroceryItem.cItemPrice, 0, id], function (err, res) {
        if (err) {
            console.log("error", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}

GroceryItems.delete = function (id, result) {
    let cQuery = 'DELETE FROM groceryItems WHERE iItemId = ?';
    dbConn.query(cQuery, [id], function (err, res) {
        if (err) {
            console.log('error =', err);
            result(null, err);
        }
        else {
            result(null, id)
        }
    })
}
module.exports = GroceryItems