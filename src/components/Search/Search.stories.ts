import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./Search";

const meta = {
  title: "Search",
  component: Search,
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
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
