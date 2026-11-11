# 项目接力说明

更新：2026-11-11。用户已完成需求讨论并明确授权“先给我一个初版”。此前“不要提前实现”的阶段限制已由本次请求取代。

仓库：lucidlynx5/personal-ai-learning，main。
网站：https://lucidlynx5.github.io/personal-ai-learning/ ，继续沿用既有GitHub Pages，不创建新Sites站点。
云端工作区：/workspace/personal-ai-learning；不要假定后续会话仍保留该目录，可从GitHub恢复。

## 用户需求

中国和国际竞赛；用户是刚起步的职业景观设计师。项目征集/概念竞赛/设计奖项都收，分类浏览。
资格门槛不作为收集排除项，用filter分开；中英文模式；黑白主色、绿色仅作accent，简洁可读、有设计感。
无手动录入。每两天自动更新一次（已澄清不是每天，也不是滚动两天展示），重视广度和质量，替代逐个网站查找。
本人浏览并分享给队友；沿用公开网站URL。

## 已实现

FIELDNOTES初版：分类/地区/资格/费用/状态/官方核对筛选，搜索与排序，双语界面与内容，本地收藏，详情和筛选分享链接。
真实首批10条（含1归档）；媒体、部分核对、官方核对分别标明；不冒充全部已官方验证。
每条来源/核查时间，报名与提交分开，未知费用不推断免费，日期级截止不假定00:00。
ChatGPT自动任务“更新景观竞赛网站”已安排每两天运行，首个计划2026-11-13 08:00（Asia/Shanghai，灵活调度）。
操作与数据协议见 docs/UPDATE_PROTOCOL.md。后续任务只更新data/competitions.json，不重做UI。

## 维护与未验证项

运行 node scripts/validate-data.mjs、node scripts/check.mjs、node --check app.js。
当前托管预览缺少cua_repl.js控制工具，未完成真实浏览器视觉及交互验收；不要声称已做浏览器测试。
自动任务首个无人值守执行尚未到时，不能声称已验证运行成功。定时器启用≠已成功更新。
首批样本有限，来源目录有待核查渠道，后续扩展覆盖并持续核对。
本地gh auth中的GH_TOKEN无效；GitHub插件可读写，环境代理的普通git也能读取。不要索取用户token，不回显凭据。
