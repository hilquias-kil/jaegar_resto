import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta = {
  title: "Tabs",
  component: Tabs,
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
} satisfies Meta<typeof Tabs>;

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
      {
        image: "https://placehold.co/100",
        price: 10,
        name: "product name",
        category: "Cold Dishes",
        id: 2,
      },
      {
        image: "https://placehold.co/100",
        price: 10,
        name: "product name",
        category: "Grill",
        id: 3,
      },
    ],
  },
};
