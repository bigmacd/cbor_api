const cbor = require("cbor")

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

// accept json as input and output cbor
// curl localhost:3000/convert -d ' { "field1": "value1", "field2": { "a": 1, "b": 2 }}'
module.exports = (req, res) => {

    console.log("params: " + require('util').inspect( req.params ));
    console.log("query: " + require('util').inspect( req.query ));
    console.log("body: " + require('util').inspect( req.body ));

    encoded = cbor.encode(req.body)

    res.send(encoded.toString('hex'));

}
