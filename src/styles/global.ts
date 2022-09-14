import { globalCss } from "./index";
import { normalize } from "stitches-normalize-css";

export const globalStyles = globalCss(...normalize, {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "&::after": {
      boxSizing: "inherit",
    },
    "&::before": {
      boxSizing: "inherit",
    },
    "&:focus": {
      outline: "transparent",
      boxShadow: "0 0 0 2px $grass10",
    },
  },

  body: {
    margin: "0 auto",
    fontFamily: "$normal",
    fontSize: "$16",
    fontWeight: 400,
    backgroundColor: "$gray3",
    color: "$gray12",
    "-webkit-font-smoothing": "antialiased",
  },
  button: {
    fontFamily: "$normal",
    fontWeight: 400,
    fontSize: "$16",
  },
  input: {
    fontFamily: "$normal",
    fontWeight: 400,
    fontSize: "$16",
  },
  textArea: {
    fontFamily: "$normal",
    fontWeight: 400,
    fontSize: "$16",
  },
});
