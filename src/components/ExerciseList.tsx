"use client";

import { LinkButton, MainWrapper } from "@/styles/style";

interface ExerciseListProps {
	workoutIDs: string[];
}

export const ExerciseList = (props: ExerciseListProps) => (
	<MainWrapper>
		{props.workoutIDs.map((x) => (
			<LinkButton key={x} href={`workout/${x}/exercise/1`}>
				Workout {x}
			</LinkButton>
		))}
	</MainWrapper>
);
