const express = require("express");
const app = express();

app.use("/users/", require("./routes/usersRoute"));

app.listen(3001, () => {
    console.log("express server is runnimg on port 3001");
})