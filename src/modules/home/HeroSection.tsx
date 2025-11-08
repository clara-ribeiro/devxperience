import React from "react";
import { styled } from "@/styles/stitches.config";
import { Button } from "@/components/atoms/Button";

const Wrapper = styled("section", {
	display: "grid",
	placeItems: "center",
	minHeight: "40vh",
	textAlign: "center",
	border: "1px solid $border",
	borderRadius: "$lg",
	padding: "$6",
	background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02))",
});

const Title = styled("h1", {
	margin: 0,
	fontSize: "28px",
	"@md": { fontSize: "34px" },
});

const Subtitle = styled("p", {
	marginTop: "$2",
	color: "$loContrast",
});

export type HeroSectionProps = {
	title?: string;
	subtitle?: string;
	onCtaClick?: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
	title = "Welcome to DevXperience",
	subtitle = "Clean architecture with Atomic Design and Stitches.",
	onCtaClick,
}) => {
	return (
		<Wrapper>
			<div>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				<div style={{ marginTop: 16 }}>
					<Button onClick={onCtaClick}>Get Started</Button>
				</div>
			</div>
		</Wrapper>
	);
};

export default HeroSection;


