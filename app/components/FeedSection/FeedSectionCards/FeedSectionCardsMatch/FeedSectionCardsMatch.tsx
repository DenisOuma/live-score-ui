import { IconButton } from "@/app/SHARED/IconButton/IconButton";
import React from "react";
import { FeedSectionCardsMatchCountryCard } from "./FeedSectionCardsMatch/FeedSectionCardsMatchCountryCard/FeedSectionCardsMatchCountryCard";

export const FeedSectionCardsMatch = () => {
	return (
		<div className="martches-card">
			<div className="filter">
				<div className="filter-btns">
					<IconButton className=" filter-btn-active" name="All" />
					<IconButton className=" filter-btn" name="Result" />
					<IconButton className=" filter-btn" name="Live" />
					<IconButton className=" filter-btn" name="Upcoming" />
				</div>
				<span className="total-matches">10</span>
			</div>
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
			<FeedSectionCardsMatchCountryCard />
		</div>
	);
};
