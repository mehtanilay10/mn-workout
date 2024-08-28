"use client";

import React from "react";
import { ExerciseData } from "@/types/types";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { speak } from "@/utils/utils";
import { Button, Heading, LeftColumn, MainWrapper, RightColumn, Row, SmallLinkButton, Image, Icon } from "@/styles/style";

export default function Exercise(props: ExerciseData) {
	const [countdown, setCountdown] = React.useState(props.time);
	const [isPause, setIsPause] = React.useState(false);
	const [intervalRef, setIntervalRef] = React.useState<NodeJS.Timeout>();
	const router = useRouter();

	React.useEffect(() => {
		speak(props.isFirst ? props.name : `Next excesize is ${props.name}.`);
		setTimeout(() => {
			setIntervalRef(
				setInterval(() => {
					setCountdown((t) => t - 1);
				}, 1000)
			);
		}, 3000);

		return clearInterval(intervalRef);
	}, []);

	React.useEffect(() => {
		if (countdown <= 0) {
			clearInterval(intervalRef);
			if (!props.isLast) {
				router.push((props.exerciseID + 1).toString());
			} else {
				router.push("/");
			}
		}
	}, [countdown]);

	const pauseTimer = () => {
		speak("Pause");
		setIsPause(true);
		clearInterval(intervalRef);
	};

	const resumeTimer = () => {
		speak("Resume");
		setIsPause(false);
		setIntervalRef(
			setInterval(() => {
				setCountdown((t) => t - 1);
			}, 1000)
		);
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
						<Button onClick={() => pauseTimer()}>
							<Icon src="/svgs/pause.svg" />
							Pause
						</Button>
					)}
				</RightColumn>
				<RightColumn>
					<ProgressBar remainingTime={countdown} totalTime={props.time} />
				</RightColumn>
			</Row>
			<Image src={`/gifs/${props.image}`} alt={props.name} width={"500px"} />
		</MainWrapper>
	);
}
