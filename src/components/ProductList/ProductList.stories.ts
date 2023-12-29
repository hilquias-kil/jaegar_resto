import type { Meta, StoryObj } from "@storybook/react";

import { ProductList } from "./ProductList";

const meta = {
  title: "ProductList",
  component: ProductList,
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
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        image: "https://placehold.co/100",
        price: 10,
        name: "product name",
        category: "Appetizer",
        id: 1,
      },
    ],
  },
};
