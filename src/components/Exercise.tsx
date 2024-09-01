"use client";

import React from "react";
import { ExerciseData } from "@/types/types";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { speak } from "@/utils/utils";
import { Button, Heading, LeftColumn, MainWrapper, RightColumn, Row, SmallLinkButton, Image, Icon } from "@/styles/style";
// import ImageContainer from "./ImageContainer";
import VideoContainer from "./VideoContainer";

export default function Exercise(props: ExerciseData) {
	const [countdown, setCountdown] = React.useState(props.time);
	const [isPause, setIsPause] = React.useState(false);
	const [overlayText, setOverlayText] = React.useState("");
	const [isReversed, setIsReversed] = React.useState(false);
	const intervalRef = React.useRef<NodeJS.Timeout>();
	const router = useRouter();

	React.useEffect(() => {
		const isBreak = props.name.toLowerCase() === "break";
		if (isBreak) {
			speak("Take a break.");
			setOverlayText("Break");
		} else {
			speak(props.isFirst ? `Get ready for ${props.name}` : `Next exercise is ${props.name}.`);
			setOverlayText(`Prepare for ${props.name}`);
		}
		setTimeout(() => {
			setOverlayText(isBreak ? "Break" : "");
			intervalRef.current = setInterval(() => {
				if (!isPause) {
					setCountdown((t) => t - 1);
				}
			}, 1000);
		}, 3000);

		return clearInterval(intervalRef.current);
	}, []);

	React.useEffect(() => {
		if (countdown <= 0) {
			clearInterval(intervalRef.current);
			if (props.isReversable && !isReversed) {
				setIsReversed(true);
				speak("Change side");
				setOverlayText("Change side");
				setCountdown(props.time);
				setTimeout(() => {
					setOverlayText("");
					intervalRef.current = setInterval(() => {
						if (!isPause) {
							setCountdown((t) => t - 1);
						}
					}, 1000);
				}, 3000);
				return;
			}

			if (!props.isLast) {
				router.push((props.exerciseID + 1).toString());
			} else {
				speak("Congratulations for completing workout. See you tommorow.");
				setTimeout(() => {
					router.push("/");
				}, 3000);
			}
		}
	}, [countdown]);

	const pauseTimer = () => {
		speak("Pause");
		setOverlayText("Pause");
		setIsPause(true);
		clearInterval(intervalRef.current);
	};

	const resumeTimer = () => {
		speak("Resume");
		setIsPause(false);
		setOverlayText("");
		intervalRef.current = setInterval(() => {
			setCountdown((t) => t - 1);
		}, 1000);
	};

	return (
		<MainWrapper>
			<Row>
				<LeftColumn>
					<Heading>{props.name}</Heading>
					{!props.isFirst && (
						<SmallLinkButton href={(props.exerciseID - 1).toString()}>
							<Icon src="/svgs/previous.svg" /> Previous
						</SmallLinkButton>
					)}
					{!props.isLast && (
						<SmallLinkButton href={(props.exerciseID + 1).toString()}>
							Next <Icon src="/svgs/next.svg" />
						</SmallLinkButton>
					)}
				</LeftColumn>
				<RightColumn>
					{isPause ? (
						<Button onClick={() => resumeTimer()}>
							<Icon src="/svgs/resume.svg" /> Resume
						</Button>
					) : (
						<Button onClick={() => pauseTimer()} disabled={overlayText.length > 0}>
							<Icon src="/svgs/pause.svg" />
							Pause
						</Button>
					)}
				</RightColumn>
				<RightColumn>
					<ProgressBar remainingTime={countdown} totalTime={props.time} />
				</RightColumn>
			</Row>
			{/* <ImageContainer imageName={props.image} title={props.name} overlayText={overlayText} isReverse={isReversed} /> */}
			<VideoContainer videoName={props.video} overlayText={overlayText} isReverse={isReversed} />
		</MainWrapper>
	);
}
