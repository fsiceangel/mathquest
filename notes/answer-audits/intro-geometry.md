# Geometry 独立答案审计（答案覆盖完成）

2026-09-30 更新。本轮对象为 1,248 母题、3,744 变式、90 checkpoint，共 **5,082 项**。这不是此前 difficulty/stem review 的改名；每项通过需要独立数学推导和答案键匹配。

运行 `node scripts/audit/answers/geometry.mjs` 重建 `intro-geometry-ledger.jsonl`。每项有稳定 ID、完整 64 位 SHA-256 sourceDigest、status、method、computed/evidence、keyMatch、uniqueChoice、conditions、limitations。digest 覆盖完整题目对象，排除运行时 calibration/variants。人工审阅后的来源固定在 `intro-geometry-reviewed-digests.json`；内容改变则现有证明失效，回到 needs-review。`--record-new-digests` 只为新审阅项登记，不覆盖旧 digest。

**verified 的范围是独立求解与正确键/唯一选项匹配**。它不表示全部备用解释已逐句验证或每张图已渲染；这些限制逐项记录。needs-review 表示尚无本轮足够独立证据，不能计作通过；confirmed-error 表示计算或唯一性检查失败，应先区分真错与不支持的答案记号再修复。

## 目前覆盖

**5,082 / 5,082 verified，0 confirmed-error，0 needs-review。** 包含所有 19 章的 4 轮题目及 90 道 checkpoint。此前难度审阅记录没有充当答案正确性证据；本轮新增 3,178 项独立证明。

| 章 | 已核对 | 独立依据 |
|---|---:|---|
| 1 | 208/208 | 定义、命题反例、计数、坐标 |
| 2 | 368/368 | 角和、平行线、时钟、折线方向 |
| 3 | 288/288 | 全等对应、SSS/SAS/ASA/AAS/HL、SSA 高度条件、等腰角追踪；直接读取有关图的刻痕与角标 |
| 4 | 208/208 | 面积、周长、整数边长极值 |
| 5 | 288/288 | 相似比例、面积平方缩放、SSS 比例、严格三角不等式 |
| 6 | 288/288 | 勾股、特殊三角形、勾股数组全选项检验、Heron、正根 |
| 7 | 328/328 | 中线、角平分线、三心、内切/外接圆；周长面积可实现性 |
| 8 | 408/408 | 四边形定义与反例、对角线、角和、一般梯形偏移量方程、面积；包含型梯形定义 |
| 9 | 248/248 | 多边形角和、对角线、正多边形 |
| 10 | 208/208 | 三角不等式、最短距离、边角序 |
| 11 | 208/208 | 圆周、面积、扇形、圆环、弧长 |
| 12 | 248/248 | 圆周角、圆心角、切线、内外交角 |
| 13 | 168/168 | 点幂、正根、弦位置可实现性 |
| 14 | 248/248 | 体积、表面积、空间关系、截面 |
| 15 | 248/248 | 圆柱/锥/球、缩放、材料守恒 |
| 16 | 288/288 | 独立坐标变换、数对选项唯一性、反射最短路径、缩放 |
| 17 | 328/328 | 斜率、垂直平分线、圆方程、行列式面积、直线距离、联立方程 |
| 18 | 208/208 | 三角比、单位圆、正余弦定理、面积 |
| 19 | 208/208 | 辅助线、角追踪、切线、梯形、代数、证明逻辑 |
| Checkpoint 1–6 | 90/90 | 独立重算；包含两类等腰三角形切法 × 9 种等角关系穷举、格点、展开最短路等 |

以脚本即时输出与账本为准。数值期望由题干参数和明确公式产生，未从 solution 抽取数字。人工概念选项和书面答案由具体证明逐项核对并绑定 digest；数值与坐标题比较全部选项，检测等价重复答案。账本的“verified”不宣称所有长篇备用解析逐句无误，也不宣称全部 SVG 已渲染检查。

## 本次续审修复清单

ID 末尾为轮次，`1` 为母题。

| ID / 范围 | 文件 | 修复理由 |
|---|---|---|
| `3/3.2/8/4` | `src/data/variants/intro-geometry/ch03-s1.js` | 原角自身作为干扰项也相等；明确问另一三角形 STU 中的角 |
| `3/3.5/1/2` | `src/data/variants/intro-geometry/ch03-s4.js` | SSA 并非一概不能唯一；改为 not always / sometimes |
| `3/3.5/2/4` | 同上 | “增加相等面积”也能消除 SSA 二解，原来有两个正确修复；更换干扰项并改正解析 |
| `3/3.5/4/1` | `src/data/intro-geometry/ch03.js` | HL 并非唯一能确定三角形的 SSA 情形；修正措辞 |
| `5/5.1/1/2` | `src/data/variants/intro-geometry/ch05-s1.js` | 三角形对应角成比例必因角和相等而相等，旧干扰项也是相似充要条件；更换 |
| `6/6.3/9/3` | `src/data/variants/intro-geometry/ch06-s3.js` | 32–60–68 可由两个选项同比放大；明确问 primitive triple |
| `7/worksheet/3/1` | `src/data/intro-geometry/ch07.js` | 周长 28 面积 42 超过最大可实现面积；改周长 36 面积 54，内切半径仍为 3，9–12–15 作存在见证 |
| `8/8.5/2/1` | `src/data/intro-geometry/ch08.js` | “其余三个角之和 270”也真；改干扰项为可任意取和为 270 的角 |
| `8/8.6/6/4` | `src/data/variants/intro-geometry/ch08-s6.js` | 问题称列出全部类别，选项却只列 rhombus/rectangle；改问分类陈述 |
| `8/8.7/9/1–4`, `8/8.7/10/1–4` | `src/data/intro-geometry/ch08.js`, `src/data/variants/intro-geometry/ch08-s7.js` | 已明确排除正方形，正确选项收紧为 not a square |
| `17/challenge/8/1` | `src/data/intro-geometry/ch17.js` | 长度本应为绝对值 a，补 a、c 为正条件 |
| `19/19.1/5/3` | `src/data/variants/intro-geometry/ch19-s1.js` | 补凸性，排除三角形面积相减的另一构型 |
| `19/challenge/7/1–3` | `src/data/intro-geometry/ch19.js`, `src/data/variants/intro-geometry/ch19-s4.js` | L 形凹角为 270，不能“所有内角直角”；改相邻边垂直 |
| `checkpoint/5/1` | `src/data/checkpoints/intro-geometry/cp5.js` | 单峰帐篷未必有锥体体积；明确 prism / pyramid |
| `checkpoint/6/6` | `src/data/checkpoints/intro-geometry/cp6.js` | 凹六边形不能每个内角为直角；改相邻边垂直 |

