# Minerva コンポーネントライブラリ

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/fwx5618177/minerva.svg?style=social&label=Stars)](https://github.com/fwx5618177/minerva)
[![GitHub issues](https://img.shields.io/github/issues/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/issues)
[![GitHub license](https://img.shields.io/github/license/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/blob/main/LICENSE)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/graphs/contributors)

[English](./README.md) | [简体中文](./README_ZH.md) | [日本語](./README_JP.md)

</div>

Webアプリケーションをサポートする多機能コンポーネントライブラリ。最新のWeb技術で構築され、パフォーマンスと柔軟性を重視しています。

## 🌟 デモとドキュメント

ドキュメントサイトをご覧ください：[https://fwx5618177.github.io/minerva/](https://fwx5618177.github.io/minerva/)

## ✨ 特徴

- **モジュールサポート**：ESM、CommonJS
- **バージョン管理**：無料版と有料版、使用時間計算
- **WASM統合**：高性能計算機能
- **開発ツール**：ESLint、Prettier、Husky、Commitlint、Standard Version
- **豊富なコンポーネント**：完全なUIコンポーネントセット
- **TypeScriptサポート**：完全な型定義
- **カスタマイズ**：広範なテーマとスタイルオプション

## 🚀 コンポーネント

### 実装済みコンポーネント ✅

- **基本**
  - 🟢 ボタン (Button) `v1.0.0`
  - 🟢 アイコンボタン (IconButton) `v1.0.0`
    - ✨ ボックスシャドウ
    - ✨ リップルエフェクト
  - 🟢 テキストフィールド (TextField) `v1.0.0`
  - 🟢 検索ボタン (SearchButton) `v1.0.0`
  - 🟢 時間選択 (TimePicker) `v1.0.0`
    - ✨ 12/24時間形式
    - ✨ 秒表示対応
  - 🟢 ポッパー (Popper) `v1.0.0`
  - 🟢 リップルエフェクト (Ripple Effect) `v1.0.0`

### 開発予定コンポーネント 🚧

- **基本**

  - ⏳ チェックボックス (Checkbox)
  - ⏳ ラジオボタン (Radio)
  - ⏳ スイッチ (Switch)
  - ⏳ セレクト (Select)
  - ⏳ 日付選択 (DatePicker)
  - ⏳ 日時選択 (DateTimePicker)
  - ⏳ スライダー (Slider)

- **レイアウト**

  - ⏳ グリッド (Grid)
  - ⏳ ボックス (Box)
  - ⏳ コンテナ (Container)
  - ⏳ スタック (Stack)

- **ナビゲーション**

  - ⏳ メニュー (Menu)
  - ⏳ タブ (Tabs)
  - ⏳ パンくずリスト (Breadcrumb)
  - ⏳ ページネーション (Pagination)

- **フィードバック**

  - ⏳ アラート (Alert)
  - ⏳ ダイアログ (Dialog)
  - ⏳ スナックバー (Snackbar)
  - ⏳ プログレス (Progress)
  - ⏳ スケルトン (Skeleton)

- **データ表示**
  - ⏳ テーブル (Table)
  - ⏳ リスト (List)
  - ⏳ ツリー (Tree)
  - ⏳ カード (Card)
  - ⏳ バッジ (Badge)

### 将来のWebコンポーネント 🔮

以下を含むネイティブWebComponentsのサポートを計画しています：

- **コアWebコンポーネント**

  - 🎯 カスタム要素 (Custom Elements)
  - 🎯 シャドウDOM (Shadow DOM)
  - 🎯 HTMLテンプレート (HTML Templates)
  - 🎯 ESモジュール (ES Modules)

- **機能**
  - 🎯 フレームワーク非依存
  - 🎯 ネイティブブラウザサポート
  - 🎯 スタイルのカプセル化
  - 🎯 カスタムイベント
  - 🎯 スロットベースのコンテンツ配信

### コンポーネントステータス凡例

- 🟢 リリース済 - 安定版で本番環境で使用可能
- ⏳ 計画中 - ロードマップに含まれている
- 🎯 将来 - 将来のリリースで計画
- ✨ 機能 - コンポーネントのサブ機能

## 🚀 クイックスタート

### インストール

```bash
pnpm add @minerva/lib-core @minerva/lib-theme
```

または

```bash
yarn add @minerva/lib-core @minerva/lib-theme
```

または

```bash
npm install @minerva/lib-core @minerva/lib-theme
```

### 基本的な使用方法

```tsx
import { Button, TextField } from "@minerva/lib-core";
import { ThemeProvider } from "@minerva/lib-theme";

function App() {
  return (
    <ThemeProvider>
      <TextField
        label="ユーザー名"
        placeholder="ユーザー名を入力してください"
      />
      <Button variant="contained" color="primary">
        送信
      </Button>
    </ThemeProvider>
  );
}
```

### 高度な使用方法

#### カスタムテーマ

```tsx
import { createTheme, ThemeProvider } from "@minerva/lib-theme";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* あなたのコンポーネント */}
    </ThemeProvider>
  );
}
```

#### タイムピッカーの使用

```tsx
import { TimePicker } from "@minerva/lib-core";

function TimePickerExample() {
  const [time, setTime] = useState(null);

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      format="24"
      showSeconds
      label="時間を選択"
    />
  );
}
```

## 🧑‍💻 開発者向けクイックスタート

以下の手順で開発を始めることができます：

1. リポジトリのクローン：

```bash
git clone https://github.com/fwx5618177/minerva.git
cd minerva
```

2. 依存関係のインストール：

```bash
pnpm install
```

3. 開発サーバーの起動：

```bash
pnpm dev
```

4. テストの実行：

```bash
pnpm test
```

5. ライブラリのビルド：

```bash
pnpm build
```

## 🤝 コントリビューション

コントリビューションを歓迎します！詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) をご覧ください。

## 📝 ライセンス

このプロジェクトは MIT ライセンスの下で提供されています - 詳細は [LICENSE](./LICENSE) ファイルをご覧ください。

## 📧 お問い合わせ

ご質問やフィードバックがございましたら、以下の方法でお問い合わせください：

- メール：[fwx5618177@gmail.com](mailto:fwx5618177@gmail.com)
- GitHub Issues：[https://github.com/fwx5618177/minerva/issues](https://github.com/fwx5618177/minerva/issues)
- GitHub Pull Requests：[https://github.com/fwx5618177/minerva/pulls](https://github.com/fwx5618177/minerva/pulls)
