import type { Metadata } from "next";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";

export const metadata: Metadata = {
	title: "MN Workout App",
	description: "Workout app by MN for MN.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body style={{ margin: 0, backgroundColor: "#fafafa" }}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
