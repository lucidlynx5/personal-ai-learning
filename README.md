# LA News

景观项目征集、概念竞赛、设计奖项索引。

- 中文：https://lucidlynx5.github.io/personal-ai-learning/?lang=zh
- English：https://lucidlynx5.github.io/personal-ai-learning/?lang=en

## 当前版本

黑白主色、绿色强调。直接呈现索引，无宣传主视觉、受众介绍、效率口号或装饰性示意图。
顶部以“中文 / English”显示语言切换；界面及竞赛摘要、资格、费用与备注均有双语。
支持类别、地区、资格、费用、状态、核查程度筛选，搜索、排序、本地收藏、详情及筛选链接分享。

本轮36条记录，其中35条未过当前提交截止：21条开放、1条待开报、7条报名结束但仍可提交、6条报名状态待核实，另1条归档。计数为2026-11-11核查快照，会随日期自然改变。
35条不等于35条均能新报名，也不等于35条都已经官方确认。
来源目录44个渠道，按政府/公共业主、专业协会、专业媒体、赛事官网分组。
[覆盖与本轮核查说明](docs/SOURCE_COVERAGE.md)。

## 自动更新

ChatGPT自动任务“更新 LA News 竞赛索引”每两天研究并写回data/competitions.json。
首个计划：2026-11-13 08:00（Asia/Shanghai，灵活调度）。调度已启用，首次无人值守执行尚待验证。
任务已更新：持续发现新项目，覆盖政府项目发布，目标至少30条有证据的未截止相关记录；找不到须报告，不得编造或凑数。
[更新协议](docs/UPDATE_PROTOCOL.md)。

## 技术与验证

原生HTML/CSS/JS，无构建步骤、依赖或API密钥。沿用main根目录GitHub Pages。

```sh
node scripts/validate-data.mjs
node scripts/check.mjs
node --check app.js
git diff --check
```

数据、日期边界、未知报名状态、组合筛选、来源安全、双语完整性检查通过。当前缺少托管预览要求的cua_repl.js工具，未做真实浏览器视觉与交互验收。
收藏只存当前浏览器，不跨电脑或队友同步。分享链接指向公开条目或筛选，分享索引时不会携带本地收藏过滤。
