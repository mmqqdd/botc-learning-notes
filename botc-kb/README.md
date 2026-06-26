# BotC 知识库（AI 训练用）

> 这个目录是**喂给 AI 教练用的结构化知识库**，不是给人读的博客文档。
> - 给人读的入门内容在仓库根目录（01-06、07-08、游戏复盘.md）
> - 给 AI 用的是这里的结构化数据

## 这里有什么

```
botc-kb/
├── README.md                # 本文件
├── _template/               # 模板和生成工具
│   ├── role-template.md     # 单个角色文档模板
│   └── extract-prompt.md    # 让 LLM 按模板生成角色文档的 prompt
│
├── _common/                 # 通用规则（跨剧本）
│   └── ...                  # 待填
│
├── trouble-brewing/         # 暗流涌动（22 角色）
│   └── ...                  # 待填
│
├── outed-evil/              # 横行霸道（26 角色）
│   └── ...                  # 待填
│
└── interactions/            # 跨角色关键互动
    └── ...                  # 待填
```

## 写作原则

每个角色文档遵循 `_template/role-template.md` 的统一结构：

- **严格规则**：事实陈述，不带主观判断
- **实战玩法**：分"我拿到 / 别人跳了 / 容易踩的坑"三个视角
- **关键互动**：跟其他角色的特殊交互
- **元数据**：frontmatter 标注剧本、阵营、能力类型，方便 AI 检索

## 怎么填充内容

参考 `_template/extract-prompt.md`——用一段精心设计的提示词，喂给 LLM（Claude/DeepSeek/GPT），它会按模板生成结构化文档。然后人工审核修订。

预估工作量：48 个角色 × 平均 5 分钟（LLM 生成 + 审核） ≈ 4-6 小时。

## 不发布到博客

`.vitepress/config.mts` 已将 `botc-kb/**` 加入 srcExclude，这些文件不会出现在 botc-learning-notes.pages.dev 上。
