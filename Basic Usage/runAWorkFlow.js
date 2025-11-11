/*{
  "options": {
    "start": "a" // optionally specify the start node (defaults to steps[0])
  },
  "workflows": {
    "steps": [
      {
        "id": "a",
        "expression": "fn((state) => state)", // code or a path
        "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)
        "state": {
          "data": {} // optionally pre-populate the data object (this will be overriden by keys in in previous state)
        },
        "configuration": {}, // Use this to pass credentials
        "next": {
          // This object defines which steps to call next
          // All edges returning true will run
          // If there are no next edges, the workflow will end
          "b": true,
          "c": {
            "condition": "!state.error" // Note that this is an expression, not a function
          }
        }
      }
    ]
  }
}
*/