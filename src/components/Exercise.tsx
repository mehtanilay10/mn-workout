"use client";

import React from "react";
import { ExerciseData } from "@/types/types";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { speak } from "@/utils/utils";
import {
	PageWrapper,
	ExerciseLayout,
	ControlPanel,
	VideoPanel,
	Heading,
	NavRow,
	NavGroup,
	Button,
	SmallLinkButton,
	Icon,
	ProgressRow,
} from "@/styles/style";
import VideoContainer from "./VideoContainer";
import ProgressLine from "./ProgressLine";
import { useWakeLock } from "@/hooks/useWakeLock";

export default function Exercise(props: ExerciseData) {
	const [countdown, setCountdown] = React.useState(props.time);
	const [isPause, setIsPause] = React.useState(false);
	const [overlayText, setOverlayText] = React.useState("");
	const [isReversed, setIsReversed] = React.useState(false);
	const intervalRef = React.useRef<NodeJS.Timeout>();
	const router = useRouter();

	useWakeLock();

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
		<PageWrapper>
			<ExerciseLayout>
				<ControlPanel>
					<Heading>{props.name}</Heading>

					<NavRow>
						<NavGroup>
							{!props.isFirst && (
								<SmallLinkButton href={(props.exerciseID - 1).toString()}>
									<Icon src="/svgs/previous.svg" /> Prev
								</SmallLinkButton>
							)}
							{!props.isLast && (
								<SmallLinkButton href={(props.exerciseID + 1).toString()}>
									Next <Icon src="/svgs/next.svg" />
								</SmallLinkButton>
							)}
						</NavGroup>

						{isPause ? (
							<Button onClick={() => resumeTimer()}>
								<Icon src="/svgs/resume.svg" /> Resume
							</Button>
						) : (
							<Button onClick={() => pauseTimer()} disabled={overlayText.length > 0}>
								<Icon src="/svgs/pause.svg" /> Pause
							</Button>
						)}
					</NavRow>

					<ProgressRow>
						<ProgressBar remainingTime={countdown} totalTime={props.time} />

						<ProgressLine
							totalTime={props.totalTime}
							passedTime={props.passedTime}
							totalExercise={props.totalExercise}
							passedExercise={props.passedExercise}
						/>
					</ProgressRow>
				</ControlPanel>

				<VideoPanel>
					<VideoContainer videoName={props.video} overlayText={overlayText} isReverse={isReversed} />
				</VideoPanel>
			</ExerciseLayout>
		</PageWrapper>
	);
}

