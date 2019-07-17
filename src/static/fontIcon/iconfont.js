import { createGlobalStyle } from "styled-components";

export const GlobalIconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1563357485569'); /* IE9 */
  src: url('./iconfont.eot?t=1563357485569#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1563357485569') format('woff'),
  url('./iconfont.ttf?t=1563357485569') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1563357485569#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Merriweather";
  src:url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
  }
`
