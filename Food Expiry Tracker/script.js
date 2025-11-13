let food = 
[{
  name: "Milk",
  expiryDate: "2025-11-20"
},
{
  name: "Apple",
  expiryDate: "2025-11-15"
},
{
  name: "Apple",
  expiryDate: "2025-11-15"
},
{
  name: "Apple",
  expiryDate: "2025-11-15"
},
{
  name: "Bread",
  expiryDate: "2025-11-12"
},
{
  name: "Eggs",
  expiryDate: "2025-11-25"
},
{
  name: "Milk",
  expiryDate: "2025-11-20"
},
{
  name: "Milk",
  expiryDate: "2025-11-20"
}


]



function checkExpiry(food){

let today = new Date();

let expiry = new Date(food.expiryDate);

let diffDays = Math.round((expiry - today) / (1000 * 60 * 60 * 24));


if (diffDays > 0){
    return `${food.name} has ${diffDays} days left`;
}

  if(diffDays< 0){
    return `${food.name} has expired ${Math.abs(diffDays)} days ago`;


 }
 if (diffDays === 0) {
    return `${food.name} expires today`;
}

}


let names = food.map(item => item.name);

let uniqueNames = [...new Set(names)];
console.log(uniqueNames)
for (let i = 0; i < uniqueNames.length; i ++) {
  let item = food.find(f => f.mame === uniqueNames[i]);
console.log(checkExpiry([item]));
}