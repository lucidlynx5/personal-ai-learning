# 项目接力说明

更新：2026-11-11。
仓库：lucidlynx5/personal-ai-learning，main。
网站：https://lucidlynx5.github.io/personal-ai-learning/ ，沿用GitHub Pages。
工作区：/workspace/personal-ai-learning；后续若目录不存在可从GitHub恢复。

## 当前用户要求

网站名 **LA News**，已取代FIELDNOTES。黑白主色、少量绿色accent。用户不喜欢任何branding/宣传/受众/效率文案；页面只呈现索引，不恢复hero、插图、宣传页脚或关于段落。
顶部明确展示“中文 / English”。国内国际都收，职业景观设计师团队；项目征集、概念竞赛、设计奖项分类，资质仅筛选、不排除。
无手动录入，每两天自动更新；重视广度、质量和政府/公共业主项目发布，目标至少30条未过当前提交截止的相关机会。

## 本轮结果

初版9条未截止已扩至35条（共36条含1归档）：21开放、1待开报、7报名结束仍可提交、6报名/文件获取状态待核实。
来源44渠道，四组：政府/公共业主、专业协会、专业媒体、赛事官网。
实际官方核对、部分核对、转载待复核分别显示；仅检索摘要的条目单独注明。不得把35条宣传为全部开放或全部已官方核验。
媒体和政府门户拓展/受阻证据见 docs/SOURCE_COVERAGE.md。

## 维护

ChatGPT任务已改名“更新 LA News 竞赛索引”，保留每两天一次调度，首个计划2026-11-13 08:00 Asia/Shanghai（灵活调度）。
任务提示已同步本轮广度、政府来源、数量和准确性要求。首次自动执行尚待验证。数据/自动化规范见 docs/UPDATE_PROTOCOL.md。
不要另建Sites站点，不改访问权限，不增加重复定时任务。后续自动任务仅更新data/competitions.json。

检查：node scripts/validate-data.mjs；node scripts/check.mjs；node --check app.js；git diff --check。
本环境缺cua_repl.js工具，尚未完成真实浏览器视觉及交互验收；不能声称已做浏览器测试。
GitHub插件可用，普通git经环境代理也能读写；gh auth中GH_TOKEN不可用，不索取用户token。
