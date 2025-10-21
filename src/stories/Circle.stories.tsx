import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes: {
    variant: {
      control: {
        type: "select",
      }
    }
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジサークル用のストーリー
 */
export const BaseCircle: Story =  {
  args: {
    variant: "orange",
  }
}
/**
 * 緑サークル用のストーリー
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  }
}
/**
 * 青サークル用のストーリー
 */
export const BlueCircle: Story = {
  args: {
    variant: "blue",
  }
}

/**
 * グループ化したサークル用のストーリー
 */
export const GroupedCircles: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Circle variant="orange" />
        <Circle variant="green" />
        <Circle variant="blue" />
      </div>
    )
  }
}
