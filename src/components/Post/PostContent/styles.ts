import { convertToRem, feedStyled as styled } from "../../../styles";

export const Wrapper = styled("div", {
  lineHeight: 1.6,
  color: "$gray11",
  marginTop: "$2",
});

export const PostContentParagraph = styled("p", {
  marginTop: "$16",
  display: "flex",
  color: "$gray12",
  fontSize: "$14",
  gap: convertToRem(4),
});

export const PostContentLink = styled("a", {
  marginTop: "$2",
  fontSize: "$16",
  color: "$grass10",
  cursor: 'pointer',
  textDecoration: "none",
  "&:hover": {
    color: "$grass11",
  },
});
