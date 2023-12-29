import type { Meta, StoryObj } from "@storybook/react";

import { Product } from "./Product";

const meta = {
  title: "Product",
  component: Product,
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
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "https://placehold.co/100",
    price: 10,
    title: "product name",
    addToOrder: () => {},
  },
};
