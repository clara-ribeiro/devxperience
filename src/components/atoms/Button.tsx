import React from "react";
import { styled } from "@/styles/stitches.config";

const StyledButton = styled("button", {
	appearance: "none",
	border: "1px solid $border",
	borderRadius: "$md",
	backgroundColor: "$primary",
	color: "white",
	padding: "$3 $4",
	fontFamily: "$sans",
	fontSize: "14px",
	lineHeight: 1,
	cursor: "pointer",
	transition: "background-color 0.2s ease, transform 0.05s ease",

	"&:hover": {
		backgroundColor: "$primaryHover",
	},
	"&:active": {
		transform: "translateY(1px)",
	},
	"&:disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},

	variants: {
		variant: {
			primary: {},
			ghost: {
				backgroundColor: "transparent",
				color: "$hiContrast",
			},
		},
		size: {
			sm: { padding: "$2 $3", fontSize: "13px", borderRadius: "$sm" },
			md: { padding: "$3 $4", fontSize: "14px" },
			lg: { padding: "$4 $5", fontSize: "16px", borderRadius: "$lg" },
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export type ButtonProps = React.ComponentProps<typeof StyledButton>;

export const Button: React.FC<ButtonProps> = (props) => {
	return <StyledButton {...props} />;
};

export default Button;


