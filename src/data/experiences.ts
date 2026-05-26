import type { LocaleText } from '@/types/i18n'

interface Experience {
	title: LocaleText;
	time: LocaleText;
	img_path: string;
	description: LocaleText;
	link: LocaleText;
}

const experiences: Experience[] = [
    {
		title: {
			en: "DeepSeek-AI",
			zh: "深度求索（DeepSeek-AI）"
		},
		time: {
			en: "2025.4 - current",
			zh: "2025.4 - 至今"
		},
		img_path: "/experiences/deepseek.png",
		description: {
			en: `Working on <b>Machine Learning Systems (MLSys)</b> and <b>kernel design & optimization</b> at <a href="https://www.deepseek.com/">DeepSeek-AI</a> in Hangzhou, Zhejiang, China.`,
			zh: `在 <a href="https://www.deepseek.com/">DeepSeek-AI</a> 负责<b>机器学习系统（MLSys）</b>及<b>算子（Kernel）设计与优化</b>。<br />`
		},
		link: {
			en: "https://www.deepseek.com/en/",
			zh: "https://www.deepseek.com/"
		}
	},
	{
		title: {
			en: "Peking University (PKU)",
			zh: "北京大学"
		},
		time: {
			en: "2021.9 - 2025.7",
			zh: "2021.9 - 2025.7"
		},
		img_path: "/experiences/pku.png",
		description: {
			en: `
            I was a student in the <a href="https://cfcs.pku.edu.cn/english/research/turing_program/introduction1/index.htm">Turing Class</a> at <a href="https://eecs.pku.edu.cn/en/">the School of EECS</a>, <a href="https://english.pku.edu.cn/"><b>Peking University (PKU)</b></a>, enrolled since September 2021. <br />
            Under the advisement of Prof. <a href="https://xinjin.github.io/index.html">Xin Jin</a>, my research focuses on <b>Machine Learning Systems (MLSys)</b>, <b>Machine Learning Compilers</b>, and <b>Distributed Systems</b>. <br />
            I was also the <b>team leader</b> of the <a href="https://hpc.pku.edu.cn/pkusc/en/">Peking University Supercomputing Team</a>, and we won the <b>First Place</b> at the 10th ASC and the <b>Second Place</b> at SC23 (both are top-tier Supercomputing competitions in the world).`,
			zh: `
            我曾是 2021 级<a href="https://eecs.pku.edu.cn/">北京大学信息科学技术学院</a>的<a href="https://cfcs.pku.edu.cn/english/research/turing_program/introduction1/index.htm">图灵班</a>的学生。<br />
            我的导师是<a href="https://xinjin.github.io/index.html">金鑫</a>副教授，我的研究方向是<b>机器学习系统（MLSys）</b>、<b>机器学习编译器</b>和<b>分布式系统</b>。<br />
            我曾作为<a href="https://hpc.pku.edu.cn/pkusc/zh-cn/">北京大学超算队</a>的<b>队长</b>，带队获得第十届 ASC <b>第一名</b>和 SC23 的<b>第二名</b>（均为世界顶级超算竞赛）。`
		},
		link: {
			en: "https://english.pku.edu.cn/",
			zh: "https://www.pku.edu.cn/"
		}
	}
]

export {experiences, type Experience}
