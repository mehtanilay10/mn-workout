import styled from "styled-components";
import Link from "next/link";

// ─── Design Tokens — GitHub Dark theme ───────────────────────────────────────
const bg = "#0d1117";                        // canvas.default
const surface = "#161b22";                   // canvas.overlay
const surfaceHover = "#21262d";              // canvas.inset
const border = "#30363d";                    // border.default
const primary = "#58a6ff";                   // accent.fg
const primaryHover = "#79c0ff";              // accent.fg (lighter)
const primaryLight = "rgba(56, 139, 253, 0.10)"; // accent.subtle
const textPrimary = "#e6edf3";               // fg.default
const textMuted = "#8b949e";                 // fg.muted
const disabledBg = "#21262d";
const disabledText = "#484f58";              // fg.disabled
const overlayBg = "rgba(13, 17, 23, 0.88)"; // bg-based overlay
export const PageWrapper = styled.div`
	min-height: 100dvh;
	background: ${bg};
	padding: 16px;

	@media (min-width: 640px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ExerciseLayout = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (min-width: 640px) {
		width: 100%;
		flex-direction: row;
		align-items: stretch;
		gap: 28px;
		padding-top: 8px;
	}
`;

export const ControlPanel = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 640px) {
		width: 260px;
		flex-shrink: 0;
	}
`;

export const VideoPanel = styled.div`
	flex: 1;
	min-width: 0;
`;

// Timer circle first, overall progress second — side-by-side on mobile, stacked at bottom on desktop
export const ProgressRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;

	/* Timer circle — fixed size, no extra margin */
	& > :first-child {
		flex-shrink: 0;
		margin-top: 0 !important;
	}

	/* ProgressLine — fills remaining width */
	& > :last-child {
		flex: 1;
		min-width: 0;
	}

	/* On desktop: stack vertically, push to bottom of the stretched ControlPanel */
	@media (min-width: 640px) {
		flex-direction: column;
		align-items: stretch;
		gap: 16px;
		margin-top: auto;
		padding-top: 8px;

		& > :first-child {
			margin-top: 0 !important;
		}

		& > :last-child {
			flex: none;
		}
	}
`;

// ─── Home Page ────────────────────────────────────────────────────────────────
export const HomeWrapper = styled.div`
	min-height: 100dvh;
	background: ${bg};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px 16px;
`;

export const HomeTitle = styled.h1`
	font-size: clamp(1.75rem, 5vw, 2.5rem);
	font-weight: 800;
	margin: 0 0 8px;
	text-align: center;
	letter-spacing: -0.03em;
	color: ${textPrimary};
`;

export const HomeSubtitle = styled.p`
	font-size: 1rem;
	color: ${textMuted};
	margin: 0 0 48px;
	text-align: center;
`;

export const WorkoutGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 16px;
	width: 100%;
	max-width: 560px;
`;

export const WorkoutNumber = styled.span`
	font-size: 2rem;
	font-weight: 900;
	letter-spacing: -0.04em;
	color: ${primary};
	display: block;
`;

export const MainWrapper = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding: 10px;
`;

// ─── Typography ───────────────────────────────────────────────────────────────
export const Heading = styled.h1`
	font-size: clamp(1.25rem, 4vw, 1.75rem);
	font-weight: 800;
	margin: 0;
	text-transform: capitalize;
	letter-spacing: -0.025em;
	line-height: 1.2;
	color: ${textPrimary};

	@media (min-width: 640px) {
		margin-bottom: 12px;
	}
`;

// ─── Navigation Row ───────────────────────────────────────────────────────────
export const NavRow = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: space-between;
	flex-wrap: wrap;

	/* Desktop: stack Prev/Next row above a full-width Pause/Resume button */
	@media (min-width: 640px) {
		flex-direction: column;
		align-items: stretch;
		gap: 10px;

		& > button {
			width: 100%;
			justify-content: center;
			padding: 12px 16px;
			font-size: 1rem;
		}
	}
`;

export const NavGroup = styled.div`
	display: flex;
	gap: 8px;

	/* Spread Prev to the left edge, Next to the right edge */
	@media (min-width: 640px) {
		justify-content: space-between;
	}
`;

// ─── Buttons ──────────────────────────────────────────────────────────────────
export const Button = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-family: inherit;
	font-size: 0.875rem;
	font-weight: 600;
	border-radius: 10px;
	cursor: pointer;
	transition: background 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
	text-decoration: none;
	user-select: none;
	white-space: nowrap;
	padding: 10px 16px;
	background: ${surface};
	color: ${textPrimary};
	border: 1px solid ${border};

	&:hover:not(:disabled) {
		background: ${surfaceHover};
		border-color: ${primary};
		color: ${primary};
	}

	&:disabled {
		background: ${disabledBg};
		color: ${disabledText};
		border-color: ${border};
		cursor: not-allowed;
		pointer-events: none;
		opacity: 0.5;
	}

	&:active:not(:disabled) {
		opacity: 0.85;
	}
`;

