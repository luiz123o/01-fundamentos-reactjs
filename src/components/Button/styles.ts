import { feedStyled as styled, convertToRem } from "../../styles";

export const Button = styled("button", {
  width: "$fluid",
  appearance: "none",
  border: "1px solid $grass10",
  color: "$grass10",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderRadius: "$rounded-light",
  height: `${convertToRem(44)}`,
  px: "$16",
  fontWeight: "bold",
  textDecoration: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$8",

  transition: '0.2s color, 0.2s backgroundColor',

  '&:hover': {
    color: "$gray12",
    backgroundColor: '$grass10'
  }
});
