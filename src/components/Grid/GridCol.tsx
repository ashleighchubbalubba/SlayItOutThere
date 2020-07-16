import styled from "styled-components";
import {
  MOBILE_ONLY_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY,
} from "../../styles";

interface Props {
  desktopSpan?: number;
  tabletSpan?: number;
  mobileSpan?: number;
}

// const whiteColor: "#fff"
// const CSS = `background-color: ${whiteColor};`
/*
    console.log(props)

    props: {
      desktopSpan: 3
      tabletSpan:3
      mobileSpan:3
    }

    {props} = destructuring
    look into props, get the variables
    instead of refering to prop variable, refer directly to variable inside prop

    same thing as
    ${props.mobileSpan}
    */

export const GridCol = styled.div<Props>`
  @media ${MOBILE_ONLY_MEDIA_QUERY} {
    ${({ mobileSpan }) =>
      `grid-column: auto / span ${mobileSpan};
  `};
  }
  @media ${TABLET_MEDIA_QUERY} {
    ${({ tabletSpan }) =>
      `grid-column: auto / span ${tabletSpan};
      `};
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    ${({ desktopSpan }) =>
      `grid-column: auto / span ${desktopSpan};
      `};
  }
`;

//import Grid from "GridCol"

// export const GridCol
// import {GridCol} from "Grid"

/*
  import * as "Grid";
  console.log(*)

  output -->
  GridCol
  GridRow
  ...
  */

//export default Button;
// import Btn from "Button"

/*
  <GridRow>
    <GridCol desktopSpan={10} tabletSpan={5} mobileSpan={3} />
    <GridCol desktopSpan={2} tabletSpan={7} mobileSpan={1} />
  </GridRow>
*/
