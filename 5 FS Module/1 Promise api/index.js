import * as fs from "fs/promises";

// CREATING DIRECTORY

// try {
//   await fs.mkdir(
//     "/media/hardik/storage/Documents/nodejspr/5 FS Module/1 Promise api/Hes/King/Kong",
//     { recursive: true }
//   );
//   console.log("Folder created...");
// } catch (error) {
//   console.log("Error:" + error);
// }

// READ DIRECTORY

// try {
//   const files = await fs.readdir(
//     "/media/hardik/storage/Documents/nodejspr/5 FS Module/1 Promise api/"
//   );
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// REMOVE FOLDER / DIRECTORY

// try {
//   await fs.rmdir(
//     "/media/hardik/storage/Documents/nodejspr/5 FS Module/1 Promise api/Hesx"
//   );
//   console.log("Directory removed");
// } catch (error) {
//   console.log(error);
// }

// WRITING FILE

// try {
//   await fs.writeFile("Hi.txt", "LOl this is amazing");
// } catch (error) {
//   console.log(error);
// }

// READING A FILE

// try {
//   const reader = await fs.readFile("Hi.txt", "utf-8");
//   console.log(reader);
// } catch (error) {
//   console.log(error);
// }

// APPENDING DATA

// try {
//   await fs.appendFile("Hi.txt", " LOL ");
// } catch (error) {
//   console.log(error);
// }

// COPY FILE

// try {
//   await fs.copyFile("Hi.txt", "Hello.txt");
// } catch (error) {
//   console.log(error);
// }

// GET STATS

// try {
// const data = await fs.stat("Hello.txt");
// console.log(data);
// console.log(data.isDirectory());
// console.log(data.isFile());
// } catch (error) {
// console.log(error);
// }
