import styled from 'styled-components';
import { MOBILE_ONLY_MEDIA_QUERY, TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from '../../../styles';

type mobileValues = 1 | 2 | 3 | 4;
type tabletDesktopValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  desktop?: boolean | tabletDesktopValues;
  tablet?: boolean | tabletDesktopValues;
  mobile?: boolean | mobileValues;
}

export const GridCol = styled.div<Props>`
  @media ${MOBILE_ONLY_MEDIA_QUERY} {
    ${({ mobile }) =>
      mobile
        ? `grid-column: auto / span ${mobile};
      -ms-grid-column: ${mobile};`
        : 'display: none'};
  }
  @media ${TABLET_MEDIA_QUERY} {
    ${({ tablet }) =>
      tablet
        ? `grid-column: auto / span ${tablet};
      -ms-grid-column: ${tablet};`
        : 'display:none'};
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    ${({ desktop }) =>
      desktop
        ? `grid-column: auto / span ${desktop};
      -ms-grid-column: ${desktop};`
        : 'display:none'};

    ${({ desktop, tablet }) => desktop && !tablet && 'display: inline'}
  }
`;
