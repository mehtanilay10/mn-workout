import { OverlayContainer, Video, OverlayText, Overlay } from "@/styles/style";

interface VideoContainerProps {
	videoName: string;
	overlayText?: string;
	isReverse: boolean;
}

export default function VideoContainer(props: VideoContainerProps) {
	return (
		<OverlayContainer>
			<Video isReverse={props.isReverse} autoPlay loop preload="auto" src={`/videos/${props.videoName}`} />
			<Overlay shouldShow={props.overlayText ? true : false}>
				<OverlayText>{props.overlayText}</OverlayText>
			</Overlay>
		</OverlayContainer>
	);
}
