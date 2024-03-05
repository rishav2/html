const fs = require("fs");
const path = require("path");

// Specify the path to the folder containing JSON files
const folderPath =
  "/Users/rishavsmacmini/Downloads/HTML-Export/_next/data/mDiKkmNbO-WO54BOyiN2A/blog";

// Array to store extracted content
const extractedContentArray = [];

// Function to read JSON files from a folder
function readJsonFiles(folderPath) {
  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  // Iterate through each file
  files.forEach((file) => {
    // Check if the file has a .json extension
    if (path.extname(file) === ".json") {
      // Construct the full path to the JSON file
      const filePath = path.join(folderPath, file);

      // Read the JSON file content
      const fileContent = fs.readFileSync(filePath, "utf-8");

      try {
        // Parse JSON content
        const jsonData = JSON.parse(fileContent);
        // console.log(jsonData)
        // Assuming content is a key in the JSON
        const content = jsonData?.pageProps?.content;

        // Push content to the array
        extractedContentArray.push(content);
      } catch (error) {
        console.error(`Error parsing JSON file ${file}: ${error.message}`);
      }
    }
  });
}
readJsonFiles(folderPath);

const outputpath =
  "/Users/rishavsmacmini/Downloads/HTML-Export/_next/data/mDiKkmNbO-WO54BOyiN2A/blog/allBlogs.json";

fs.writeFileSync(outputpath, JSON.stringify(extractedContentArray, null, 2));
