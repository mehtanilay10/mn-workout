export interface ExerciseData {
	name: string;
	workoutID: number;
	exerciseID: number;
	time: number;
	image: string;
	isReversable?: boolean;
	isLast?: boolean;
	isFirst?: boolean;
}

export interface ExcerciseParams {
	workoutID: string;
	exerciseID: string;
}

export interface ExcercisePageProps {
	params: ExcerciseParams;
}
