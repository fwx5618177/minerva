# Minerva Component Library

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/fwx5618177/minerva.svg?style=social&label=Stars)](https://github.com/fwx5618177/minerva)
[![GitHub issues](https://img.shields.io/github/issues/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/issues)
[![GitHub license](https://img.shields.io/github/license/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/blob/main/LICENSE)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/fwx5618177/minerva.svg)](https://github.com/fwx5618177/minerva/graphs/contributors)

[English](./README.md) | [简体中文](./README_ZH.md) | [日本語](./README_JP.md)

</div>

A versatile component library supporting web applications. Built with modern web technologies and designed for performance and flexibility.

## 🌟 Demo & Documentation

Visit our documentation site: [https://fwx5618177.github.io/minerva/](https://fwx5618177.github.io/minerva/)

## ✨ Features

- **Module Support**: ESM, CommonJS
- **Version Management**: Free and paid versions with usage time calculation
- **WASM Integration**: High-performance computing capabilities
- **Development Tools**: ESLint, Prettier, Husky, Commitlint, Standard Version
- **Comprehensive Components**: Rich set of UI components
- **TypeScript Support**: Full type definitions
- **Customization**: Extensive theming and styling options

## 📦 Components

### Implemented Components ✅

- **Basic**
  - 🟢 Button `v1.0.0`
  - 🟢 IconButton `v1.0.0`
    - ✨ Box Shadow
    - ✨ Ripple Effect
  - 🟢 TextField `v1.0.0`
  - 🟢 SearchButton `v1.0.0`
  - 🟢 TimePicker `v1.0.0`
    - ✨ 12/24 Hour Format
    - ✨ Seconds Support
  - 🟢 Popper `v1.0.0`
  - 🟢 Ripple Effect `v1.0.0`

### Upcoming Components 🚧

- **Basic**

  - ⏳ Checkbox
  - ⏳ Radio
  - ⏳ Switch
  - ⏳ Select
  - ⏳ DatePicker
  - ⏳ DateTimePicker
  - ⏳ Slider

- **Layout**

  - ⏳ Grid
  - ⏳ Box
  - ⏳ Container
  - ⏳ Stack

- **Navigation**

  - ⏳ Menu
  - ⏳ Tabs
  - ⏳ Breadcrumb
  - ⏳ Pagination

- **Feedback**

  - ⏳ Alert
  - ⏳ Dialog
  - ⏳ Snackbar
  - ⏳ Progress
  - ⏳ Skeleton

- **Data Display**
  - ⏳ Table
  - ⏳ List
  - ⏳ Tree
  - ⏳ Card
  - ⏳ Badge

### Future Web Components 🔮

We're planning to implement native Web Components support, including:

- **Core Web Components**

  - 🎯 Custom Elements
  - 🎯 Shadow DOM
  - 🎯 HTML Templates
  - 🎯 ES Modules

- **Features**
  - 🎯 Framework Agnostic
  - 🎯 Native Browser Support
  - 🎯 Encapsulated Styling
  - 🎯 Custom Events
  - 🎯 Slot-based Content Distribution

### Component Status Legend

- 🟢 Released - Component is stable and ready for production
- ⏳ Planned - Component is in the roadmap
- 🎯 Future - Planned for future releases
- ✨ Feature - Sub-feature of a component

## 🚀 Quick Start

### Installation

```bash
yarn add @minerva/lib-core @minerva/lib-theme
```

OR

```bash
npm install @minerva/lib-core @minerva/lib-theme
```

OR

```bash
pnpm add @minerva/lib-core @minerva/lib-theme
```

### Basic Usage

````tsx
import { Button, TextField } from "@minerva/lib-core";
import { ThemeProvider } from "@minerva/lib-theme";

function App() {
  return (
    <ThemeProvider>
      <TextField
        label="Username"
        placeholder="Enter username"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </ThemeProvider>
  );
}

### Advanced Usage

#### Custom Theme

```tsx
import { createTheme, ThemeProvider } from "@minerva/lib-theme";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your components */}
    </ThemeProvider>
  );
}
````

#### Using TimePicker

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
      label="Select Time"
    />
  );
}
```

## 🧑‍💻 Developer Quick Start

To develop with Minerva, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/fwx5618177/minerva.git
cd minerva
```

2. Install the dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Run tests:

```bash
pnpm test
```

5. Build the library:

```bash
pnpm build
```

## 🤝 Contributing

We welcome contributions! Please refer to our [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📧 Contact

For any questions or feedback, please contact us:

- Email: [Email](mailto:fwx5618177@gmail.com)
- Github Issue: [https://github.com/fwx5618177/minerva/issues](https://github.com/fwx5618177/minerva/issues)
- Github Pull Request: [https://github.com/fwx5618177/minerva/pulls](https://github.com/fwx5618177/minerva/pulls)
