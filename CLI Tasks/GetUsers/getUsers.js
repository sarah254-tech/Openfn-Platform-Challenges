import { get } from "@openfn/language-http";

export default [
  get("https://jsonplaceholder.typicode.com/users", {
    headers: {
      "Content-Type": "application/json",
    },
  }),

  (state) => {
    console.log("First user:", state.data[0]);
    return state;
  },
];
