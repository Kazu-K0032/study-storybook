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

/**
 * 背景色付きデコレーターの例
 * ボタンを背景色付きのコンテナで囲みます
 */
export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Background Button",
    color: "purple",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`背景付きボタンクリック: ${text}`);
    }),
  },
};

/**
 * 影付きデコレーターの例
 * ボタンに影を追加して立体感を演出
 */
export const WithShadow: Story = {
  decorators: [
    (Story) => (
      <div style={{
        padding: '20px',
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
      }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Shadow Button",
    color: "green",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`影付きボタンクリック: ${text}`);
    }),
  },
};

/**
 * ダークテーマデコレーターの例
 * ダークテーマの背景でボタンを表示
 */
export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '8px',
        color: 'white'
      }}>
        <h3 style={{ color: 'white', marginBottom: '10px' }}>ダークテーマ</h3>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Dark Button",
    color: "orange",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`ダークテーマボタンクリック: ${text}`);
    }),
  },
};

/**
 * 複数ボタンレイアウトデコレーターの例
 * 複数のボタンを横並びで表示
 */
export const MultipleButtons: Story = {
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        gap: '10px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <Story />
        <Button
          text="Secondary"
          color="gray"
          onClick={fn().mockImplementation((text: string) => {
            console.log(`セカンダリボタンクリック: ${text}`);
          })}
        />
        <Button
          text="Success"
          color="green"
          onClick={fn().mockImplementation((text: string) => {
            console.log(`サクセスボタンクリック: ${text}`);
          })}
        />
      </div>
    ),
  ],
  args: {
    text: "Primary",
    color: "blue",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`プライマリボタンクリック: ${text}`);
    }),
  },
};

/**
 * 境界線デコレーターの例
 * ボタンを境界線で囲んで表示
 */
export const WithBorder: Story = {
  decorators: [
    (Story) => (
      <div style={{
        border: '2px dashed #007acc',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fafafa'
      }}>
        <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
          境界線で囲まれたボタン
        </p>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Bordered Button",
    color: "red",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`境界線ボタンクリック: ${text}`);
    }),
  },
};

/**
 * カードスタイルデコレーターの例
 * ボタンをカード風のデザインで表示
 */
export const CardStyle: Story = {
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        maxWidth: '300px'
      }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>カードスタイル</h4>
        <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>
          このボタンはカード風のデザインで表示されています。
        </p>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Card Button",
    color: "teal",
    onClick: fn().mockImplementation((text: string) => {
      console.log(`カードボタンクリック: ${text}`);
    }),
  },
};
