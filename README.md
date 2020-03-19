# API Proof of Concept for interacting with CBOR data

## This API uses the zero framework
`npm i -g zero `

There are three endpoints:
1. cbor - see cbor.js
2. convert - see convert.js
3. json - see json.js

## Some examples

1. ```curl localhost:3000/cbor```
2. ```curl localhost:3000/convert -d ' { "field1": "value1", "field2": { "a": 1, "b": 2 }}'```


## Todo
Accept an encode string that represents cbor data and return it converted to json (or return an error if it is not json).
