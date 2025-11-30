import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  name: "Container padrão",
  render: () => (
    <Container>
      <div style={{ padding: "2rem", backgroundColor: "#E7C19A", borderRadius: "0.5rem" }}>
        Conteúdo do container
      </div>
    </Container>
  ),
};

export const WithSectionPadding: Story = {
  name: "Com padding de seção",
  render: () => (
    <Container padding="section">
      <div style={{ backgroundColor: "#99B69E", borderRadius: "0.5rem", padding: "1rem" }}>
        Conteúdo com padding de seção
      </div>
    </Container>
  ),
};

export const WithLongContent: Story = {
  name: "Com conteúdo longo",
  render: () => (
    <Container padding="section">
      <div>
        <h2 style={{ marginBottom: "1rem", fontFamily: "Raleway" }}>Título do conteúdo</h2>
        <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
          Este é um exemplo de conteúdo mais longo dentro do container. O container
          deve manter uma largura máxima adequada e centralizar o conteúdo na página.
        </p>
        <p style={{ lineHeight: 1.6 }}>
          Este parágrafo adicional demonstra como o container se comporta com múltiplos
          elementos de conteúdo.
        </p>
      </div>
    </Container>
  ),
};

