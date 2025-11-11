import {fn} from "@openfn/language-common";

fn((state) => {
  console.log(
    `Hello, ${state.data.name || "Welcome to OpenFn CLI challenges!"}!`
  );

  return state;
});
