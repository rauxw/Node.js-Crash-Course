// Module wrapper

(function (x, y, z) {
  console.log("Hello");
})();

(function (exports, require, module, __filename, __dirname) {
  console.log("Hello1s");
})();

console.log(__filename);
console.log(__dirname);
