import { BarContainer, BarFillter, BarLabelLeft, BarLabelRight } from "@/styles/style";
import { convertSecondsToMinutes } from "@/utils/utils";
import React from "react";

interface ProgressLine {
	totalTime: number;
	passedTime: number;
	totalExercise: number;
	passedExercise: number;
}

const ProgressLine = ({ totalTime, passedTime, totalExercise, passedExercise }: ProgressLine) => {
	const completed = (passedExercise * 100) / totalExercise;

	return (
		<BarContainer>
			<BarFillter completed={completed} />
			<BarLabelLeft>
				Time: <span>{`${convertSecondsToMinutes(passedTime)}/${convertSecondsToMinutes(totalTime)}`}</span>
			</BarLabelLeft>
			<BarLabelRight>
				Exercise: <span>{`${passedExercise}/${totalExercise}`}</span>
			</BarLabelRight>
		</BarContainer>
	);
};

export default ProgressLine;
