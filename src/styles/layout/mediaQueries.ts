import {
  MOBILE_ONLY_MAX_BREAKPOINT_PX,
  TABLET_BREAKPOINT_PX,
  DESKTOP_BREAKPOINT_PX,
} from "./breakPoints";

// source - https://github.com/policygenius/athenaeum/blob/master/src/assets/stylesheets/utilities/_break_points.scss
export const MOBILE_ONLY_MEDIA_QUERY = `only screen and ( max-width: ${MOBILE_ONLY_MAX_BREAKPOINT_PX}px )`;
export const TABLET_MEDIA_QUERY = `only screen and ( min-width: ${TABLET_BREAKPOINT_PX}px )`;
export const DESKTOP_MEDIA_QUERY = `only screen and (min-width: ${DESKTOP_BREAKPOINT_PX}px)`;
export const IE_MEDIA_QUERY =
  "all and (-ms-high-contrast: none), (-ms-high-contrast: active)";
