export interface ExerciseData {
	name: string;
	workoutID: number;
	exerciseID: number;
	time: number;
	video: string;
	isReversable?: boolean;
	isLast?: boolean;
	isFirst?: boolean;
}

export interface ExerciseParams {
	workoutID: string;
	exerciseID: string;
}

export interface ExercisePageProps {
	params: ExerciseParams;
}
