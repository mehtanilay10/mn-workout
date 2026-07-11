import { ExercisePageProps, ExerciseData } from "@/types/types";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Exercise from "@/components/Exercise";

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), "public", "json", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	return jsonData.map((e) => ({
		workoutID: e.workoutID.toString(),
		exerciseID: e.exerciseID.toString(),
	}));
}

export default function Page(props: ExercisePageProps) {
	const filePath = path.join(process.cwd(), "public", "json", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	const workoutData = jsonData.filter((w) => w.workoutID.toString() === props.params.workoutID);
	const exerciseData = workoutData.find((e) => e.exerciseID.toString() === props.params.exerciseID);

	if (!exerciseData) {
		notFound();
	}

	const totalExercise = workoutData.length;
	let passedExercise = 0;
	let totalTime = 0;
	let passedTime = 0;
	workoutData.forEach((e) => {
		totalTime += (e.isReversable ? 2 : 1) * e.time;
		if (e.exerciseID < Number(props.params.exerciseID)) {
			passedTime += (e.isReversable ? 2 : 1) * e.time;
			passedExercise++;
		}
	});

	return (
		<Exercise
			{...exerciseData}
			totalTime={totalTime}
			passedTime={passedTime}
			totalExercise={totalExercise}
			passedExercise={passedExercise}
		/>
	);
}
