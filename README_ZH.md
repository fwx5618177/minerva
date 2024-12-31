# Minerva 组件库

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/fwx5618177/minerva.svg?style=social&label=Stars)](https://github.com/fwx5618177/minerva)
[![GitHub issues](https://img.shields.io/github/issues/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/issues)
[![GitHub license](https://img.shields.io/github/license/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/blob/main/LICENSE)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/graphs/contributors)

[English](./README.md) | [简体中文](./README_ZH.md) | [日本語](./README_JP.md)

</div>

一个支持Web应用的多功能组件库。使用现代Web技术构建，注重性能和灵活性。

## 🌟 演示和文档

访问我们的文档站点：[https://fwx5618177.github.io/minerva/](https://fwx5618177.github.io/minerva/)

## ✨ 特性

- **模块支持**：ESM、CommonJS
- **版本管理**：提供免费版和付费版，支持使用时间计算
- **WASM集成**：高性能计算能力
- **开发工具**：ESLint、Prettier、Husky、Commitlint、Standard Version
- **丰富组件**：完整的UI组件集
- **TypeScript支持**：完整的类型定义
- **自定义能力**：丰富的主题和样式选项

## 📦 组件

### 已实现组件 ✅

- **基础组件**
  - 🟢 按钮 (Button) `v1.0.0`
  - 🟢 图标按钮 (IconButton) `v1.0.0`
    - ✨ 阴影效果
    - ✨ 涟漪效果
  - 🟢 文本框 (TextField) `v1.0.0`
  - 🟢 搜索按钮 (SearchButton) `v1.0.0`
  - 🟢 时间选择器 (TimePicker) `v1.0.0`
    - ✨ 12/24小时制
    - ✨ 秒数支持
  - 🟢 弹出层 (Popper) `v1.0.0`
  - 🟢 涟漪效果 (Ripple Effect) `v1.0.0`

### 开发中组件 🚧

- **基础组件**

  - ⏳ 复选框 (Checkbox)
  - ⏳ 单选框 (Radio)
  - ⏳ 开关 (Switch)
  - ⏳ 选择器 (Select)
  - ⏳ 日期选择器 (DatePicker)
  - ⏳ 日期时间选择器 (DateTimePicker)
  - ⏳ 滑块 (Slider)

- **布局组件**

  - ⏳ 栅格 (Grid)
  - ⏳ 盒子 (Box)
  - ⏳ 容器 (Container)
  - ⏳ 堆栈 (Stack)

- **导航组件**

  - ⏳ 菜单 (Menu)
  - ⏳ 标签页 (Tabs)
  - ⏳ 面包屑 (Breadcrumb)
  - ⏳ 分页 (Pagination)

- **反馈组件**

  - ⏳ 提示 (Alert)
  - ⏳ 对话框 (Dialog)
  - ⏳ 消息条 (Snackbar)
  - ⏳ 进度条 (Progress)
  - ⏳ 骨架屏 (Skeleton)

- **数据展示**
  - ⏳ 表格 (Table)
  - ⏳ 列表 (List)
  - ⏳ 树形控件 (Tree)
  - ⏳ 卡片 (Card)
  - ⏳ 徽章 (Badge)

### 未来的Web组件 🔮

我们计划实现原生Web Components支持，包括：

- **核心Web组件**

  - 🎯 自定义元素 (Custom Elements)
  - 🎯 影子DOM (Shadow DOM)
  - 🎯 HTML模板 (HTML Templates)
  - 🎯 ES模块 (ES Modules)

- **特性**
  - 🎯 框架无关性
  - 🎯 原生浏览器支持
  - 🎯 样式封装
  - 🎯 自定义事件
  - 🎯 基于插槽的内容分发

### 组件状态图例

- 🟢 已发布 - 组件稳定且可用于生产环境
- ⏳ 计划中 - 组件在开发路线图中
- 🎯 未来 - 计划在未来版本中发布
- ✨ 功能 - 组件的子功能

## 🚀 快速开始

### 安装

```bash
pnpm add @minerva/lib-core @minerva/lib-theme
```

或者

```bash
yarn add @minerva/lib-core @minerva/lib-theme
```

或者

```bash
npm install @minerva/lib-core @minerva/lib-theme
```

### 基础用法

```tsx
import { Button, TextField } from "@minerva/lib-core";
import { ThemeProvider } from "@minerva/lib-theme";

function App() {
  return (
    <ThemeProvider>
      <TextField label="用户名" placeholder="请输入用户名" />
      <Button variant="contained" color="primary">
        提交
      </Button>
    </ThemeProvider>
  );
}
```

### 进阶用法

#### 自定义主题

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
  return <ThemeProvider theme={customTheme}>{/* 你的组件 */}</ThemeProvider>;
}
```

#### 使用时间选择器

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
      label="选择时间"
    />
  );
}
```

## 🧑‍💻 开发者快速开始

按照以下步骤开始开发：

1. 克隆仓库：

```bash
git clone https://github.com/fwx5618177/minerva.git
cd minerva
```

2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm dev
```

4. 运行测试：

```bash
pnpm test
```

5. 构建库：

```bash
pnpm build
```

## 🤝 贡献

我们欢迎贡献！请查看我们的 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详情。

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 📧 联系方式

如有任何问题或反馈，请联系我们：

- 邮箱：[fwx5618177@gmail.com](mailto:fwx5618177@gmail.com)
- GitHub Issues：[https://github.com/fwx5618177/minerva/issues](https://github.com/fwx5618177/minerva/issues)
- GitHub Pull Requests：[https://github.com/fwx5618177/minerva/pulls](https://github.com/fwx5618177/minerva/pulls)
