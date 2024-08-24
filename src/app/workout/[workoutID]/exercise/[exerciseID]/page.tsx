import { ExcercisePageProps, ExerciseData } from "@/types/types";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import Exercise from "@/app/components/Exercise";

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), "public", "workouts", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	return jsonData.map((e) => ({
		workoutID: e.workoutID.toString(),
		exerciseID: e.exerciseID.toString(),
	}));
}

// Page component
export default function Page(props: ExcercisePageProps) {
	// return <>{JSON.stringify(props)}</>;
	const filePath = path.join(process.cwd(), "public", "workouts", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	// Find the page based on the slug
	const workout = jsonData.find((p) => p.exerciseID.toString() === props.params.exerciseID && p.workoutID.toString() === props.params.workoutID);

	if (!workout) {
		notFound();
	}

	return <Exercise {...workout} />;
}
