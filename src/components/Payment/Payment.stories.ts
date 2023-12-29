import type { Meta, StoryObj } from "@storybook/react";

import { Payment } from "./Payment";

const meta = {
  title: "Payment",
  component: Payment,
  parameters: {},
} satisfies Meta<typeof Payment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
