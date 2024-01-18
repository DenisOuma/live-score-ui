import React from "react";
import { FeedSectionCardsCalender } from "./FeedSectionCardsCalender/FeedSectionCardsCalender";
import { FeedSectionCardsMatch } from "./FeedSectionCardsMatch/FeedSectionCardsMatch";
import { FeedSectionCardsScore } from "./FeedSectionCardsScore/FeedSectionCardsScore";

export const FeedSectionCards = () => {
	return (
		<div className="feed-components-cards">
			<FeedSectionCardsCalender />
			<FeedSectionCardsMatch />
			<FeedSectionCardsScore />
		</div>
	);
};
