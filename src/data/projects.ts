interface Project {
	name: string;
	description: string;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "LoongServe",
		description: "Efficiently serving long-context large language models with elastic sequence parallelism. <br />Paper in SOSP.",
		time: "2024.05",
		link: "https://github.com/LoongServe/LoongServe"
	},
	{
		name: "SwiftLLM",
		description: "A tiny yet powerful LLM inference system tailored for researching purpose. vLLM-equivalent performance with only 2k lines of code (2% of vLLM).",
		time: "2024.05",
		link: "https://github.com/interestingLSY/swiftLLM"
	},
	{
		name: "Tiny SYSY Compiler",
		description: "A compiler for the SYSY language (a subset of C). My homework for the course \"compiler principles\". Got the first place in the performance benchmark.",
		time: "2024.04",
		link: "https://github.com/interestingLSY/sysy-compiler"
	},
	{
		name: "NeuroFrame",
		description: "A DNN training framework written in C++/CUDA. Can train Resnet 150 with 95% of PyTorch's performance. My homework for the course \"programming in AI\".",
		time: "2024.01",
		link: "https://github.com/interestingLSY/NeuroFrame"
	},
	{
		name: "DistServe",
		description: "Disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs) for LLM serving. <br /><b>5000+</b> lines of Python. <br />Paper in OSDI.",
		time: "2023.12",
		link: "https://github.com/LLMServe/DistServe"
	},
	{
		name: "SwiftTransformer",
		description: "A tiny yet powerful and flexible implementation of the transformer neural network.<br /><b>10000+</b> lines of C++/CUDA.",
		time: "2023.9",
		link: "https://github.com/LLMServe/SwiftTransformer"
	},
	{
		name: "IntPool",
		description: "A cryptocurrency mining pool written in Nodejs.",
		time: "2021.7",
		link: "https://github.com/interestingLSY/IntPool"
	}
]

export {projects, type Project}
