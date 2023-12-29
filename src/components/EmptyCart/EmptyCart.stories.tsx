import type { Meta, StoryObj } from "@storybook/react";

import { EmptyCart } from "./EmptyCart";

const meta = {
  title: "EmptyCart",
  component: EmptyCart,
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
} satisfies Meta<typeof EmptyCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <table style={{ width: "100%" }}>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};
