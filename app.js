const express = require("express");
const app = express();
const cors = require("cors");
const pdf = require("html-pdf");
const path = require("path");
const pdfTemplate = require("./pdfTemplate");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
app.listen(process.env.PORT || 8080, (req, res) => {
  console.log("Server running on PORT 8080");
});
