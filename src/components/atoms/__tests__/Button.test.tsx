import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Button } from "../Button";

describe("Button (render tests)", () => {
	it("renders primary", () => {
		render(<Button>Primary</Button>);
		expect(screen.getByRole("button", { name: /primary/i })).toBeInTheDocument();
	});

	it("renders ghost", () => {
		render(<Button variant="ghost">Ghost</Button>);
		expect(screen.getByRole("button", { name: /ghost/i })).toBeInTheDocument();
	});
});

describe("Button (interaction tests)", () => {
	it("focuses on click", async () => {
		render(<Button>Click</Button>);
		await userEvent.click(screen.getByRole("button", { name: /click/i }));
		expect(screen.getByRole("button", { name: /click/i })).toHaveFocus();
	});
});

describe("Button (snapshot markup)", () => {
	it("matches snapshot", () => {
		const { container } = render(<Button size="lg">Snapshot</Button>);
		expect(container.firstChild).toMatchSnapshot();
	});
});


