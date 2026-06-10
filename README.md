# 血染钟楼 (Blood on the Clocktower) 学习指南

> 给玩过狼人杀和阿瓦隆的你

🔗 **在线阅读**：[botc-learning-notes.pages.dev](https://botc-learning-notes.pages.dev)
（Cloudflare Pages 部署，国内国外都能访问、无需 VPN）

---

## 这是什么？

**血染钟楼**（简称 **BOTC** / **血钟**）是一款 **5–20 人** 的社交推理桌游，由 Steven Medway 设计。它被许多人称为"狼人杀的终极进化版"——保留了昼夜阵营对抗的内核，但把信息深度、角色机制和玩家体验全面升级。

一句话理解：**白天大家讨论、投票处决一人；夜晚说书人执行各角色的能力。善方目标是处决恶魔，邪恶方目标是让活人只剩 2 人或处决圣徒。**

---

## 跟狼人杀 / 阿瓦隆有啥不一样？

| 对比项 | 狼人杀 | 阿瓦隆 | **血染钟楼** |
|---|---|---|---|
| 死了还能玩吗 | ❌ 出局观战 | ❌ 出局观战 | ✅ **死了继续玩**，还有 1 次"鬼票"和发言权 |
| 信息可靠性 | 神职信息基本准 | 派西维尔会被梅林/莫甘娜混淆 | **信息可能被毒、醉、伪装扭曲**——你看到的不一定是真的 |
| 身份固定 | 固定 | 固定 | **身份可能在游戏中变化**（恶魔死了爪牙变恶魔，"酒鬼"自己以为是好人） |
| 白天能私聊 | ❌ 只能公聊 | ❌ 只能公聊 | ✅ **可以拉到一边小声密谈**（Whisper） |
| 说书人 | 上帝按规则发牌 | 不需要 | **说书人有大量裁决权**——能选择给你哪些假信息、什么时候触发能力 |
| 处决 | 必须处决最高票 | 远征队投票通过/否决 | **每天最多处决 1 个，也可以不处决**（"流局"） |
| 节奏 | 快，几局打完 | 紧凑，30 分钟 | 1 局 60–90 分钟，**叙事感和沉浸感极强** |

**核心体验差异**：狼人杀和阿瓦隆考验的是"逻辑+表演"；血钟考验的是"在不确定信息下推理"——你要学会怀疑自己的视角，因为你这个角色可能本身就拿到了错的信息。

---

## 你应该按这个顺序读

| 顺序 | 文件 | 用途 | 预计时间 |
|---|---|---|---|
| 1️⃣ | [`01-快速入门.md`](./01-快速入门.md) | 5 分钟知道这游戏在玩啥 | 5 分钟 |
| 2️⃣ | [`02-完整规则.md`](./02-完整规则.md) | 一局游戏从头到尾怎么进行 | 15 分钟 |
| 3️⃣ | [`03-暗流涌动角色详解.md`](./03-暗流涌动角色详解.md) | 新手剧本 22 个角色全解析 | 20 分钟 |
| 4️⃣ | [`04-新手策略与误区.md`](./04-新手策略与误区.md) | 看完能直接坐上桌 | 15 分钟 |
| 5️⃣ | [`05-学习资源.md`](./05-学习资源.md) | 视频、网站、线上平台 | 收藏备查 |
| 6️⃣ | [`06-术语速查表.md`](./06-术语速查表.md) | 听不懂术语时翻这里 | 速查 |

---

## 给新人的一句话建议

> **第一局别想着赢，专心搞清楚"今晚发生了什么、为什么这个信息是这样"——血钟的乐趣 80% 来自于解谜，剩下 20% 来自于发现"我居然被骗成这样"。**

祝玩得开心！🕰️

---

## 附录：如何扩展角色图片

> 写给以后想 fork 这个仓库做自己笔记的人，也包括半年后忘了流程的我自己。

角色头像统一从 [`bra1n/townsquare`](https://github.com/bra1n/townsquare) 取——一个被广泛使用、获官方授权的 BotC 网络版开源工具，icon 库覆盖所有主流剧本，文件命名规范、统一画风、透明背景。

### 1. 文件命名规则

文件名一律 **英文小写、无空格、无下划线**。比如：

| 中文名 | 英文 | 文件名 |
|---|---|---|
| 占卜师 | Fortune Teller | `fortuneteller.png` |
| 红唇女郎 | Scarlet Woman | `scarletwoman.png` |
| 守鸦人 | Ravenkeeper | `ravenkeeper.png` |

完整文件列表在 [src/assets/icons/](https://github.com/bra1n/townsquare/tree/develop/src/assets/icons)。

### 2. 批量下载到 `public/roles/`

```bash
mkdir -p public/roles && cd public/roles

# 列出你想要的角色英文名（空格分隔）
for role in washerwoman investigator empath undertaker ravenkeeper \
            slayer mayor librarian chef fortuneteller monk virgin soldier \
            butler recluse drunk saint \
            poisoner scarletwoman spy baron imp; do
  code=$(curl -sL -w "%{http_code}" -o "${role}.png" \
    "https://raw.githubusercontent.com/bra1n/townsquare/develop/src/assets/icons/${role}.png")
  size=$(wc -c < "${role}.png" | tr -d ' ')
  echo "${role}: HTTP=${code} size=${size}"
done
```

输出每个文件的 HTTP 状态码 + 大小——HTTP=200 + size > 10KB 才算成功；遇到 404 就说明文件名拼错了，去 icons 目录核对。

### 3. 在 Markdown 中嵌入（当前博客的标准格式）

```html
<img src="/roles/imp.png" width="80" alt="小恶魔" style="float:left;margin:0 16px 8px 0" />
```

- `width="80"` —— 角色详解页的标准尺寸
- `float: left` + `margin` —— 让文字在右侧环绕，节省垂直空间

VitePress 的 `public/` 目录会被原样发布到站点根路径，所以路径就是 `/roles/xxx.png`，无需 `../public/` 这种相对路径。

### 4. 版权说明

图标版权归 **The Pandemonium Institute** 所有。本仓库仅作个人学习记录之用，非商用。如果你 fork 后做了商用，请联系版权方获得授权。
