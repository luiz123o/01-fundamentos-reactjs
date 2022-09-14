import { feedStyled as styled, convertToRem } from "../../styles";

export const Wrapper = styled("aside", {
  backgroundColor: "$gray4",
  borderRadius: "$rounded-light",
  overflow: "hidden",
});
export const ImgCover = styled("img", {
  width: "$fluid",
  height: "$72",
  objectFit: "cover",
});

export const ProfileContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  marginTop: "calc(0px - 1.5rem - 6px)",
});

export const ProfileAvatar = styled("img", {
  width: "calc(3rem + 12px)",
  height: "calc(3rem + 12px)",
  borderRadius: "$rounded-light",
  border: "4px solid $gray8",
  outline: "2px solid $grass10",
});

export const ProfileName = styled("strong", {
  marginTop: "$16",
  color: "$gray12",
  lineHeight: 1.6,
});

export const ProfileJob = styled("span", {
    fontSize: convertToRem(12),
    color: "$gray11",
    lineHeight: 1.6
});

export const ProfileFooter = styled("footer", {
  borderTop: `1px solid ${"$gray6"}`,
  marginTop: "1.5rem",
  padding: "1.5rem 2rem 2rem",
});
