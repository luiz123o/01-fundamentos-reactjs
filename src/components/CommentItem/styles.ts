import { convertToRem, feedStyled as styled } from "../../styles";
import Button from "../Button";

export const CommentContainer = styled("div", {
  marginTop: "$24",
  display: "flex",
  gap: "$16",
});

export const CommentImage = styled("img", {
  width: "$48",
  height: "$48",
  borderRadius: "$rounded-light",
});

export const CommentBox = styled("div", {
  flex: 1,
});

export const CommentContent = styled("div", {
  backgroundColor: "$gray6",
  borderRadius: "$rounded-light",
  padding: "$16",
});

export const CommentHeader = styled("header", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const CommentAuthorContent = styled("div", {});

export const CommentAuthorName = styled("strong", {
  display: "block",
  fontSize: "$14",
  lineHeight: 1.6,
});

export const CommentAuthorPostTime = styled("time", {
  display: "block",
  fontSize: "$12",
  lineHeight: 1.6,
  color: "$gray10",
});

export const CommentDeleteButton = styled(Button, {
  width: '$24',
  background: "none",
  border: "none",
  color: "$gray10",
  cursor: "pointer",
  lineHeight: 0,
  borderRadius: convertToRem(2),
  padding: 0,

  "&:hover": {
    background: "none",
    border: "none",
    color: '$red500'
  },
});

export const CommentDescription = styled("p", {
  marginTop: '$16',
  color: '$gray11'
});

export const CommentFooter = styled("footer", {
  marginTop: '$16'
});

export const DocumentTime = styled("time", {
  fontSize: convertToRem(1),
  color: "$gray10",
});

export const CommentLikeButton = styled(Button, { 
  display: "flex",
  alignItems: "center",
  justifyContent: 'flex-start',
  background: "none",
  border: "none",
  color: "$gray11",
  cursor: "pointer",
  paddingLeft: 0,
  


  "&:hover": {
    background: "none",
    border: "none",
    color: "$grass10",
  },

  '& > span::before': {
    content: "\\2022",
    paddingRight: '0.5rem'
    }
});