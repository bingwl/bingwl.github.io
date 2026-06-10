# 🪟 Windows 图形化部署教程（全程鼠标操作，零命令行）

> 目标：把 `https://bingwl.github.io/` 上的旧工程**完整替换**为本仓库的双语 Jekyll 个人主页。
> 本教程**完全避开命令行**，所有操作通过图形界面（GitHub Desktop + 文件资源管理器）完成。
> 预计耗时：**20–30 分钟**。

---

## 📑 三种方法对比

| 方法 | 难度 | 是否需要安装 | 推荐度 | 适合谁 |
|------|------|--------------|--------|--------|
| **方法 1：GitHub Desktop（图形化）** | ⭐ 简单 | ✅ 需要安装 GitHub Desktop | ⭐⭐⭐⭐⭐ | **完全没用过命令行的您** |
| **方法 2：PowerShell 命令行** | ⭐⭐⭐ 中等 | ✅ 需要安装 Git for Windows | ⭐⭐⭐  | 想学习命令行的人 |
| **方法 3：GitHub 网页** | ⭐⭐ 繁琐 | ❌ 不需安装 | ⭐⭐ | 应急、临时使用 |

> 👉 **强烈推荐方法 1**。下面给出详细步骤。

---

# 🟢 方法 1：使用 GitHub Desktop（强烈推荐）

> GitHub Desktop 是 GitHub 官方推出的**免费图形化 Git 客户端**。全程用鼠标，无需敲任何命令。

## 第 1 步：下载并安装 GitHub Desktop

1. 用浏览器打开：https://desktop.github.com/
2. 点击大大的紫色 **"Download for Windows"** 按钮（会自动下载约 130 MB）
3. 下载完成后双击安装包 `GitHubDesktopSetup.exe`
4. 安装过程全部**点 "Next" / "Install" / "Finish"** 即可（一路绿灯）
5. 安装完成后，GitHub Desktop 会自动启动

> 💡 如果系统提示"是否允许此应用对设备进行更改"，请点 **"是"**。

## 第 2 步：用 GitHub 账号登录

1. 在 GitHub Desktop 启动界面，点击 **"Sign in to GitHub.com"**（用浏览器登录）
2. 浏览器会跳转到 GitHub 登录页，输入您的账号密码（或扫码）
3. 看到 "授权 GitHub Desktop" 页面时，点击 **"Authorize desktop"** 绿色按钮
4. 浏览器显示 "已授权" 后，回到 GitHub Desktop，会看到 **"Let's get started"** 欢迎页
5. 第一项 **"What do you want to do first?"** 选择 **"Clone a repository from the Internet"**

> 🔑 登录用的 GitHub 账号**必须**拥有 `bingwl/bingwl.github.io` 仓库的写权限（一般是您自己的账号即可）。

## 第 3 步：克隆现有项目到本地

1. 在弹出的 "Clone a repository" 窗口中：
   - 顶部的 **GitHub.com** 标签应该被选中
   - 在搜索框中输入 **`bingwl.github.io`**
   - 下方列表会出现 **`bingwl/bingwl.github.io`** 项，点击选中
2. 在底部的 **"Local path"** 处选择本地存放位置：
   - 点击 **"Choose..."** 按钮
   - 在弹出的文件选择窗口中：
     - 左侧栏点击 **"桌面"**（或您想存放的位置）
     - 点击 **"新建文件夹"**（右下角带 "+" 的图标）
     - 文件夹名输入 **`bingwl-site`**
     - 双击进入这个新建的空文件夹
     - 点击 **"选择文件夹"**（或"Select Folder"）
3. 确认窗口中的路径显示为 `...\桌面\bingwl-site`，然后点击 **"Clone"** 蓝色按钮
4. 等待几秒到几十秒（取决于项目大小），完成后会显示 **"Cloning complete"**
5. GitHub Desktop 主页会显示仓库名、当前分支 `main` 等信息

