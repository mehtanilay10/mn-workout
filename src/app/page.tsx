import { ExcercisePageProps, ExerciseData } from "@/types/types";
import fs from "fs";
import Link from "next/link";
import path from "path";

// Page component
export default function Page(props: ExcercisePageProps) {
	const filePath = path.join(process.cwd(), "public", "workouts", `data.json`);
	const jsonData: ExerciseData[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	const workoutIds = jsonData.map((e) => e.workoutID.toString());
	const uniqueIds = Array.from(new Set(workoutIds));

	return (
		<div>
			{uniqueIds.map((x) => (
				<Link key={x} href={`workout/${x}/exercise/1`} style={{ textDecoration: "none", cursor: "pointer" }}>
					<div style={{ fontSize: "24px", color: "#242424", margin: "10px", padding: "30px", border: "1px solid #242424", boxShadow: "0px 0px 5px #ddd" }}>Workout {x}</div>
				</Link>
			))}
		</div>
	);
}
