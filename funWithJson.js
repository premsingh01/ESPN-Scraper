const fs = require("fs");
const { fileURLToPath } = require("url");
// let buffer = fs.readFileSync('./example.json') // Reading the JSON File

// //console.log(buffer)

// let data = JSON.parse(buffer) // coverts the buffer data into JSON format

//console.log(data)

const xlsx = require('xlsx')

let data2 = require("./example.json");

data2.push({
  name: "Bruce",
  "last name": "Bannner",
  isAvenger: true,
  Age: 10000,
  friends: ["Bruce", "Tony", "Peter"],
  address: {
    planet: "Asgard",
  },
});

//console.log(data2);

let stringData = JSON.stringify(data2);

//console.log(stringData);

fs.writeFileSync("./example.json", stringData);



function excelWriter(filePath , jsonData , sheetName){
       let newWB = xlsx.utils.book_new();
       // Add new WorkBook
       let newWS = xlsx.utils.json_to_sheet(jsonData);
       // This will take JSON and will convert into Excel Format
       xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
       xlsx.writeFile(newWB,filePath);   
}


function excelReader(filePath , sheetName){
       let wb = xlsx.readFile(filePath);
       // which excel file to read
       let excelData = wb.Sheets[sheetName];
       // pass the sheet Name
       let ans = xlsx.utils.sheet_to_json(excelData);
       // conversion from sheet to JSON
       console.log(ans)
       
}












