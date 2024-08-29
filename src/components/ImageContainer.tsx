import { OverlayContainer, Image, OverlayText, Overlay } from "@/styles/style";

interface ImageContainerProps {
	imageName: string;
	title: string;
	overlayText?: string;
}

export default function ImageContainer(props: ImageContainerProps) {
	return (
		<OverlayContainer>
			<Image src={`/gifs/${props.imageName}`} alt={props.title} />
			<Overlay shouldShow={props.overlayText ? true : false}>
				<OverlayText>{props.overlayText}</OverlayText>
			</Overlay>
		</OverlayContainer>
	);
}
