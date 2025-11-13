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

document.getElementById("checkBtn").addEventListener("click", showResults);
function showResults(){
    let names = food.map(item => item.name);
    let uniqueNames = [...new Set(names)];
    let summary = [];

    for (let i = 0; i < uniqueNames.length; i++) {
        let item = food.find( f => f.name === uniqueNames[i]);
        summary.push({
            name: uniqueNames[i],
            status: checkExpiry(item)
            
        });
    
    }
    let output = document.getElementById("output");
    output.innerHTML="";

    for (let i = 0; i < summary.length; i++){
        let itemDiv = document.createElement("div");
        itemDiv.textContent = summary[i].status;
     
        if (summary[i].status.includes("days left")){
            itemDiv.classList.add("fresh");
        }
                if (summary[i].status.includes("expired")){
            itemDiv.classList.add("expired");
        }
                if (summary[i].status.includes("today")){
            itemDiv.classList.add("today");
        }
                output.appendChild(itemDiv);

}
}

// let names = food.map(item => item.name);

// let uniqueNames = [...new Set(names)];
// let summary = [];

// console.log(uniqueNames)
// for (let i = 0; i < uniqueNames.length; i ++) {
//   let item = food.find(f => f.name === uniqueNames[i]);
// console.log(checkExpiry(item));


// summary.push({
//     name: uniqueNames[i],
//     status: checkExpiry(item)
// });

// }
// console.log(JSON.stringify(summary, null , 2))
