import fs from "fs";

export function saveJson(documentName, jsonObj) {
  const jsonContent = JSON.stringify(jsonObj);

  fs.writeFile(`./${documentName}.json`, jsonContent, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
  });
}
