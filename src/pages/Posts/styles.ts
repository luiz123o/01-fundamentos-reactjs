import { feedStyled as styled, convertToRem } from "../../styles";

export const PostWrapper = styled("div", {});

export const PostContent = styled("div", {
  maxWidth: "$70",  
  margin: "$32 auto",
  px: "$16",

  display: "grid",
  gridTemplateColumns: `${convertToRem(256)} 1fr`,
  gap: "$32",
  alignItems: "flex-start",
});

export const PostAside = styled("aside", {});

export const PostMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "$24"
});

