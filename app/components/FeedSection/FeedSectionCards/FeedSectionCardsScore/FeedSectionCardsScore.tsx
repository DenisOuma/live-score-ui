import { MatchProgress } from "@/app/SHARED/MatchProgress/MatchProgress";
import React from "react";

export const FeedSectionCardsScore = () => {
	return (
		<div className="cards-score">
			{/* <p className="status-title">Match Status</p> */}
			<div className="card-score-status">
				<p className="country-match">RUSSIA</p>
				<h2>Football National Leauge</h2>
				<p className="country-match live">LIVE</p>
				<h1 className="score-number">0 - 1</h1>
				<div className="time-match">
					<p>sdcsdcsdc</p>
					<MatchProgress />
					<p>sdcsdcsdc</p>
				</div>
			</div>
		</div>
	);
};
