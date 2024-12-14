const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const data = {
  cat: {
    sound: "야옹!",
  },
  dog: {
    sound: "멍멍!",
  },
  bird: {
    sound: "짹짹!",
  },
};

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/name/:animalType", function (req, res) {
  const { animalType } = req.params;
  console.log(animalType);
  let result = "";
  switch (animalType) {
    case "cat":
      result = data.cat;
      break;
    case "dog":
      result = data.dog;
      break;
    case "bird":
      result = data.bird;
      break;
    default:
      result = "알 수 없는 동물 울음 소리";
      break;
  }
  res.json(result);
});

app.listen(port, () => {
  console.log(`${port} is Listening...`);
});
