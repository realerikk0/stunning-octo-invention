# LLM Arena 风格演示 Demo

这是一个展示两种不同视觉风格的 LLM Arena 落地页演示项目。

## 🎨 两种风格

### 1. 玻璃态风格 (Glassmorphism) 🔮

**核心特点：**
- 半透明磨砂玻璃效果 (backdrop-filter: blur)
- 柔和的渐变色彩（紫色、粉色、蓝色）
- 类似 iOS 的现代设计感
- 轻盈、优雅的视觉体验
- 大量留白，极简主义

**技术实现：**
- `backdrop-filter: blur(20px)` - 核心玻璃态效果
- 半透明背景色 `rgba(255, 255, 255, 0.1)`
- 柔和的边框和阴影
- 动态鼠标跟随光效

### 2. Geek/Tech 科技极客风 💻

**核心特点：**
- 暗黑背景 (#0a0e27)
- 荧光绿色主题 (#00ff88)
- 等宽字体 (Courier New)
- 网格背景效果
- 扫描线动画
- 终端/命令行美学

**技术实现：**
- 网格背景图案
- 霓虹发光效果 (text-shadow, box-shadow)
- 代码风格的排版
- Glitch 动画效果

## 📁 项目结构

```
stunning-octo-invention/
├── index.html          # 主页面
├── styles.css          # 样式文件（包含两种主题）
├── script.js           # JavaScript 交互逻辑
└── README.md          # 项目说明
```

## 🚀 如何使用

### 方法 1: 直接打开 HTML 文件

1. 下载或克隆此项目
2. 直接双击打开 `index.html` 文件
3. 浏览器会自动运行

### 方法 2: 使用本地服务器（推荐）

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (需要先安装 http-server)
npx http-server -p 8000
```

然后在浏览器访问：`http://localhost:8000`

### 方法 3: 使用 Live Server (VS Code)

1. 安装 VS Code 的 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 🎮 功能特性

### 风格切换
- 点击右上角的风格切换按钮即可实时切换主题
- 主题选择会保存在浏览器本地存储中
- 页面刷新后会记住您的选择

### 动画效果
- ✨ 滚动时的淡入动画
- 🔢 统计数字的动态计数
- 🌟 悬停时的卡片效果
- 🖱️ 鼠标跟随光效（玻璃态主题）
- 📺 扫描线效果（Geek主题）

### 响应式设计
- 📱 完美支持移动端
- 💻 自适应各种屏幕尺寸
- 🎯 触摸友好的交互

## 🎨 设计参考

### 玻璃态风格灵感来源：
- iOS 系统设计
- Windows 11 Fluent Design
- Apple Vision Pro UI
- macOS Big Sur

### Geek风格灵感来源：
- 终端/命令行界面
- The Matrix 视觉风格
- 赛博朋克美学
- 数据可视化仪表板

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代CSS特性
  - Backdrop Filter
  - CSS Grid & Flexbox
  - CSS Animations
  - CSS Custom Properties (可扩展)
- **Vanilla JavaScript** - 原生JS，无依赖
  - Intersection Observer API
  - Local Storage
  - Event Handling

## 🌟 核心CSS技术

### 玻璃态效果
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
```

### Geek荧光效果
```css
color: #00ff88;
text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
border: 2px solid #00ff88;
```

## 📱 浏览器兼容性

- ✅ Chrome 76+ (完全支持)
- ✅ Edge 79+ (完全支持)
- ✅ Safari 14+ (完全支持)
- ⚠️ Firefox 103+ (backdrop-filter需要开启)
- ❌ IE (不支持)

### Backdrop Filter 兼容性
玻璃态效果的核心 `backdrop-filter` 在以下浏览器中支持：
- Chrome/Edge: 76+
- Safari: 14+
- Firefox: 需要在 `about:config` 中启用

## 🎯 适用场景

这个Demo适用于：
- LLM/AI 产品展示
- SaaS 产品落地页
- 技术社区网站
- 开发者工具页面
- 数据平台首页

## 🚧 未来优化方向

- [ ] 添加更多主题选项
- [ ] 集成真实的API数据
- [ ] 添加暗黑/亮色模式切换（在当前主题基础上）
- [ ] 性能优化（减少重绘）
- [ ] 添加更多微交互动画
- [ ] SEO优化

## 📝 自定义指南

### 修改颜色
在 `styles.css` 中搜索：
- 玻璃态：`#667eea`, `#764ba2`
- Geek风：`#00ff88`, `#00ffff`

### 修改字体
在 `styles.css` 中搜索：
- 玻璃态：`-apple-system, BlinkMacSystemFont`
- Geek风：`'Courier New', monospace`

### 添加新主题
1. 在 `styles.css` 中添加 `.theme-yourname` 类
2. 在 `index.html` 中添加对应的按钮
3. JavaScript会自动处理切换逻辑

## 📄 许可证

MIT License - 随意使用和修改

## 👨‍💻 作者

Created with ❤️ by Claude

---

**提示**: 为了获得最佳体验，建议使用 Chrome 或 Safari 浏览器访问此演示。
