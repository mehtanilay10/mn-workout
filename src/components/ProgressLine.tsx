import { BarContainer, BarTrack, BarFillter, BarLabels, BarLabel } from "@/styles/style";
import { convertSecondsToMinutes } from "@/utils/utils";
import React from "react";

interface ProgressLineProps {
	totalTime: number;
	passedTime: number;
	totalExercise: number;
	passedExercise: number;
}

const ProgressLine = ({ totalTime, passedTime, totalExercise, passedExercise }: ProgressLineProps) => {
	const completed = (passedExercise * 100) / totalExercise;

	return (
		<BarContainer>
			<BarTrack>
				<BarFillter $completed={completed} />
			</BarTrack>
			<BarLabels>
				<BarLabel>
					Time<span>{`${convertSecondsToMinutes(passedTime)} / ${convertSecondsToMinutes(totalTime)}`}</span>
				</BarLabel>
				<BarLabel>
					Exercise<span>{`${passedExercise} / ${totalExercise}`}</span>
				</BarLabel>
			</BarLabels>
		</BarContainer>
	);
};

export default ProgressLine;
