import type { Meta, StoryObj } from "@storybook/react";

import { Cart } from "./Cart";

const meta = {
  title: "Cart",
  component: Cart,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
