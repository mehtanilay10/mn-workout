"use client";

import { ExerciseData } from "@/types/types";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

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

	const speak = (message: string) => {
		var msg = new SpeechSynthesisUtterance(message);
		msg.rate = 1.4;
		msg.pitch = 0.7;

		const voice = window.speechSynthesis.getVoices().filter((x) => x.name.indexOf("Microsoft Susan") > -1);
		if (voice.length > 0) {
			msg.voice = voice[0];
		}

		window.speechSynthesis.speak(msg);
	};

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
		<div>
			<h1>{props.name}</h1>
			<p>{countdown}s</p>
			{isPause ? <button onClick={() => resumeTimer()}>Resume</button> : <button onClick={() => pauseTimer()}>Pause</button>}
			<img src={`/gifs/${props.image}`} alt={props.name} width={"500px"} style={{ border: "1px solid #dfdfdf" }} />
			{!props.isFirst && (
				<Link href={(props.exerciseID - 1).toString()}>
					<button>&lt;&lt; Previous</button>
				</Link>
			)}
			{!props.isLast && (
				<Link href={(props.exerciseID + 1).toString()}>
					<button>Next &gt;&gt;</button>
				</Link>
			)}
		</div>
	);
}
