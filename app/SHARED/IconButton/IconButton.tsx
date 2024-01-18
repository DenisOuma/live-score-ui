import { IconTemplate } from "@/app/Icon/IconTemplate";
import React from "react";

interface IconButtonProps {
	className?: string;
	svgName: string;
	svgTitle?: string;
	name?: string;
	onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
	svgName,
	svgTitle,
	name,
}) => {
	return (
		<button className="icon-button" title={svgTitle}>
			<span>{name}</span>
			<IconTemplate className="button-icon" svgName={svgName} svgWidth={25} />
		</button>
	);
};
