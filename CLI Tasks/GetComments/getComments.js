import { get } from "@openfn/language-http";

export default [
  get("https://jsonplaceholder.typicode.com/posts/1/comments", {
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  }),

  (state) => {
    const comments = state.data;
    const extracted = comments.map((comment) => ({
      name: comment.name,
      email: comment.email,
    }));
    console.log("Extracted names and emails:");
    console.log(extracted);

    return state;
  },
];
