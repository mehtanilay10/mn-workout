"use client";

import { LinkButton, MainWrapper } from "@/styles/style";

interface ExerciseListProps {
	workoutIDs: string[];
}

export const ExerciseList = (props: ExerciseListProps) => (
	<MainWrapper>
		{props.workoutIDs.map((x) => (
			<LinkButton key={x} href={`desktop/workout/${x}/exercise/1`}>
				Workout {x} <span style={{ fontSize: "14px" }}>(Desktop view)</span>
			</LinkButton>
		))}
		<br />
		<br />
		{props.workoutIDs.map((x) => (
			<LinkButton key={x} href={`mobile/workout/${x}/exercise/1`}>
				Workout {x} <span style={{ fontSize: "14px" }}>(Mobile view)</span>
			</LinkButton>
		))}
	</MainWrapper>
);
