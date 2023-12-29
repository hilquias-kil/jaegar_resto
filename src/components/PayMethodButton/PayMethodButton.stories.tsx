import type { Meta, StoryObj } from "@storybook/react";

import { PayMethodButton } from "./PayMethodButton";
import { CreditCard } from "../Icons";

const meta = {
  title: "PayMethodButton",
  component: PayMethodButton,
  parameters: {
    backgrounds: {
      default: "cart",
      values: [
        {
          name: "cart",
          value: "#252836",
        },
      ],
    },
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PayMethodButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CreditCard />,
    label: "label",
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: <CreditCard />,
    label: "label",
    active: true,
  },
};
