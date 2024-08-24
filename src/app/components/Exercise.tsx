"use client";

import { ExerciseData } from "@/types/types";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function Exercise(props: ExerciseData) {
	const [countdown, setCountdown] = React.useState(props.time);
	const intervalRef = React.useRef<NodeJS.Timeout>();
	const router = useRouter();

	React.useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCountdown((t) => t - 1);
		}, 1000);

		// var msg = new SpeechSynthesisUtterance(props.name);
		// window.speechSynthesis.speak(msg);

		return () => clearInterval(intervalRef.current);
	}, []);

	React.useEffect(() => {
		if (countdown <= 0) {
			clearInterval(intervalRef.current);
			// if (!props.isLast) {
			// 	router.push((props.exerciseID + 1).toString());
			// } else {
			// 	router.push("/");
			// }
		}
	}, [countdown]);

	return (
		<div>
			<h1>{props.name}</h1>
			<p>{countdown}s</p>
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
