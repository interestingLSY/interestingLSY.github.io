interface Experience {
	title: string;
	time: string;
	img_path: string;
	description: string;
	link: string;
}

const experiences: Experience[] = [
    {
		title: "DeepSeek-AI",
		time: "2025.4 - current",
		img_path: "/experiences/deepseek.png",
		description: `Working on <b>Machine Learning Systems (MLSys)</b> and <b>kernel design & optimization</b> at <a href="https://www.deepseek.com/">DeepSeek-AI</a> in Hangzhou, Zhejiang, China.`,
		link: "https://www.deepseek.com/"
	},
	{
		title: "Peking University (PKU)",
		time: "2021.9 - 2025.7",
		img_path: "/experiences/pku.png",
		description: `
            I was a student in the <a href="https://cfcs.pku.edu.cn/english/research/turing_program/introduction1/index.htm">Turing Class</a> at <a href="https://eecs.pku.edu.cn/en/">the School of EECS</a>, <a href="https://english.pku.edu.cn/"><b>Peking University (PKU)</b></a>, enrolled since September 2021. <br />
            Under the advisement of Prof. <a href="https://xinjin.github.io/index.html">Xin Jin</a>, my research focuses on <b>Machine Learning Systems (MLSys)</b>, <b>Machine Learning Compilers</b>, and <b>Distributed Systems</b>. <br />
            I was also the <b>team leader</b> of the Peking University Supercomputing Team, and we won the <b>First Place</b> at the 10th ASC and the <b>Second Place</b> at SC23 (both are top-tier Supercomputing competitions in the world).`,
		link: "https://english.pku.edu.cn/"
	}
]

export {experiences, type Experience}
