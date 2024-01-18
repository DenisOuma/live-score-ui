import Image from "next/image";
import styles from "./page.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { FeedSection } from "./components/FeedSection/FeedSection";

export default function Home() {
	return (
		<main className={styles.main}>
			<NavBar />
			<FeedSection />
		</main>
	);
}
