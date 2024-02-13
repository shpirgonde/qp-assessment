
/** Generic grocery table for types of grocery such as dairy, bakery, beverage, spices */


CREATE TABLE genGrocery (
	 iGroceryId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 cGroceryType varchar(50) NOT NULL UNIQUE,
	 iStatus int DEFAULT 0
);


CREATE TABLE groceryItems (
	 iItemId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 cGroceryType varchar(50) NOT NULL,
	 cItemName varchar(50) NOT NULL UNIQUE,
	 cItemPrice int,
	 iStatus int DEFAULT 0
);


CREATE TABLE inventory (
	 iInventoryId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 
	 cGroceryType varchar(50) NOT NULL,
	 FOREIGN KEY (cGroceryType) REFERENCES genGrocery(cGroceryType),
	 
	 iItemId int NOT NULL,
	 FOREIGN KEY (iItemId) REFERENCES groceryItems(iItemId),
	 cItemName varchar(50) NOT NULL UNIQUE,
	 
	 iInventoryStock int UNSIGNED NOT NULL,
	 iStatus int DEFAULT 0
);


CREATE TABLE orders (
	 iOrderId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 cUserName varchar(50),	 
	 iStatus int DEFAULT 0
);


CREATE TABLE booking (
	 iBookingId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 iOrderId int NOT NULL,
	 cItemName varchar(50) NOT NULL,	
	 iTotalQuantity int UNSIGNED NOT NULL,	
	 cUserName varchar(50),
	 iStatus int DEFAULT 0
);

/** Insert few records into genGrocery table.*/
INSERT INTO genGrocery(cGroceryType,iStatus) values('dairy',0);
INSERT INTO genGrocery(cGroceryType,iStatus) values('bakery',0);
INSERT INTO genGrocery(cGroceryType,iStatus) values('beverages',0);
INSERT INTO genGrocery(cGroceryType,iStatus) values('spices',0);


/** Insert few records into groceryItems table.*/
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('dairy','milk',0,36);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('dairy','butter',0,50);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('dairy','cheese',0,75);

INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('bakery','bread',0,20);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('bakery','toast',0,30);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('bakery','buns',0,15);


INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('beverages','orange juice',0,	30);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('beverages','mango juice',0,40);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('beverages','coke',0,50);


INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('spices','turmeric',0,50);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('spices','coriander',0,50);
INSERT INTO groceryItems(cGroceryType,cItemName,iStatus,cItemPrice) values('spices','black pepper',0,70);




update groceryItems set cItemPrice = 30 where iItemId = 1 Limit 1;
update groceryItems set cItemPrice = 30 where iItemId = 2 Limit 1;
update groceryItems set cItemPrice = 30 where iItemId = 3 Limit 1;
update groceryItems set cItemPrice = 50 where iItemId = 4 Limit 1;
update groceryItems set cItemPrice = 50 where iItemId = 5 Limit 1;
update groceryItems set cItemPrice = 45 where iItemId = 6 Limit 1;
update groceryItems set cItemPrice = 20 where iItemId = 7 Limit 1;
update groceryItems set cItemPrice = 25 where iItemId = 8 Limit 1;