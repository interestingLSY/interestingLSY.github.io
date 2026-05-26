import type { LocaleText } from '@/types/i18n'

interface Award {
	year: number;
	name: LocaleText;
	description: LocaleText;
}

const awards: Award[] = [
	{
		year: 2024,
		name: {
			en: "Peking University Person of the Year (Nomination)",
			zh: "北京大学年度人物（提名）"
		},
		description: { en: "", zh: "" }
	},
	{
		year: 2024,
		name: {
			en: "National Scholarship <span style='font-size: 10px; color: #444'>(2024)</span>",
			zh: "国家奖学金 <span style='font-size: 10px; color: #444'>(2024)</span>"
		},
		description: {
			en: "<b>Highest Honor</b> for undergraduates in China. <b>Top 1%</b> in Peking University.",
			zh: "中国大学本科生的<b>最高荣誉</b>，北京大学<b>前 1%</b>。"
		}
	},
	{
		year: 2024,
		name: {
			en: "CCF Elite Collegiate Award",
			zh: "CCF 优秀大学生奖"
		},
		description: {
			en: "<b>Only 2 award winners each year</b> at Peking University.",
			zh: "北京大学每年<b>仅 2 人获奖</b>。"
		}
	},
	{
		year: 2024,
		name: {
			en: "SenseTime Scholarship",
			zh: "商汤奖学金"
		},
		description: {
			en: "<b>20 students per year across China</b>. SenseTime is a famous AI software provider in China.",
			zh: "全国每年<b>仅 20 人获奖</b>。商汤科技是中国知名 AI 企业。"
		}
	},
	{
		year: 2024,
		name: {
			en: "Champion at the 11th ASC Student Supercomputer Challenge",
			zh: "第 11 届 ASC 世界大学生超级计算机竞赛冠军"
		},
		description: {
			en: "As an assistant team member. ASC is The largest student supercomputer competition in the world.",
			zh: "作为团队成员参赛。ASC 是全球最大规模的大学生超算竞赛。"
		}
	},
	{
		year: 2023,
		name: {
			en: "Merit Student of Beijing",
			zh: "北京市三好学生"
		},
		description: { en: "", zh: "" }
	},
	{
		year: 2023,
		name: {
			en: "Second Place at the SC23 Student Cluster Competition",
			zh: "SC23 全球大学生超算竞赛亚军"
		},
		description: {
			en: "As the <b>team leader</b>. SC (SuperComputing) is a world-famous conference for high-performance computing.",
			zh: "作为<b>队长</b>参赛。SC 是全球知名的高性能计算会议。"
		}
	},
	{
		year: 2023,
		name: {
			en: "The Highest Linpack Benchmark (HPL) Award at the SC23 Student Cluster Competition",
			zh: "SC23 最高 Linpack 基准测试奖 (HPL)"
		},
		description: { en: "", zh: "" }
	},
	{
		year: 2023,
		name: {
			en: "Community Impact Award at the SC23 Student Cluster Competition",
			zh: "SC23 社区影响力奖"
		},
		description: {
			en: "For contribution to the open-source community, including contribution to the MLPerf project and the Zaychik Server project.",
			zh: "对开源社区的贡献，包括对 MLPerf 项目和 Zaychik Server 项目的贡献。"
		}
	},
	{
		year: 2023,
		name: {
			en: "National Scholarship <span style='font-size: 10px; color: #444'>(2023)</span>",
			zh: "国家奖学金 <span style='font-size: 10px; color: #444'>(2023)</span>"
		},
		description: {
			en: "<b>Highest Honor</b> for undergraduates in China. <b>Top 1%</b> in Peking University.",
			zh: "中国本科生的<b>最高荣誉</b>，北京大学<b>前 1%</b>。"
		}
	},
	{
		year: 2023,
		name: {
			en: "Pacemaker Award for Merit Student",
			zh: "三好学生标兵"
		},
		description: {
			en: "<b>Top 1%</b> in Peking University",
			zh: "北京大学<b>前 1%</b>"
		}
	},
	{
		year: 2023,
		name: {
			en: "Champion at the 10th ASC Student Supercomputer Challenge",
			zh: "第 10 届 ASC 世界大学生超级计算机竞赛冠军"
		},
		description: {
			en: "As the <b>team leader</b>. ASC is the largest student supercomputer competition in the world.",
			zh: "作为<b>队长</b>参赛。ASC 是全球最大规模的大学生超算竞赛。"
		}
	},
	{
		year: 2022,
		name: {
			en: "John Hopcroft Scholarship of Peking University",
			zh: "北京大学 John Hopcroft 奖学金"
		},
		description: { en: "", zh: "" }
	},
	{
		year: 2022,
		name: {
			en: "Academic Excellence Award",
			zh: "学术优秀奖"
		},
		description: { en: "", zh: "" }
	},
];

export {awards, type Award}
