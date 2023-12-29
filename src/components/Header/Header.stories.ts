import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Header",
  component: Header,
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
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
