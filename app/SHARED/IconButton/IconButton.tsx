import { IconTemplate } from "@/app/Icon/IconTemplate";
import React from "react";

interface IconButtonProps {
	className?: string;
	svgName?: string | null;
	svgTitle?: string;
	name?: string;
	onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
	svgName,
	className,
	svgTitle,
	name,
}) => {
	return (
		<button className={`icon-button ${className} `} title={svgTitle}>
			<span>{name}</span>
			<IconTemplate
				className="button-icon"
				svgName={svgName ?? ""}
				svgWidth={25}
			/>
		</button>
	);
};
