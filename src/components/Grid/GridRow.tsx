import styled from 'styled-components';
import { MOBILE_ONLY_MEDIA_QUERY, TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from '../../styles';

type mobileValues = 1 | 2 | 3 | 4;
type tabletDesktopValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  desktop?: boolean | tabletDesktopValues;
  tablet?: boolean | tabletDesktopValues;
  mobile?: boolean | mobileValues;
}

export const GridRow = styled.div<Props>`
  display: none;

  @media ${MOBILE_ONLY_MEDIA_QUERY} {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    grid-column-gap: 24px;
    min-width: 272px;
    margin-left: 24px;
    margin-right: 24px;

    ${({ mobile }) =>
      mobile && typeof mobile === 'number'
        ? `
            display: grid;
            grid-template-columns: repeat(${mobile}, minmax(50px, 1fr));
            max-width: auto;
            min-width: auto;
            margin-right: 0;
            margin-left: 0;
      `
        : `
            display: grid;
        `}
  }
  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(34px, 1fr));
    grid-column-gap: 24px;
    margin-left: 48px;
    margin-right: 48px;

    ${({ tablet }) =>
      tablet && typeof tablet === 'number'
        ? `
            display: grid;
            grid-template-columns: repeat(${tablet}, minmax(34px, 1fr));
            max-width: auto;
            min-width: auto;
            margin-right: 0;
            margin-left: 0;
      `
        : `
            display: grid;  
        `}
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(53px, 1fr));
    grid-column-gap: 24px;
    min-width: 900px;
    margin-left: auto;
    margin-right: auto;

    ${({ desktop }) =>
      desktop && typeof desktop === 'number'
        ? `
            display: grid;
            grid-template-columns: repeat(${desktop}, minmax(53px, 1fr));
            max-width: auto;
            min-width: auto;
            margin-right: 0;
            margin-left: 0;
      `
        : `
            display: grid;
        `}
  }
`;
