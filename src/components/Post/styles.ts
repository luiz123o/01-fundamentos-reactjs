import { feedStyled as styled } from "../../styles";

export const Wrapper = styled("div", {
  backgroundColor: "$gray4",
  borderRadius: "$rounded-light",
  padding: "$40",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const CommentList = styled("div", {});