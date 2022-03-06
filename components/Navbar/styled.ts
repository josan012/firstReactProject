import "@fontsource/inter";

import styled from "@emotion/styled";
import theme from "../theme";

export const Style = styled.div`
  nav {
    display: flex;
    align-items: center;
    background-color: ${theme.palette.primary.main};
    height: 90px;
    padding: 30px 25px;
  }

  nav > .nav--logo_text,
  nav > .nav--title {
    margin: 0;
    font-family: Inter, sans-serif;
  }

  nav > .nav--logo_text {
    margin-left: 7px;
    margin-right: auto;
    color: #61dafb;
    font-weight: 700;
    font-size: 22px;
  }

  nav > .nav--title {
    color: #deebf8;
    font-weight: 600;
  }
`;
export default Style;
