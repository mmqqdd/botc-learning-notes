---
# === 元数据（frontmatter）===
# 这部分是给 AI 检索/筛选用的，必填字段都填，可选字段没有就删
id: example-role                       # 唯一标识，英文小写无空格
name_cn: 示例角色                       # 中文官方译名
name_en: Example Role                  # 英文原名
also_known_as:                         # 其他译名（可选）
  - 别名 1
  - 别名 2
script: trouble-brewing                # 主剧本：trouble-brewing | outed-evil | sects-and-violets | bad-moon-rising | custom
also_in:                               # 也出现在哪些剧本（可选，跨剧本角色填）
  - outed-evil
team: townsfolk                        # 阵营：townsfolk | outsider | minion | demon | fabled | traveler
category: information                  # 分类：information | protection | death-trigger | status | manipulation | win-condition
night_action: every_night              # 夜晚行动：every_night | star_night | first_night | none
first_night: true                      # 第一夜是否行动（影响信息系角色）
public_during_day: false               # 白天是否有公开行动（杂耍艺人/猎手）
once_per_game: false                   # 是否一局只能用一次
setup_modifier: false                  # 是否修改初始设置（哨兵、男爵这种）
sources:                               # 信息来源（追溯用）
  - 萌娘百科·占卜师
  - BotC Wiki / Fortune Teller
last_updated: 2026-06-27               # 最后更新日期
---

# {中文名} {英文名}

## 一句话能力
{10-30 字精简描述，让 AI 快速了解这是个什么角色}

## 严格规则
> **事实陈述，不带主观判断**——拿什么、什么时候用、有哪些限制

- {完整能力描述}
- {关键限制 1}
- {关键限制 2}

### 重要例外
- {跟其他角色互动时的例外}
- {中毒/醉酒时怎么处理}

## 关键概念
> **如果有专属术语就在这里定义**

- **{术语}**：{定义}

## 我拿到这张卡 — 行动指南

### 第一夜 / 起手
- {具体动作}

### 日常行动
- {每晚 / 每天怎么用能力}

### 跳身份时机
- {何时该跳 / 何时该藏}
- {为什么 / 怎么跳得稳}

### 信息使用
- {怎么解读得到的信息}
- {怎么和其他玩家信息对账}

### 死亡风险评估
- {你是邪方优先刀的目标吗？}
- {应该求僧侣保护吗？}

## 别人跳了这张卡 — 怎么验证

### 验证方法
- {怎么对账他给的信息}
- {他的能力流程符合预期吗}

### 信息可信度
- {他给的信息有多可信}
- {可能被毒/醉/伪装吗}

### 邪方伪跳的特征
- {假{角色名}的常见破绽}

## 容易踩的坑
- {新手错误 1}
- {新手错误 2}
- {新手错误 3}

## 关键互动

### 跟 {角色 A}
- {互动描述}

### 跟 {角色 B}
- {互动描述}

## 跨剧本变化（如有）

### 在 {另一个剧本} 里
- {本剧本独有的考虑}

## 老玩家建议
> **来自社区的高级技巧**（来源：BotC Wiki / 海外玩家讨论 / 实战复盘）

- {高级技巧 1}
- {高级技巧 2}

## 引用
- {来源 URL 1}
- {来源 URL 2}
