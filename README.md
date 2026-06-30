# seasonHL.github.io

seasonHL 的个人网站，定位是作品集优先的个人品牌站。

网站用于展示 AI 工具、开发者工具、桌面应用和全栈产品实验，同时保留博客入口，用来记录项目复盘、技术笔记和产品判断。

## 内容结构

- 首页：个人定位、精选项目、技术能力、最近文章
- 项目：精选项目和候选项目索引
- 博客：文章、标签、归档和 RSS
- 关于：关注方向、常用工具、社交入口和站点说明
- 友链：朋友链接和站点信息

## 精选项目

- **DepSpy**：npm 依赖分析与可视化工具
- **Prompt Hub**：提示词发现、提交和审核平台
- **Desktop Agent**：基于 Tauri 的本地 AI 桌面助手
- **OpenClaw Desktop Pet**：面向 agent runtime 状态的桌面交互实验

项目数据集中维护在 `src/data/projects.ts`。

## 技术栈

- [Astro](https://astro.build/)
- [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)
- MDX / Content Collections
- Pagefind search
- Waline comments
- GitHub Pages

## 本地开发

环境要求：

- Node.js 18+
- Bun

安装依赖：

```bash
bun install
```

启动开发服务器：

```bash
bun dev
```

检查类型和内容：

```bash
bun run check
```

构建静态站点：

```bash
bun run build
```

预览构建产物：

```bash
bun run preview
```

## 常用目录

```text
src/pages/              路由页面
src/content/blog/       博客文章
src/data/projects.ts    项目数据
src/assets/             头像、图标和图片资产
src/site.config.ts      站点标题、导航、页脚和集成配置
```

## 鸣谢

这个网站基于 Astro Theme Pure 改造，感谢 Astro 和主题作者提供的基础能力。
