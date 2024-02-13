
Use postman to hit following API:

2.create api :
 POST   localhost:5000/api/createitems

Inside postman  Body-> raw -> json

[
    {
        "cGroceryType": "dairy",
        "cItemName": "cream",
        "cItemPrice": 40,
        "iStatus": 0
    }
]

3.delete api : (13 is iItemId)
localhost:5000/api/deleteitem/13

4.update api: (8 is iItemId)
localhost:5000/api/updateitem/8

Inside postman  Body-> raw -> json

[
    {
        "cGroceryType": "beverages",
        "cItemName": "musk melon juice",
        "cItemPrice": 60,
        "iStatus": 0
    }
]