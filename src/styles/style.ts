import styled from "styled-components";
import Link from "next/link";

export const MainWrapper = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding: 20px;
	font-family: "arial";
	background-color: #dfdfdf;
`;

export const Heading = styled.div`
	font-size: 24px;
	font-weight: bold;
	padding-bottom: 20px;
`;

export const Icon = styled.img`
	height: 16px;
	vertical-align: text-top;
`;

export const LinkButton = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	font-size: 24px;
	color: #242424;
	margin: 10px;
	padding: 30px;
	border: 1px solid #242424;
	box-shadow: 0px 0px 5px #ddd;
	text-align: center;
	display: block;
	background-color: #fdfdfd;

	&:hover {
		box-shadow: 0px 0px 5px #888;
		background-color: #f5f5f5;
		color: #0070f3;
	}
`;

export const Button = styled.div`
	text-decoration: none;
	cursor: pointer;
	font-size: 14px;
	color: #242424;
	padding: 10px;
	border: 1px solid #aaa;
	text-align: center;
	display: block;
	background-color: #fdfdfd;
	width: max-content;
	margin-top: 48px;
	font-weight: bold;

	img {
		margin-right: 3px;
	}

	&:hover {
		box-shadow: 0px 0px 3px #ccc;
		background-color: #f5f5f5;
		color: #0070f3;
	}
`;

export const SmallLinkButton = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	font-size: 14px;
	color: #242424;
	padding: 10px;
	border: 1px solid #aaa;
	text-align: center;
	background-color: #fdfdfd;
	width: fit-content;
	font-weight: bold;

	&:hover {
		box-shadow: 0px 0px 3px #ccc;
		background-color: #f5f5f5;
		color: #0070f3;
	}
`;

// #Region: Start: Overlay

export const OverlayContainer = styled.div`
	position: relative;
`;

export const Image = styled.img`
	border: 1px solid #dfdfdf;
	margin-top: 10px;
	width: 100%;
`;

export const Overlay = styled.div<{ shouldShow?: boolean }>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 40%;
	opacity: ${(props) => (props.shouldShow ? 0.95 : 0)};
	transition: 0.5s ease;
	background: linear-gradient(#dfdfdf 0%, #fff 100%);
	width: 100%;
	padding-right: 1px;
`;

export const OverlayText = styled.div`
	color: #0070f3;
	font-size: 24px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
`;

// #Region: End: Overlay

// #Region: Start: Grid

export const Row = styled.div`
	display: flex;
	gap: 5px;
	grid-area: content;
	justify-content: center;
`;

export const LeftColumn = styled.div`
	width: 100%;
	padding-top: 10px;
`;

export const RightColumn = styled.div`
	float: right;
`;
// #Region: End: Grid

// #Region: Start: Progress bar

export const CircleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
	position: relative;
`;

export const Circle = styled.svg`
	width: 100%;
	height: 100%;
	transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
	fill: none;
	stroke: #fafafa;
	stroke-width: 10;
`;

export const CircleProgress = styled.circle`
	fill: none;
	stroke: #0070f3;
	stroke-width: 10;
	stroke-linecap: round;
	transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const CircleText = styled.text`
	fill: #0070f3;
	font-size: 22px;
	font-weight: bold;
	text-anchor: middle;
	dominant-baseline: middle;
	transform: rotate(90deg);

	span {
		fill: #0070f3;
		transform: rotate(90deg);
		font-size: 20px;
	}
`;

// #Endregion: Progress bar
