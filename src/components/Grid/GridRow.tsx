import styled from 'styled-components';
import { MOBILE_ONLY_MEDIA_QUERY, TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from '../../styles';

export const GridRow = styled('div')`
  display: grid;

  @media ${MOBILE_ONLY_MEDIA_QUERY} {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    grid-column-gap: 24px;
    min-width: 272px;
    margin-left: 24px;
    margin-right: 24px;
  }
  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(34px, 1fr));
    grid-column-gap: 24px;
    margin-left: 48px;
    margin-right: 48px;
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(53px, 1fr));
    grid-column-gap: 24px;
    max-width: 1152px;
    min-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;
