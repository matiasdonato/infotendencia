require('./src/db/database.js');

const app = require("./src/app.js");
const LOCALPORT = 3001



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});