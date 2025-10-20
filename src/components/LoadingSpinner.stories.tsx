/**
 * ========================================
 * Storybook ストーリーファイルの基本構造
 * ========================================
 *
 * このファイルは、LoadingSpinnerコンポーネントのStorybookストーリーを定義しています。
 *
 * 【Storybookの基本概念】
 * 1. Meta: ストーリーの基本設定（タイトル、コンポーネント、Controls設定など）
 * 2. Story: コンポーネントの特定の状態や使用例
 * 3. args: コンポーネントに渡すpropsの値
 * 4. parameters: 表示設定（レイアウト、背景色など）
 * 5. argTypes: Controlsパネルでのpropsの操作方法
 *
 * 【このファイルの目的】
 * - LoadingSpinnerコンポーネントの様々な状態を視覚的に確認
 * - 異なるpropsの組み合わせをテスト
 * - コンポーネントの使用方法をドキュメント化
 * - デザイナーや開発者がコンポーネントの動作を理解
 */

// Storybookの基本的な型定義をインポート
// Meta: ストーリーのメタデータ（タイトル、コンポーネント、設定など）を定義する型
// StoryObj: 個別のストーリー（コンポーネントの状態）を定義する型
import type { Meta, StoryObj } from '@storybook/react';
// テスト対象のコンポーネントをインポート
import { LoadingSpinner, FullPageLoading } from './LoadingSpinner';

// Metaオブジェクト: ストーリーの基本設定を定義
// この設定は全てのストーリーに適用される
const meta: Meta<typeof LoadingSpinner> = {
  // title: Storybookのサイドバーでの表示名と階層構造を定義
  // 'Components/LoadingSpinner' → Componentsグループ内のLoadingSpinnerとして表示
  title: 'Components/LoadingSpinner',

  // component: このストーリーでテストするコンポーネントを指定
  component: LoadingSpinner,

  // parameters: Storybookの表示設定
  parameters: {
    // layout: コンポーネントの配置方法を指定
    // 'centered': 画面中央に配置
    // 他にも 'fullscreen', 'padded' などのオプションがある
    layout: 'centered',
  },

  // tags: Storybookの機能を有効にするタグ
  // 'autodocs': 自動的にドキュメントページを生成
  tags: ['autodocs'],

  // argTypes: Controlsパネルでのpropsの操作方法を定義
  // これにより、StorybookのUIでリアルタイムにpropsを変更できる
  argTypes: {
    // sizeプロパティの設定
    size: {
      // control: UIコントロールの種類を指定
      // 'select': ドロップダウンメニューで選択
      control: { type: 'select' },
      // options: 選択可能な値のリスト
      options: ['small', 'default', 'large'],
    },
    // tipプロパティの設定
    tip: {
      // 'text': テキスト入力フィールド
      control: { type: 'text' },
    },
    // spinningプロパティの設定
    spinning: {
      // 'boolean': チェックボックス（true/false）
      control: { type: 'boolean' },
    },
  },
};

// metaオブジェクトをデフォルトエクスポート
// これにより、Storybookがこの設定を認識する
export default meta;

// Story型の定義
// StoryObj<typeof meta>で、metaで定義したコンポーネントの型に基づいたストーリー型を作成
type Story = StoryObj<typeof meta>;

// ========================================
// 個別のストーリー定義
// ========================================
// 各ストーリーは、コンポーネントの異なる状態や使用例を表現する

// Default: 基本的な使用例
// Storybookのサイドバーに「Default」として表示される
export const Default: Story = {
  // args: コンポーネントに渡すpropsの値を定義
  // これらの値はStorybookのControlsパネルで変更可能
  args: {
    size: 'large',
    tip: '読み込み中...',
    spinning: true,
  },
};

// Small: 小さなサイズのローディングスピナー
// コンポーネントの異なるサイズバリエーションをテスト
export const Small: Story = {
  args: {
    size: 'small',
    tip: '小さなローディング',
    spinning: true,
  },
};

// DefaultSize: デフォルトサイズのローディングスピナー
// サイズの比較ができるように複数のバリエーションを作成
export const DefaultSize: Story = {
  args: {
    size: 'default',
    tip: 'デフォルトサイズ',
    spinning: true,
  },
};

// Large: 大きなサイズのローディングスピナー
// サイズの違いを視覚的に確認できる
export const Large: Story = {
  args: {
    size: 'large',
    tip: '大きなローディング',
    spinning: true,
  },
};

// WithChildren: 子要素を含むローディングスピナー
// LoadingSpinnerコンポーネントのchildrenプロパティの使用例
export const WithChildren: Story = {
  args: {
    size: 'large',
    tip: 'コンテンツを読み込み中...',
    spinning: true,
    // children: ローディング中に表示される子要素
    // JSXを直接記述して、実際の使用例を表現
    children: (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <p>このコンテンツはローディング中です</p>
      </div>
    ),
  },
};

// NotSpinning: スピン停止状態のローディングスピナー
// spinning: falseの状態をテスト
export const NotSpinning: Story = {
  args: {
    size: 'large',
    tip: 'ローディング完了',
    spinning: false,
  },
};

// CustomTip: カスタムメッセージのローディングスピナー
// 異なるメッセージの例を表示
export const CustomTip: Story = {
  args: {
    size: 'large',
    tip: 'データを取得中...',
    spinning: true,
  },
};

// ========================================
// 特殊なストーリー: FullPageLoading
// ========================================
// FullPageLoadingコンポーネント用のストーリー
// 通常のLoadingSpinnerとは異なるコンポーネントをテスト

export const FullPage: Story = {
  // render: カスタムレンダリング関数
  // 通常のargsではなく、独自のJSXを返す関数を定義
  // argsは使用せず、直接FullPageLoadingコンポーネントをレンダリング
  render: (args) => <FullPageLoading tip="アプリを読み込み中..." />,

  // parameters: このストーリー専用の設定
  // metaで定義した設定を上書きできる
  parameters: {
    // layout: 'fullscreen'で画面全体を使用
    // 全画面ローディングの実際の使用感を確認できる
    layout: 'fullscreen',
  },
};
