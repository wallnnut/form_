declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module "*.svg" {
	import React = require("react");
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module "react-step-progress-bar" {
	import React from "react";

	interface ProgressBarProps {
		percent?: number;
		stepPositions?: number[];
		unfilledBackground?: string;
		filledBackground?: string;
		width?: number;
		height?: number;
		hasStepZero?: boolean;
		text?: string;
		children?: React.ReactChild | React.ReactChild[];
	}
	interface StepProps {
		children: (props: {
			accomplished: boolean;
			transitionState: string;
			index: number;
			position: number;
		}) => React.ReactNode;
		transition?: "scale" | "rotate" | "skew";
		transitionDuration?: number;
	}
	class ProgressBar extends React.Component<ProgressBarProps, any> {}
	class Step extends React.Component<StepProps, any> {}
}
  