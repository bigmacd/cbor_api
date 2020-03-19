

var tmp = {
    "field1" : "value1",
    "field2" : [
        1, 2, 3, 4, 5
    ],
    "field3" : {
        "field3_1" : "value3_1",
        "field3_2" : "value3_2"
    }
}

// curl localhost:3000/json
module.exports = (req, res) => {

    console.log("params:" + require('util').inspect( req.params ));
    console.log("query: " + require('util').inspect( req.query ));

    res.send(tmp)

}
