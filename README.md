# REA

Vite + React 单页站点，推送 `main` 分支后由 GitHub Actions 自动构建并发布到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物在 dist/
npm run preview  # 预览 dist/
```

## 部署

推送到 `main` 即触发 [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)：

1. `npm install` + `npm run build`
2. `actions/configure-pages` 打开 Pages（`build_type: workflow`）
3. `upload-pages-artifact` 打包 `dist/`
4. `deploy-pages` 发布，地址 `https://<账号>.github.io/<仓库名>/`

`vite.config.js` 里的 `base: './'` 是为了适配 Pages 的子路径，别改成绝对路径，否则资源会 404。

## 目录

```
index.html
vite.config.js
src/
  main.jsx      入口
  App.jsx       页面
  style.css     样式
.github/workflows/deploy-pages.yml
```
