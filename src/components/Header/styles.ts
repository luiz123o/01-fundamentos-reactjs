import { feedStyled as styled } from "../../styles/index";

export const HeaderWrapper = styled("div", {
  backgroundColor: "$gray4",
  display: "flex",
  justifyContent: "center",
  padding: "$20",
});

export const HeaderTitle = styled("strong", {
  color: "#fff",
});

export const HeaderLogo = styled("img", {
    height: '$32'
});
