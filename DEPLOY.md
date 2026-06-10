# 🚀 部署教程：将现有项目替换为新的双语 Jekyll 个人主页

> 目标：把 `https://bingwl.github.io/` 上现有的旧工程完整替换为本仓库的双语 Jekyll 主页。
> 预计耗时：**15–25 分钟**（其中 GitHub 自动构建约需 1–2 分钟）。

---

## 📋 0. 前置检查清单

在开始之前，请先确认以下事项：

- [ ] 您拥有 GitHub 账号，且已存在名为 **`bingwl.github.io`** 的仓库（user-site 类型）
  - 仓库地址：https://github.com/bingwl/bingwl.github.io
  - ⚠️ **重要**：此仓库名**必须**为 `bingwl.github.io`，否则无法通过 `https://bingwl.github.io/` 访问
- [ ] 已在本地安装 **Git**（Windows 推荐使用 [Git for Windows](https://git-scm.com/download/win)）
- [ ] 已有 SSH key 或 Personal Access Token 配置好（用于推送代码）

> 💡 如果仓库名不是 `bingwl.github.io`，请先把仓库改名为 `bingwl.github.io`：
> 仓库主页 → **Settings → General → Repository name → 重命名**。

---

## 🛟 第一步：备份现有项目（强烈建议）

先把现有项目完整克隆到本地作为备份。打开 Git Bash（Windows）或终端（macOS / Linux）：

```bash
# 1. 在你喜欢的位置创建备份目录（不要放在本工程目录内）
mkdir -p ~/Desktop/bingwl-backup
cd ~/Desktop/bingwl-backup

# 2. 克隆现有项目（用 SSH 或 HTTPS 均可）
git clone git@github.com:bingwl/bingwl.github.io.git
#    或：git clone https://github.com/bingwl/bingwl.github.io.git
```

> 备份目录里会有完整的旧项目文件，包括 git 历史。**这一步不能省略**，万一新版本有问题可以随时回滚。

---

## 🔍 第二步：确认现有项目的发布源

登录 GitHub → 进入 `bingwl/bingwl.github.io` 仓库：

1. 点击顶部 **Settings** 选项卡
2. 左侧栏找到 **Pages** 一项
3. 在 **"Build and deployment → Source"** 中查看当前的发布源，最常见的有两种：

| 发布源 | 含义 | 是否需要修改 |
|--------|------|-------------|
| `Deploy from a branch` → `main` / `(root)` | 主分支根目录 | ✅ 完美匹配新工程，**无需改动** |
| `Deploy from a branch` → `main` / `/docs` | 主分支的 `docs/` 子目录 | ❌ 需要把新工程文件放进 `docs/` 子目录，或改为根目录 |
| `GitHub Actions` | 通过 Actions 自定义构建 | ❌ 需禁用并切回 branch 方式 |

**记录下当前的发布源**，后面的命令会用到。

---

## 🧹 第三步：清空现有项目的所有文件

### 方式 A：通过 GitHub 网页（最简单）

1. 在 GitHub 仓库页面，点击 **Add file → Create new file**（或 **Upload files**）
2. 在文件名输入框中输入 `_deleteme.txt`，提交一个空文件
3. 然后用以下任一方法清空：

**最干净的方式** — 使用 Git 本地操作（见下方 B）。

### 方式 B：通过 Git 本地操作（推荐，无残留）

```bash
# 1. 克隆仓库到本地（另开一个目录，与备份分开）
cd ~/Desktop
git clone git@github.com:bingwl/bingwl.github.io.git bingwl-site
cd bingwl-site

# 2. 删除除 .git 之外的所有文件（包括 .gitignore、_config.yml 等）
#    ⚠️ 这一步会物理删除文件，请确认已经做了第一步的备份！
git rm -r *

# 3. （可选）也删除 .gitignore 中可能存在冲突的条目
#    一般无需操作

# 4. 提交"清空"动作
git commit -m "chore: clear old project files (backup saved to ~/Desktop/bingwl-backup)"

# 5. 推送到 GitHub
git push origin main
```

推送完成后，访问 https://github.com/bingwl/bingwl.github.io 应该看到空仓库。

---

## 📦 第四步：把新工程的所有文件放进仓库

### 4.1 复制文件

**Windows (PowerShell)：**
```powershell
# 在 PowerShell 中
# 把本仓库 HomePage\ 下的所有内容（不包括 HomePage 本身）
# 复制到刚克隆的 bingwl-site 目录
Copy-Item -Path "C:\Users\bing\OneDrive\Desktop\HomePage\*" `
          -Destination "C:\Users\bing\Desktop\bingwl-site\" `
          -Recurse -Force

# 注意：上面的命令不会复制隐藏文件（.gitignore, .gemrc 等）
# 需要单独处理：
Copy-Item -Path "C:\Users\bing\OneDrive\Desktop\HomePage\.gitignore" `
          -Destination "C:\Users\bing\Desktop\bingwl-site\.gitignore" `
          -Force
```

**macOS / Linux (Bash)：**
```bash
# 用 cp -a 保留隐藏文件
cp -a /path/to/HomePage/. /path/to/bingwl-site/
# 说明：末尾的 /. 表示复制目录下的所有内容（含隐藏文件）
```

### 4.2 关键配置检查

打开 `bingwl-site/_config.yml`，确认 URL 已正确：

```yaml
url: "https://bingwl.github.io"
baseurl: ""           # 必须留空，因为是 user-site
```

✅ 我已经在仓库里预先填好了，您**无需修改**。

### 4.3 （可选）填上您的 CV PDF

如果您有 `BingbingWang-CV.pdf`：

```bash
cp ~/Downloads/BingbingWang-CV.pdf bingwl-site/assets/files/
```

访问 `/cv/` 页面时 "Download CV" 按钮就能正常下载。

### 4.4 提交并推送

```bash
cd bingwl-site

# 1. 查看即将提交的内容（应该是几百个文件 + 几张图）
git status

# 2. 全部加入暂存区
git add -A

# 3. 提交
git commit -m "feat: migrate to bilingual Jekyll academic homepage"

# 4. 推送到 main 分支
git push origin main
```

---

## ⏳ 第五步：等待 GitHub Pages 自动构建

推送后，GitHub 会自动开始构建：

1. 打开 https://github.com/bingwl/bingwl.github.io/actions
2. 您应该能看到一个名为 **"pages build and deployment"** 的工作流正在运行
3. 大约等待 **1–2 分钟**，构建成功后状态会变绿 ✅

> 🔍 第一次部署可能稍慢（2–3 分钟），后续更新通常 < 30 秒。

---

## ✅ 第六步：访问并验证

构建完成后，按以下清单逐项验证：

| # | 测试项 | 预期结果 |
|---|--------|----------|
| 1 | 打开 https://bingwl.github.io | 显示英文版主页，照片正常加载 |
| 2 | 点击右上角「🌐 中文」按钮 | 跳转到 https://bingwl.github.io/zh/，显示中文版 |
| 3 | 检查 Hero 区域的"朱丰源" | 应该是**朱丰源**（不是朱凤元） |
| 4 | 点击 Google Scholar 链接 | 跳转到您的 Scholar 个人主页 |
| 5 | 点击 ORCID 链接 | 跳转到您的 ORCID 主页 |
| 6 | 检查导航栏的所有锚链接 | 滚动到对应区块无错位 |
| 7 | 移动端模拟（Chrome F12） | 汉堡菜单正常工作 |
| 8 | 打开 `preview.html`（本地） | 双语切换按钮可即时切换 |

---

## 🔧 常见问题排查（FAQ）

### Q1: 推送到 `main` 后页面没更新 / 404
**A**: 检查 **Settings → Pages** 的发布源：
- 如果显示是 `/docs` 文件夹，请改回 `/(root)`
- 如果显示是 `gh-pages` 分支，请改为 `main / (root)`

### Q2: 出现 "Page build failed" 报错
**A**: 在 Actions 页面点击失败的工作流查看具体错误。常见原因：
- `_config.yml` 语法错误（注意 YAML 缩进必须是 2 空格）
- 引入了 GitHub Pages 不支持的插件（本工程已规避）
- 解决方法：本地用 `bundle exec jekyll build` 复现并修复

### Q3: CSS 加载失败 / 页面无样式
**A**: 检查 `url` 和 `baseurl` 配置：
```yaml
url: "https://bingwl.github.io"   # 必须以 https:// 开头，无尾斜杠
baseurl: ""                        # user-site 留空
```
错误配置会导致 `href="{{ '/assets/css/main.css' | relative_url }}"` 解析成 `https://bingwl.github.io/...` 但实际路径是别的。

### Q4: 中文页面 404
**A**: 确认 `zh/index.md` 文件存在且首行是 `---` 三连字符（YAML front matter）。GitHub Pages 会自动把 `zh/index.md` 渲染为 `https://bingwl.github.io/zh/`。

### Q5: 照片不显示
**A**:
- 确认 `assets/images/MyPhoto2.png` 文件已推送
- 浏览器按 F12 → Network 标签 → 刷新页面 → 看图片请求是否 200
- 如果是文件名大小写问题（如 `.PNG` vs `.png`），GitHub Pages 对大小写敏感，需保持一致

### Q6: 想用自定义域名（如 `bingbingwang.com`）
**A**:
1. 在仓库根目录创建 `CNAME` 文件（无后缀），写入您的域名
2. 在域名服务商处添加 CNAME 记录指向 `bingwl.github.io.`
3. 在 **Settings → Pages → Custom domain** 中输入域名
4. 等待 DNS 生效（5–30 分钟）
5. （可选）勾选 **Enforce HTTPS**

### Q7: 提交时提示 "remote end hung up" / 网络错误
**A**:
- 国内访问 GitHub 不稳定时，建议：
  - 开启 VPN / 代理
  - 或将远程地址改为 `git://` 协议
  - 或使用 GitHub Desktop 图形化工具提交

### Q8: 想回滚到旧版
**A**:
```bash
cd ~/Desktop/bingwl-site
# 查看历史
git log --oneline

# 回退到上一个版本（替换 <commit-hash> 为实际哈希）
git reset --hard <commit-hash>
git push -f origin main
```
或者直接用 `~/Desktop/bingwl-backup` 里的备份文件重新推送。

---

## 🎁 进阶建议

部署成功之后，您还可以：

- **添加 Google Analytics**：在 `_includes/head.html` 中加入 GA 脚本
- **启用评论系统**（如 Giscus）：在文章底部加入评论组件
- **添加博客板块**：在 `_config.yml` 中启用 `posts` 集合即可
- **自定义主题色**：修改 `assets/css/main.css` 顶部的 `--color-primary` 等 CSS 变量

---

## 📞 需要帮助？

- 📖 [Jekyll 官方文档](https://jekyllrb.com/docs/)
- 📖 [GitHub Pages 官方文档](https://docs.github.com/pages)
- 🐛 工程本身的问题 → 检查 GitHub Actions 的报错日志
- 💬 其它问题 → 通过 README 中的联系方式与作者交流

---

> **祝您部署顺利！🎉**
> *如果一切正常，您的双语个人主页将在 https://bingwl.github.io/ 上线。*
