import { get } from "@openfn/language-http";

export default [
  get("https://jsonplaceholder.typicode.com/posts/180", {
    headers: {
      "Content-Type": "application/json",
    },
  }),

  (state) => {
    console.log("First user:", state.data[180]);
    return state;
  },
];
