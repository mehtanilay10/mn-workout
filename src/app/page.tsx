import { ExerciseList } from "@/components/ExerciseList";
import { ExercisePageProps, ExerciseData } from "@/types/types";
import fs from "fs";
import path from "path";

// Page component
export default function Page(props: ExercisePageProps) {
	const filePath = path.join(process.cwd(), "public", "json", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	const workoutIds = jsonData.map((e) => e.workoutID.toString());
	const uniqueIds = Array.from(new Set(workoutIds));

	return <ExerciseList workoutIDs={uniqueIds} />;
}