export const SmallLinkButton = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-family: inherit;
	font-size: 0.875rem;
	font-weight: 600;
	border-radius: 10px;
	cursor: pointer;
	transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
	text-decoration: none;
	user-select: none;
	white-space: nowrap;
	padding: 10px 16px;
	background: ${surface};
	color: ${textPrimary};
	border: 1px solid ${border};

	&:hover {
		background: ${surfaceHover};
		border-color: ${primary};
		color: ${primary};
	}

	&:active {
		opacity: 0.85;
	}
`;

export const LinkButton = styled(Link)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 36px 24px;
	background: ${surface};
	border: 1px solid ${border};
	border-radius: 20px;
	color: ${textPrimary};
	font-size: 1.125rem;
	font-weight: 700;
	letter-spacing: -0.01em;
	transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
	gap: 6px;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(99, 102, 241, 0.3);
		border-color: ${primary};
		color: ${primary};
	}

	&:active {
		transform: translateY(0);
	}
`;

export const Icon = styled.img`
	height: 15px;
	width: 15px;
	object-fit: contain;
	flex-shrink: 0;
	filter: invert(1);
	opacity: 0.9;
`;

// ─── Overlay / Video ──────────────────────────────────────────────────────────
export const OverlayContainer = styled.div`
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	background: #000;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img<{ $isReverse: boolean }>`
	width: 100%;
	display: block;
	transform: ${(props) => (props.$isReverse ? "scaleX(-1)" : "scaleX(1)")};
`;

export const Video = styled.video<{ $isReverse: boolean }>`
	width: 100%;
	display: block;
	transform: ${(props) => (props.$isReverse ? "scaleX(-1)" : "scaleX(1)")};
`;

export const Overlay = styled.div<{ $shouldShow?: boolean }>`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${overlayBg};
	opacity: ${(props) => (props.$shouldShow ? 1 : 0)};
	transition: opacity 0.4s ease;
	pointer-events: none;
`;

export const OverlayText = styled.div`
	color: #ffffff;
	font-size: clamp(1.5rem, 6vw, 2.5rem);
	font-weight: 800;
	letter-spacing: -0.02em;
	text-align: center;
	padding: 16px;
	text-shadow: 0 2px 16px rgba(0, 0, 0, 0.6);
`;

// ─── Progress Bar (Circle Timer) ──────────────────────────────────────────────
export const CircleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 120px;
	margin: 8px auto 0;

	@media (min-width: 640px) {
		width: 150px;
		height: 150px;
	}
`;

export const Circle = styled.svg`
	width: 100%;
	height: 100%;
	transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
	fill: none;
	stroke: ${surface};
	stroke-width: 10;
`;

export const CircleProgress = styled.circle`
	fill: none;
	stroke: ${primary};
	stroke-width: 10;
	stroke-linecap: round;
	transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const CircleText = styled.text`
	fill: ${textPrimary};
	font-size: 28px;
	font-weight: 700;
	text-anchor: middle;
	dominant-baseline: middle;
	transform: rotate(90deg);
`;

// ─── Progress Line ────────────────────────────────────────────────────────────
export const BarContainer = styled.div`
	background: ${surface};
	border-radius: 14px;
	padding: 14px 16px;
	border: 1px solid ${border};
`;

export const BarTrack = styled.div`
	height: 6px;
	width: 100%;
	background: ${border};
	border-radius: 50px;
	overflow: hidden;
	margin-bottom: 10px;
`;

export const BarFillter = styled.div<{ $completed: number }>`
	height: 100%;
	width: ${(props) => props.$completed}%;
	background: linear-gradient(90deg, ${primary} 0%, #388bfd 100%);
	border-radius: inherit;
	transition: width 0.5s ease;
`;

export const BarLabels = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const BarLabel = styled.span`
	font-size: 0.75rem;
	font-weight: 600;
	color: ${textMuted};

	span {
		font-weight: 500;
		color: ${textPrimary};
		margin-left: 4px;
	}
`;

// Legacy aliases kept for backward compatibility
export const BarLabelLeft = BarLabel;
export const BarLabelRight = BarLabel;
export const DesktopMainWrapper = MainWrapper;
export const Row = styled.div`display: flex; gap: 8px; align-items: center;`;
export const LeftColumn = styled.div`flex: 1; min-width: 0;`;
export const RightColumn = styled.div`flex-shrink: 0;`;
