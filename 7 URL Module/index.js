import { URL } from "url";

const myURL = new URL(
  "https://www.youtube.com/watch?v=EsUL2bfKKLc&list=PLSDeUiTMfxW6VChKWb26Z_mPR4f6fAmMV&index=9"
);

// console.log(myURL.protocol);
// console.log(myURL.search.includes("index"));
// console.log(myURL.host);
console.log(myURL.searchParams);