以下为本轮续审开始前已有审计修复，保留原说明：

第 4 章凹多边形的“每个角都是直角”改成相邻边互相垂直（凹角可为 270°）；第 14 章 20 项斜高/表面积题明确棱锥顶点在底面中心正上方，6 项立体命名题明确凸性；第 13 章一题把池塘平面外的杆顶改成杆底，满足共面条件。

已修图形：2.4 第 6 题第三轮把 52° 的角标画在 128° 对应角上，已改为相邻补角的两条射线；第三、四轮说明一并消除方位错误。第 2 章两道 worksheet 补足 O 在两端点之间，另改正一处折线开口方向文字。

已修条件：第 1 章有限测试题补明全称范围，偶数等价命题限定 whole number；第 15 章 37 道题补足无溢出、融化不改变体积、量纲使用一致单位、标签覆盖侧面、滚筒一整周、空心球内径等必要解释。均保留稳定 ID 与原答案位置。

## 课本目录对应

来源为用户本地 `E:/baiduyun/ebooks/ebookforclemie/textbook/l1/[Art of Problem Solving] Richard Rusczyk - Introduction to Geometry (2007, AoPS) - libgen.li.pdf`，目录位于 PDF 第 2 页；本轮重新查看已有渲染图 `tmp/pdfs/geometry-reference-2.png`。以下为**目录结构对应**，不是对教材正文逐页或原题逐题核对。

| 课本章 | 项目对应小节 | 未单独实现的教材编号 |
|---|---|---|
| 1 What's in a Name? | 1.2, 1.3, 1.5 | 1.1 名称/符号导言；1.4 复制线段作图；1.6 总结 |
| 2 Angles | 2.1–2.7 | 2.8 总结 |
| 3 Congruent Triangles | 3.2–3.6 | 3.1 导言；3.7 等边三角形/垂直平分线作图；3.8 总结 |
| 4 Perimeter and Area | 4.1–4.3 | 4.4 总结 |
| 5 Similar Triangles | 5.1–5.5 | 5.6 角/平行线作图；5.7 总结 |
| 6 Right Triangles | 6.1–6.5 | 6.6 垂线作图；6.7 总结 |
| 7 Special Parts of a Triangle | 7.1–7.6 | 7.7 平分线作图；7.8 总结 |
| 8 Quadrilaterals | 8.1–8.8 | 8.9 总结 |
| 9 Polygons | 9.1–9.4 | 9.5 正多边形作图；9.6 总结 |
| 10 Geometric Inequalities | 10.1–10.3 | 10.4 总结 |
| 11 Circles | 11.1–11.3 | 11.4 总结 |
| 12 Circles and Angles | 12.1–12.4 | 12.5 切线作图；12.6 总结 |
| 13 Power of a Point | 13.1–13.2 | 13.3 总结 |
| 14 Three-Dimensional Geometry | 14.1–14.4 | 14.5 总结 |
| 15 Curved Surfaces | 15.1–15.4 | 15.5 总结 |
| 16 The More Things Change… | 16.1–16.5 | 16.6 变换作图；16.7 总结 |
| 17 Analytic Geometry | 17.1–17.6 | 17.7 总结 |
| 18 Introduction to Trigonometry | 18.1–18.3 | 18.4 总结 |
| 19 Problem Solving Strategies in Geometry | 19.1–19.3 | 19.4 总结 |

项目的 challenge、worksheet 和 checkpoint 是原创题组，不能一一映射为教材 Review Problems/Challenge Problems 的题号。上表缺节表示没有独立同编号课程，不能推断相关概念完全没有在其他题解出现。目录核对只支持“跟随章节主题”，不支持“教材习题完整数字化”或“所有构造课均已覆盖”。

本轮答案修复后的难度复核：用当前 inventory 的 SHA256 前16位与既有 difficulty source-snapshot 比较，几何共125题变化；逐题重读题干、选项/书面答案及当前有效评级后，125题均可保留，需调整 level 0题、scope 0题。补充凸性、正数、点序、顶点居中、不溢出等条件只是使原有解法成立；修正SSA/分类选项、凹图形措辞及不可实现的周长面积没有引入新的先修或求解步骤。修复后的内切圆题仍是半周长加一次除法，直棱锥题仍按半底边的直角三角形求解，排水题仍是体积守恒。原有 bridge/extension 分流保留。每题ID、当前摘要、评级及具体理由保存在 [intro-geometry-calibration-delta.json](intro-geometry-calibration-delta.json)；这是编辑性推理负担复核，不是学生实测难度。snapshot由根审计统一更新，本复核未改评级表。
