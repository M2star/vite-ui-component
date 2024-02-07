import type { Meta, StoryObj } from "@storybook/react";
import { TableExample } from "./TableExample";

const meta: Meta<typeof TableExample> = {
  title: "example/table",
  component: TableExample,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const table: Story = {};
