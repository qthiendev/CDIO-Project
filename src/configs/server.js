const express = require("express");
const app = express();
const port = 55000;
const configViewEngine = require("./viewEngine.js");
const webRoutes = require("./mainRouter.js");
const session = require("express-session");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    expires: true,
    maxAge: 10 * 60 * 1000,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
app.use("/", webRoutes);

// Local host: for own computer only
app.listen(port, () => {
  console.log(`[SYSTEM] Listening on port ${port}.`);
  console.log(`[SYSTEM] ACCESS LINK: http://localhost:${port}.`);
});