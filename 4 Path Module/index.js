import path from "path";

// console.log(
//   path.dirname(
//     "/media/hardik/storage/Documents/nodejspr/4 Path Module/index.js"
//   )
// );

// console.log(
//   path.extname(
//     "/media/hardik/storage/Documents/nodejspr/4 Path Module/index.js"
//   )
// );
// const x = path.join("c:", "redux-toolkit", "good.js");
// console.log(" Extension: " + path.extname(x));

// GO UP LEVEL

// console.log(path.join("c:", "webkit", "vite", "soke", "../../.."));

// PARSE PATH

console.log(path.parse("c://rootkit//devkit//add.py").base);
console.log(path.parse("c://rootkit//devkit//add.py").ext);
console.log(path.parse("c://rootkit//devkit//add.py").name);
