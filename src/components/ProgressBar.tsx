import { Circle, CircleBackground, CircleContainer, CircleProgress, CircleText } from "@/styles/style";
import React from "react";

interface ProgressBar {
	totalTime: number;
	remainingTime: number;
}

const ProgressBar = ({ totalTime, remainingTime }: ProgressBar) => {
	const completed = (totalTime - remainingTime) / totalTime;
	console.log(completed);
	const radius = 35;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - completed * circumference;

	return (
		<CircleContainer>
			<Circle viewBox="0 0 100 100">
				<CircleBackground cx="50" cy="50" r={radius} />
				<CircleProgress cx="50" cy="50" r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
				<CircleText x="50" y="-48">
					{remainingTime}s
				</CircleText>
			</Circle>
		</CircleContainer>
	);
};

export default ProgressBar;
