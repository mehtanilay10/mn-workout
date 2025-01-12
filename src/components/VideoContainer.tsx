import { OverlayContainer, Video, OverlayText, Overlay } from "@/styles/style";

interface VideoContainerProps {
	videoName: string;
	overlayText?: string;
	isReverse: boolean;
	isMobileView?: boolean;
}

export default function VideoContainer(props: VideoContainerProps) {
	return (
		<OverlayContainer isMobileView={props.isMobileView ?? true}>
			<Video isReverse={props.isReverse} isMobileView={props.isMobileView ?? true} autoPlay loop preload="auto" src={`/videos/${props.videoName}`} />
			<Overlay shouldShow={props.overlayText ? true : false}>
				<OverlayText>{props.overlayText}</OverlayText>
			</Overlay>
		</OverlayContainer>
	);
}
