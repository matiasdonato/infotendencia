const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//aplying middlewares
function loadFunctionsFromFolder(folderPath) {
    fs.readdirSync(folderPath)
        .filter((file) => file.endsWith('.js'))
        .forEach((file) => {
            const filePath = (folderPath + "/" + file).split("/");
            const route = "./routes/" + filePath[3]
            let middlew = require(route)
            app.use("/" + filePath[3].split(".")[0], middlew)
        });
}
loadFunctionsFromFolder("./src/routes")

module.exports = app;