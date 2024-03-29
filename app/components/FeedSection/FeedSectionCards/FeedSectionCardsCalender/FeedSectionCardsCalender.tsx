"use client";
import * as React from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const FeedSectionCardsCalender = () => {
	const [state, setState] = React.useState<Range[]>([
		{
			startDate: new Date(),
			endDate: undefined,
			key: "selection",
		},
	]);

	return (
		<div className="feed-components-cards-calender">
			<DateRange
				editableDateInputs={true}
				onChange={(item) => setState([item.selection])}
				moveRangeOnFirstSelection={false}
				ranges={state as Range[]}
			/>
		</div>
	);
};
