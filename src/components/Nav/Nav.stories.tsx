import type { Meta, StoryObj } from "@storybook/react";

import { Nav } from "./Nav";

const meta = {
  title: "Nav",
  component: Nav,
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
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="grid bg-bg grid-cols-[104px_1fr_34%] h-screen">
        <Story />
      </div>
    ),
  ],
};
