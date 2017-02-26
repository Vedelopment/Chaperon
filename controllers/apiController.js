function index(req, res) {
  res.json({
    message: "Chaperon API",
    base_url: "https://chaperon-vedelopment.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}


module.exports.index = index;
