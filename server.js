// Worked on HW with Chris, Johnny, Mike and Matt on 07-01-21
// Worked on HW with Miguel on 07-02-21

const express = require("express");
const { sequelize } = require("./models/Product");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
