import { convertToRem, feedStyled as styled } from "../../styles";
import Button from "../Button";

export const FormContent = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: '$20',
  width: "$fluid",
  marginTop: "$20",
  paddingTop: "$20",
  borderTop: "1px solid $gray6",
});

export const FormDescription = styled("strong", {
  lineHeight: 1.6,
  color: "$gray11",
});

export const FormTextArea = styled("textarea", {
    width: '$fluid',
    background: '$gray2',
    border: 0,
    resize: 0,
    height: '6rem',
    padding: '1rem',
    borderRadius: convertToRem(6),
    color:'$gray11',
    lineHeight: 1.6,
    marginTop: '0.5rem'
});

export const FormButton = styled(Button, {
  width: convertToRem(160),
  background: '$grass10',
  color: '$grass12'
});

