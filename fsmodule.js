const fs = require('fs');

// fs.readFile("file.txt", "utf8", (err, data) => {
//     console.log(err, data);
// })

//const a = fs.readFileSync("file.txt");
//console.log(a.toString())

fs.writeFile("file2.txt", "hey there its raheel", () => {
    console.log("written to file")
});

console.log("done with the work");
