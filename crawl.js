const scheduler = require("node-schedule");
const { type } = require("os");

var request = require("request");

var url = "http://localhost:500/users";

const schedule = scheduler.scheduleJob("*/1 * * * * *", function () {
  request(
    {
      url: url,
      method: "GET",
    },
    async function (error, response, body) {
      //console.log("Status", response.statusCode);
      //console.log("Headers", JSON.stringify(response.headers));
      console.log("Reponse received", JSON.parse(body)[0]);
    }
  );
});
