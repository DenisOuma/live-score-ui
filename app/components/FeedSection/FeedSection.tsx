import React from "react";
import { FeedSectionCards } from "./FeedSectionCards/FeedSectionCards";

export const FeedSection = () => {
	return (
		<section className="navbar-content feed">
			<p className="fonts-style">Football live scores and schedule</p>
			<FeedSectionCards />
		</section>
	);
};
