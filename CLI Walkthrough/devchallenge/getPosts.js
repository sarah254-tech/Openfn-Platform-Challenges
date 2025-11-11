import { get } from "@openfn/language-http";
import { fn } from "@openfn/language-common";
/*export default [
  get("https://jsonplaceholder.typicode.com/posts", {
    afterResponse: state => {
      console.log(state.data[0]); // logs the first post
      return state;
    }
  })
];
*/

/*
// getPosts.

export default [
  // Step 1: Get data from an external API
  get("https://jsonplaceholder.typicode.com/posts"), //get(...): Fetches data like visiting a website

  // Step 2: Group posts by userId
  fn((state) => {
    const posts = state.data; //state.data: Stores what was fetched (list of posts)

    const groupPostsByUserId = posts.reduce((acc, post) => {
      //.reduce(...): Collects posts and groups them using userId like buckets

      //groupPostsByUserId[1]: Shows posts for user with ID = 1
      const existing = acc[post.userId] || [];
      return {
        ...acc,
        [post.userId]: [...existing, post],
      };
    }, {});

    console.log(groupPostsByUserId);
    return { ...state, groupPostsByUserId };
  }),

  // Step 3: Log posts by userId = 1
  fn((state) => {
    const { groupPostsByUserId } = state;
    console.log("Posts by userId 1:", groupPostsByUserId[1]);
    return state;
  }),
];
*/

//Modify getPosts.js to group posts by user-ID

// Get all posts
get("https://jsonplaceholder.typicode.com/posts");

// Group posts by user
fn((state) => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return { ...acc, [post.userId]: [...existingValue, post] };
  }, {});

  // console.log(groupPostsByUserId);
  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn((state) => {
  const { groupPostsByUserId } = state;
  const posts = groupPostsByUserId[1];

  // console.log("Post with userId 1", groupPostsByUserId[1]);
  return { ...state, posts };
});

each("posts[*]", (state) => {
  console.log("Post", JSON.stringify(state.data, null, 2));
  return state;
});
