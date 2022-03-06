import "@fontsource/inter";

import styled from "@emotion/styled";
import theme from "../theme";

export const Style = styled.div`
  main {
    background-color: ${theme.palette.secondary.main};
    padding: 57px 27px;
    color: white;
    background-image: url(/react.png);
    background-repeat: no-repeat;
    background-position: right 75%;
  }

  .main--title {
    margin: 0;
    font-size: 39px;
    letter-spacing: -0.05em;
  }

  .main--facts {
    margin-top: 46px;
  }

  .main--facts > li {
    line-height: 19px;
    padding-block: 10px;
    max-width: 370px;
  }

  .main--facts > li::marker {
    font-size: 1.4rem;
    color: #61dafb;
  }
`;
export default Style;
