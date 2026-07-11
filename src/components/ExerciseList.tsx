"use client";

import { HomeWrapper, HomeTitle, HomeSubtitle, WorkoutGrid, LinkButton, WorkoutNumber } from "@/styles/style";

interface ExerciseListProps {
	workoutIDs: string[];
}

export const ExerciseList = (props: ExerciseListProps) => (
	<HomeWrapper>
		<HomeTitle>MN Workout</HomeTitle>
		<HomeSubtitle>Choose a workout to begin</HomeSubtitle>
		<WorkoutGrid>
			{props.workoutIDs.map((x) => (
				<LinkButton key={x} href={`/workout/${x}/exercise/1`}>
					<WorkoutNumber>{x}</WorkoutNumber>
					Workout {x}
				</LinkButton>
			))}
		</WorkoutGrid>
	</HomeWrapper>
);

