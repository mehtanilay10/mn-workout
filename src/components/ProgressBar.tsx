import { Circle, CircleBackground, CircleContainer, CircleProgress, CircleText } from "@/styles/style";
import React from "react";

interface ProgressBar {
	totalTime: number;
	remainingTime: number;
	isMobileView?: boolean;
}

const ProgressBar = ({ totalTime, remainingTime, isMobileView = true }: ProgressBar) => {
	const completed = (totalTime - remainingTime) / totalTime;
	const radius = 60;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - completed * circumference;

	return (
		<CircleContainer isMobileView={isMobileView}>
			<Circle viewBox="0 0 150 150">
				<CircleBackground cx="75" cy="75" r={radius} />
				<CircleProgress cx="75" cy="75" r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
				<CircleText x="75" y="-75">
					{remainingTime}s
				</CircleText>
			</Circle>
		</CircleContainer>
	);
};

export default ProgressBar;
