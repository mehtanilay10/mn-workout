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

// Page component
export default function Page(props: ExercisePageProps) {
	const filePath = path.join(process.cwd(), "public", "json", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	// Find the page based on the slug
	const workout = jsonData.find((p) => p.exerciseID.toString() === props.params.exerciseID && p.workoutID.toString() === props.params.workoutID);

	if (!workout) {
		notFound();
	}

	return <Exercise {...workout} />;
}
