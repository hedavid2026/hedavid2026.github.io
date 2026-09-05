# 何大勇个人网站 · GitHub Pages

线上地址：https://hedavid2026.github.io/

## 本地开发

```bash
npm install
npm run dev
```

## 构建并更新 docs（GitHub Pages）

```bash
npm run build
```

构建产物输出到仓库根目录的 `docs/`。

## GitHub Pages 设置

仓库：**Settings → Pages**

1. **Source**：Deploy from a branch  
2. **Branch**：`main`  
3. **Folder**：`/docs`  

保存后等待 1–2 分钟即可访问。

本仓库为 User Site（`username.github.io`），Vite `base` 为 `/`。子路由刷新依赖 `public/404.html` 的 SPA 回退方案（见 [spa-github-pages](https://github.com/rafgraph/spa-github-pages)）。
