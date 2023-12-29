import type { Meta, StoryObj } from "@storybook/react";

import { NavButton } from "./NavButton";
import { Home } from "../Icons";

const meta = {
  title: "NavButton",
  component: NavButton,
  tags: ["autodocs"],
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
} satisfies Meta<typeof NavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Home />,
    href: "/",
  },
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
};
