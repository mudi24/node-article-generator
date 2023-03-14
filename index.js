import { readFile } from "fs";

readFile("./corpus/data.json", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error(err);
  }
});
