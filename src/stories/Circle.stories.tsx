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
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "様々な色のバリエーションを持つサークルコンポーネントです。UIの装飾やステータス表示に使用できます。"
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
      }}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジサークル用のストーリー
 */
export const BaseCircle: Story =  {
  args: {
    variant: "orange",
  },
  parameters: {
    // インタラクションの設定
    actions: {
      handles: ['onClick', 'onHover']
    }
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

