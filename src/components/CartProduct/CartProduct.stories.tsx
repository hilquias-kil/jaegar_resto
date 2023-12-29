import type { Meta, StoryObj } from "@storybook/react";

import { CartProduct } from "./CartProduct";

const meta = {
  title: "CartProduct",
  component: CartProduct,
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
  tags: ["autodocs"],
} satisfies Meta<typeof CartProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "product name",
    price: 0,
    qty: 1,
    note: "",
    image: "https://placehold.co/100",
    changeQty: () => {},
    changeNote: () => {},
    removeProduct: () => {},
  },
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
