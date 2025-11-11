import { get } from "@openfn/language-http";

export default [
  get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application.json",
    },
  }),
  (state) => {
    const allPosts = state.data;
    const filteredPosts = allPosts.filter((post) => post.userId === 1);
    console.log("Filtered posts for User id 1:", filteredPosts);

    return { ...state, filteredPosts };
  },
];
