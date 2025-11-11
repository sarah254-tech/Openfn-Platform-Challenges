import { get } from "@openfn/language-http";

export default [
  get("https://api.covidtracking.com/v1/states/ca/daily.json", {
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  }),

  (state) => {
    const data = state.data; // ✅ Now this will work
    const first7 = data.slice(0, 7);
    console.log("First 7 days of CA COVID data:", first7);
    return { ...state, first7 };
  },
];
