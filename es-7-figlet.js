const figlet = require("figlet");

figlet.text(
  "Hello World!",
  {
    font: "isometric2",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 110,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
