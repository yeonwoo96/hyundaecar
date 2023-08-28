import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.4;
	font-size: 14px;
	font-family: 'Noto Sans KR', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.h1{font-size:72px;
	@media (max-width:1024px) {
		font-size: 42px;
	}
	@media (max-width:768px) {
		font-size: 8.35vw;
	}}
.h2{@media (min-width:767px) {
    font-size: 44px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -.4px;
	}
	@media (max-width:767px) {
		   font-size: 27px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -.4px;
	}}
.h3{font-size:40px;
	font-weight: 600;
}
.h4{font-size:26px;
	
	@media (max-width:1024px) {
		font-size: 20px;
	}
	@media (max-width:768px) {
		font-size: 5vw;
	}}
	button{
		cursor: pointer;
	}
.gray{
	color:#666666;
}
.h5{font-size:16px;
}
`;
