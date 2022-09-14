import { convertToRem, feedStyled as styled } from "../../../styles";

export const PostHeaderWrapper = styled("article", {});

export const PostHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
});

export const HeaderContent = styled("div", {
  width: "$fluid",
  display: "flex",
  gap: "16",
});

export const PostTime = styled("time", {
  fontSize: convertToRem(1),
  color: "$gray10",
});

export const AuthorAvatar = styled("img", {
  width: "calc(3rem + 12px)",
  height: "calc(3rem + 12px)",
  borderRadius: "$rounded-light",
  border: "4px solid $gray8",
  outline: "2px solid $grass10",
});

export const AuthorInfoContent = styled("div", {
  paddingLeft: "$16",
  display: "flex",
  flexDirection: "column",
});

export const AuthorName = styled("strong", {});

export const AuthorJob = styled("span", {});
