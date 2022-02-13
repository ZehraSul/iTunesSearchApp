const index = require("../routes/index.js");
const favourites = require("../favourites.json");

describe("Test Handle Get", function () {
  test("responds to /", () => {
    const req = {};
    const res = {
      text: "",
      json: function (input) {
        this.text = input;
      },
    };

    index.handleGet(req, res);

    expect(res.text).toEqual(favourites);
  });
});
