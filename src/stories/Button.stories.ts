import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "button",
    color: "blue",
    // onClickプロパティに渡されたfn()で作成されたモック関数が実行
    onClick: fn().mockImplementation((text: string) => {
      console.log(`ボタンクリック: ${text}`);
    }),
  },
};
