import * as fs from "fs";

//Making Directory

fs.mkdir(
  "/media/hardik/storage/Documents/nodejspr/5 FS Module/2 Callback api/api",
  (error) => {
    if (error) throw error;
    console.log("Directory created");
  }
);
