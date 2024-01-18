"use client";
import React from "react";
import { Icon } from "@iconify/react";
import classNames from "classnames";
interface IconTemplateProps {
	className?: string;
	svgName: string;
	svgWidth?: number;
	svgColor?: string;
	svgTitle?: string;
	onClick?: () => void;
}

export const IconTemplate: React.FC<IconTemplateProps> = ({
	className,
	svgName,
	svgColor,
	svgWidth,
	svgTitle,
	onClick,
}) => {
	const classes = classNames("icon-template", className);

	return (
		<div className={classes} title={svgTitle}>
			<Icon
				color={svgColor}
				icon={svgName}
				onClick={onClick}
				width={`${svgWidth}`}
			/>
		</div>
	);
};
