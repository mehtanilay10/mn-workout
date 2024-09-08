export interface ExerciseData {
	name: string;
	workoutID: number;
	exerciseID: number;
	time: number;
	video: string;
	isReversable?: boolean;
	isLast?: boolean;
	isFirst?: boolean;
	totalTime: number;
	passedTime: number;
	totalExercise: number;
	passedExercise: number;
}

export interface ExerciseParams {
	workoutID: string;
	exerciseID: string;
}

export interface ExercisePageProps {
	params: ExerciseParams;
}
