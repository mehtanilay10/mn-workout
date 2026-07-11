import { OverlayContainer, Image, OverlayText, Overlay } from "@/styles/style";

interface ImageContainerProps {
	imageName: string;
	title: string;
	overlayText?: string;
	isReverse: boolean;
}

export default function ImageContainer(props: ImageContainerProps) {
	return (
		<OverlayContainer>
			<Image src={`/gifs/${props.imageName}`} alt={props.title} $isReverse={props.isReverse} />
			<Overlay $shouldShow={props.overlayText ? true : false}>
				<OverlayText>{props.overlayText}</OverlayText>
			</Overlay>
		</OverlayContainer>
	);
}
