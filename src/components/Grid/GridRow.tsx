import styled from "styled-components";
import {
  remCalc,
  MOBILE_ONLY_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY,
} from "../../styles";

export const GridRow = styled("div")`
  display: grid;
  /*
    IE Support
  */
  display: -ms-grid;

  @media ${MOBILE_ONLY_MEDIA_QUERY} {
    grid-template-columns: repeat(4, minmax(${remCalc(50)}, 1fr));
    grid-column-gap: ${remCalc(24)};
    min-width: ${remCalc(272)};
    margin-left: ${remCalc(24)};
    margin-right: ${remCalc(24)};
  }
  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(${remCalc(34)}, 1fr));
    grid-column-gap: ${remCalc(24)};
    margin-left: ${remCalc(48)};
    margin-right: ${remCalc(48)};
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(${remCalc(53)}, 1fr));
    grid-column-gap: ${remCalc(24)};
    max-width: ${remCalc(1152)};
    min-width: ${remCalc(900)};
    margin-left: auto;
    margin-right: auto;

    /*
      IE Support
    */
    -ms-grid-columns: minmax(53px, 74px) 24px;
  }
`;
