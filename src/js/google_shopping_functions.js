var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

// exercise 1
// var getItems = function(objectData) {
//   console.log(objectData.items);
//   return objectData.items;
// }
// getItems(data);


// exercise 2
var getItemsByBrand =  function(some, brand){
  var newArray = [];
  for(var i = 0; i < some.items.length; i++){
    if(some.items[i].product.brand === brand){
      newArray.push(some.items[i]);
    }
  }
  return newArray;
}
console.log(getItemsByBrand(data, "Sony"));


// exercise 3
// var getItemsByAuthor =  function(some, author){
//   var newArray = [];
//   for(var i = 0; i < some.items.length; i++){
//     if(some.items[i].product.author.name === author){
//       newArray.push(some.items[i].product.author.name);
//     }
//   }
//   return newArray;
// }
// console.log(getItemsByAuthor(data, "Target"));

// exercise 4
// var getAvailableProducts = function(some) {
//   var newArray = [];
//   for(var i = 0; i < some.items.length ;i++){
//     if(some.items[i].product.inventories[0].availability === "inStock"){
//       newArray.push(some.items[i].product);
//     }
//   }
//   console.log(newArray.length);
//   console.log(i);
//   return newArray;
// }
// getAvailableProducts(data);

// exercise 5



/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