> 💡 克隆完成后，所有现有项目文件已经在 `C:\Users\bing\Desktop\bingwl-site\` 目录中。

## 第 4 步：在文件资源管理器中打开仓库目录

1. 在 GitHub Desktop 主界面，点击顶部菜单 **"Repository"**（仓库）
2. 选择 **"Show in Explorer"**（在文件资源管理器中显示）
3. Windows 文件资源管理器会打开 `bingwl-site` 文件夹

> 这一步相当于在终端中 `cd bingwl-site`，但**只是打开了一个文件夹窗口**。

## 第 5 步：删除现有项目的所有文件

> ⚠️ **警告**：这一步会删除您现有项目的所有文件！请确保您已经在别处做好了备份（见第 5.5 步）。

### 5.5 （强烈建议）先做一次备份

为防万一，先把现有项目文件复制一份到桌面：

1. 回到 GitHub Desktop，按 `Ctrl + Shift + A`（或菜单 **Repository → Show in Explorer**）再次打开仓库目录
2. 在窗口地址栏的 `bingwl-site` 上点一下，**全选地址** → `Ctrl+C`
3. 在桌面上空白处右键 → **"新建 → 文件夹"** → 命名为 **`bingwl-backup`**
4. 双击进入 `bingwl-backup` 文件夹
5. 在地址栏输入 `Ctrl+V` 粘贴刚才的地址，按回车
6. 看到旧项目文件后，按 **`Ctrl+A` 全选** → **`Ctrl+C` 复制**
7. 回到 `bingwl-backup` 文件夹 → **`Ctrl+V` 粘贴**
8. 等待复制完成

> ✅ 现在 `C:\Users\bing\Desktop\bingwl-backup\` 里就有了完整的旧项目备份。

### 5.6 删除 `bingwl-site` 中的所有旧文件

1. 切换回 `bingwl-site` 文件夹窗口
2. 按 **`Ctrl+A`** 全选所有文件和文件夹
3. 按 **`Delete`** 键（或者右键 → 删除）
4. 在弹出的确认框中点 **"是"**（永久删除）
5. 此时文件夹应该是**空**的（但您看不到一个叫 `.git` 的隐藏文件夹，这是正常的——它是 Git 用来记录历史的，**不能删除**）

> 🔍 如果您能看到 `.git` 文件夹被一起删了，请按 `Ctrl+Z` 撤销，然后单独跳过它（步骤见下方）。
> 🔍 要看隐藏文件：在文件资源管理器菜单 **"查看" → 勾选"隐藏的项目"**

**只删除可见文件，保留隐藏的 `.git` 文件夹的标准做法：**

1. 打开 `bingwl-site` 文件夹
2. 在空白处右键 → **"查看" → "大图标"**（或任意非"详细信息"模式，这样隐藏文件更明显）
3. 勾选菜单 **"查看 → 隐藏的项目"**，您会看到 `.git` 文件夹（图标略暗）
4. **逐个**选中所有**非 `.git` 的文件和文件夹**（按住 `Ctrl` 逐个点击，或先点一个再 `Shift` 点最后一个）
5. 按 `Delete` 键，确认

## 第 6 步：复制新工程文件到 `bingwl-site`

1. 打开另一个文件资源管理器窗口，定位到本仓库：
   - 路径：`C:\Users\bing\OneDrive\Desktop\HomePage\`
2. 在新窗口中按 **`Ctrl+A`** 全选（**注意**：这会包括 `.gitignore` 等隐藏文件，前提是您勾选了"隐藏的项目"）
   - 如果没勾选"隐藏的项目"，可以单独复制 `.gitignore`（步骤见下方）
3. 按 **`Ctrl+C`** 复制
4. 切换到 `bingwl-site` 文件夹窗口
5. 按 **`Ctrl+V`** 粘贴
6. 如果有重名文件（如已存在 `index.md`），系统会询问"替换"——选择 **"替换目标中的文件"**

**补充：复制隐藏文件（`.gitignore`）**

如果之前没勾选"隐藏的项目"，粘贴操作可能漏掉 `.gitignore`：

1. 在 `HomePage` 窗口的菜单 **"查看" → 勾选"隐藏的项目"**
2. 找到 `.gitignore`（图标略暗），右键 → **"复制"**
3. 粘贴到 `bingwl-site` 目录

## 第 7 步：在 GitHub Desktop 中查看变更

回到 GitHub Desktop：

1. 主界面左侧应显示 **"Changed files"（已更改的文件）** 列表
2. 列表里应该有几百个文件（17 个 markdown 文档 + 几百个 .scss/.html/.js 编译产物... 不对，我们没有 .scss，所以是几十个文件）

> 💡 如果左侧显示 **"No local changes"**（无本地更改），说明粘贴没成功，请检查第 6 步。

3. 中间区域会显示每个文件的 **"+" 号**（新增）或 **"-" 号**（删除）
4. 简单核对一下：右侧应该看到 `index.md`、`zh/index.md`、`preview.html`、`_config.yml`、`Gemfile` 等关键文件

## 第 8 步：填写提交说明并推送

1. 在 GitHub Desktop 左下角，您会看到两个输入框：
   - **"Summary (required)"** （必填的简要说明）
   - **"Description"** （可选的详细说明）
2. 在 Summary 中输入：
   ```
   feat: migrate to bilingual Jekyll academic homepage
   ```
3. 点击 **"Commit to main"** 蓝色按钮（左下角）
4. 提交完成后，右上角会多出一个 **"Push origin"** 按钮，点击它
5. 状态栏会显示 "Pushing to origin..." → "Pushed to origin"
6. 大功告成！🎉

## 第 9 步：等待并验证

1. 用浏览器打开：https://github.com/bingwl/bingwl.github.io/actions
2. 您应该能看到一个正在运行的 **"pages build and deployment"** 工作流
3. 等待约 **1–2 分钟**，构建成功后会显示绿色 ✅
4. 打开 https://bingwl.github.io 查看新主页

---

# 🟡 方法 2：使用 PowerShell（适合想尝试命令行的人）

> 如果您愿意学习一些简单的命令行操作，可以用 PowerShell。

## 第 1 步：安装 Git for Windows

1. 打开 https://git-scm.com/download/win
2. 下载 64-bit Git for Windows Setup
3. 双击安装，**全部选项保持默认，一路点 "Next" / "Install" / "Finish"**

## 第 2 步：打开 PowerShell

**多种打开方式（任选其一）：**
- 按 `Win + X` → 点击 **"Windows Terminal"** 或 **"终端"** 或 **"PowerShell"**
- 按 `Win + S` 搜索 **"PowerShell"** → 点击打开
- 在开始菜单找到 **"Windows PowerShell"**

> 💡 Windows 11 推荐使用 **Windows Terminal**（现代化的多标签终端）。

## 第 3 步：依次执行以下命令

把下面整段代码**全部复制**（从 `git clone` 到 `git push`），粘贴到 PowerShell 窗口中，按回车执行。

```powershell
# 1. 备份现有项目到桌面
$bk = "$env:USERPROFILE\Desktop\bingwl-backup"
New-Item -ItemType Directory -Path $bk -Force | Out-Null
Set-Location $bk
git clone https://github.com/bingwl/bingwl.github.io.git

