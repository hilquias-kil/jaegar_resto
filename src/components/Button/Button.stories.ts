import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
  },
};