# 2. 克隆一份用于替换
Set-Location "$env:USERPROFILE\Desktop"
git clone https://github.com/bingwl/bingwl.github.io.git bingwl-site
Set-Location bingwl-site

# 3. 删除除 .git 之外的所有文件
Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

# 4. 复制新工程文件到当前目录
Copy-Item -Path "C:\Users\bing\OneDrive\Desktop\HomePage\*" -Destination . -Recurse -Force
Copy-Item -Path "C:\Users\bing\OneDrive\Desktop\HomePage\.gitignore" -Destination .\.gitignore -Force

# 5. 提交并推送
git add -A
git commit -m "feat: migrate to bilingual Jekyll academic homepage"
git push origin main
```

执行过程中：
- 第一次粘贴命令时，PowerShell 可能会问 **"是否从 Internet 运行脚本"** → 输入 `R` 回车
- 可能会弹出 GitHub 登录窗口 → 浏览器授权即可
- 看到 `* [new branch] main -> main` 或类似输出即代表成功

---

# 🟠 方法 3：纯网页操作（应急用，不推荐）

如果既不能装 GitHub Desktop，也不想用命令行，可以**完全通过 GitHub 网页**操作。但缺点是**很繁琐**——要逐个删除文件。

## 第 1 步：删除现有项目文件

1. 打开 https://github.com/bingwl/bingwl.github.io
2. 看到的所有文件，**逐个点进去 → 右上角"..." → "Delete file" → 底部"Commit changes"**
3. 对每个**子目录**：先进入目录删除里面的文件，回到上级，再删除空目录
4. 这个过程**非常耗时**（如果文件多则需要 30 分钟+）

## 第 2 步：上传新文件

1. 回到仓库主页：https://github.com/bingwl/bingwl.github.io
2. 点击 **"Add file" → "Upload files"**
3. **拖拽** `HomePage` 文件夹中的**所有文件**到上传区
   - ⚠️ 注意：拖拽**所有文件 + 子文件夹**到页面上传是**不支持**的，必须保持**目录结构**
4. 用 **"choose your files"** 链接一次只能选多个文件，但**不能保留目录结构**

> ⚠️ **方法 3 的根本问题**：GitHub 网页上传无法保留 `assets/css/`、`assets/images/`、`_includes/` 等子目录结构。如果用方法 3，新工程会**无法运行**。
>
> 因此**强烈建议使用方法 1 或方法 2**。

---

# ✅ 部署完成后的验证清单

打开 https://bingwl.github.io，按下表逐项检查：

| # | 检查项 | 预期 |
|---|--------|------|
| 1 | 页面整体加载 | 显示英文版主页，**无 404 错误** |
| 2 | 个人照片 | 左侧圆形头像正常显示 |
| 3 | 姓名"朱丰源" | 中文版显示"王冰冰"，合作者处显示"**朱丰源**"（不是"朱凤元"） |
| 4 | Google Scholar 链接 | 点击跳转 https://scholar.google.com/citations?user=jsKU6MQAAAAJ |
| 5 | ORCID 链接 | 点击跳转 https://orcid.org/0000-0001-5165-6403 |
| 6 | 语言切换按钮 | 点击右上角"中文"按钮，跳转到 https://bingwl.github.io/zh/ |
| 7 | 中文页布局 | 文字应换为中文，CCF-A 等徽章正常显示 |
| 8 | 6 个板块 | About / Research / Publications / Patents / Awards / Service 都可见 |
| 9 | 移动端 | 浏览器按 F12 → 点手机图标模拟手机 → 汉堡菜单正常 |
| 10 | News 动态 | 顶部黄色提示条有 3 条最新动态 |

---

# ❓ 常见问题（Windows 用户特别版）

### Q1: 推送后访问 https://bingwl.github.io 仍显示旧页面
**A**: 浏览器按 `Ctrl + F5` 强制刷新一次（绕过缓存）。如果还不行，等 2-3 分钟再试。

### Q2: GitHub Desktop 提示 "Authentication failed"
**A**: 重新登录。菜单 **File → Options → Accounts → Sign out**，然后再次登录。

### Q3: 克隆时报错 "Repository not found"
**A**:
- 确认仓库名是 `bingwl.github.io`（不是 `bingwl/BingbingWang.github.io` 等）
- 确认您登录的 GitHub 账号对该仓库有写权限
- 访问 https://github.com/bingwl/bingwl.github.io 看是否能正常打开

### Q4: 推送时提示 "Updates were rejected"
**A**: 表示您本地版本与 GitHub 远程版本不一致（可能别人/另一个客户端推送过代码）。
解决：菜单 **Repository → Pull** 先拉取一次，再 Push。

### Q5: Actions 显示构建失败 "Page build failed"
**A**:
- 点开失败的工作流查看错误日志
- 90% 的情况是 `_config.yml` 缩进错误或某个 markdown 文件语法问题
- 截图发我看看也行

### Q6: CSS 没生效（页面无样式、像 1990 年代网页）
**A**:
- 按 F12 打开开发者工具 → Console 标签 → 看是否有 404 错误
- 常见原因：`assets/css/main.css` 没上传成功
- 在 GitHub Desktop 的 Changes 列表中确认 `assets/css/main.css` 在内

### Q7: 中文页面 404
**A**:
- 在 https://github.com/bingwl/bingwl.github.io 页面左侧文件树中确认有 `zh/` 文件夹
- 确认 `zh/index.md` 首行是 `---`（三连字符）
- 等 5 分钟再试（构建可能排队中）

### Q8: 想回退到旧版本
**A**:
- 在 GitHub Desktop 中：菜单 **Branch → Reset to commit** → 选上一个版本 → 强制推送
- 或在 GitHub 网页：进入 **Actions** → 选上一次成功的构建 → 右上角 "Re-run jobs"
- 或用桌面上的 `bingwl-backup` 文件夹重新走一遍流程

---

# 📌 总结：5 步极简流程（方法 1）

1. **下载安装** GitHub Desktop → 登录
2. **克隆** `bingwl/bingwl.github.io` → 本地 `桌面\bingwl-site`
3. **删除** `bingwl-site` 里除 `.git` 之外的所有文件
4. **复制** `HomePage\` 下所有文件 → 粘贴到 `bingwl-site`
5. **GitHub Desktop** 提交信息填 `feat: migrate to bilingual Jekyll academic homepage` → Commit → Push origin

完成后等待 1–2 分钟，访问 https://bingwl.github.io 即可看到新主页！

---

> 🎉 **祝您部署顺利！** 有任何问题欢迎随时找我。
