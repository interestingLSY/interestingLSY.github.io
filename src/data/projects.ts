import type { LocaleText } from '@/types/i18n'

interface Project {
	name: LocaleText;
	description: LocaleText;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: {
			en: "Flash MLA (2025.04.22 Performance Update)",
			zh: "Flash MLA（2025.04.22 性能更新）"
		},
		description: {
			en: "Efficient MLA decoding kernels.",
			zh: "高效的 MLA 解码算子。"
		},
		time: "2025.04",
		link: "https://github.com/deepseek-ai/FlashMLA"
	},
	{
		name: {
			en: "LoongServe",
			zh: "LoongServe"
		},
		description: {
			en: "Efficiently serving long-context large language models with elastic sequence parallelism. <br />Paper in SOSP.",
			zh: "利用弹性序列并行高效地服务长上下文大语言模型。<br />论文发表于 SOSP。"
		},
		time: "2024.05",
		link: "https://github.com/LoongServe/LoongServe"
	},
	{
		name: {
			en: "SwiftLLM",
			zh: "SwiftLLM"
		},
		description: {
			en: "A tiny yet powerful LLM inference system tailored for researching purpose. vLLM-equivalent performance with only 2k lines of code (2% of vLLM).",
			zh: "一个小巧而强大的 LLM 推理系统，专为研究目的设计。性能媲美 vLLM，仅需约 2000 行代码（vLLM 代码量的 2%）。"
		},
		time: "2024.05",
		link: "https://github.com/interestingLSY/swiftLLM"
	},
	{
		name: {
			en: "Tiny SYSY Compiler",
			zh: "Tiny SYSY 编译器"
		},
		description: {
			en: "A compiler for the SYSY language (a subset of C). My homework for the course \"compiler principles\". Got the first place in the performance benchmark.",
			zh: "SYSY 语言（C 语言子集）编译器，编译器原理课程作业，在性能基准测试中获得第一名。"
		},
		time: "2024.04",
		link: "https://github.com/interestingLSY/sysy-compiler"
	},
	{
		name: {
			en: "NeuroFrame",
			zh: "NeuroFrame"
		},
		description: {
			en: "A DNN training framework written in C++/CUDA. Can train Resnet 150 with 95% of PyTorch's performance. My homework for the course \"programming in AI\".",
			zh: "用 C++/CUDA 编写的 DNN 训练框架，可训练 ResNet 150，性能达到 PyTorch 的 95%，“人工智能中的编程”课程作业。"
		},
		time: "2024.01",
		link: "https://github.com/interestingLSY/NeuroFrame"
	},
	{
		name: {
			en: "DistServe",
			zh: "DistServe"
		},
		description: {
			en: "Disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs) for LLM serving. <br /><b>5000+</b> lines of Python. <br />Paper in OSDI.",
			zh: "解耦大语言模型推理的预填充（Prefill）和解码（Decoding）阶段，在特定延迟约束（SLO）下优化 LLM 推理的有效吞吐量。<br /><b>5000+</b> 行 Python。<br />论文发表于 OSDI。"
		},
		time: "2023.12",
		link: "https://github.com/LLMServe/DistServe"
	},
	{
		name: {
			en: "SwiftTransformer",
			zh: "SwiftTransformer"
		},
		description: {
			en: "A tiny yet powerful and flexible implementation of the transformer neural network.<br /><b>10000+</b> lines of C++/CUDA.",
			zh: "一个小巧而强大的 Transformer 神经网络实现。<br /><b>10000+</b> 行 C++/CUDA。"
		},
		time: "2023.9",
		link: "https://github.com/LLMServe/SwiftTransformer"
	},
	{
		name: {
			en: "IntPool",
			zh: "IntPool"
		},
		description: {
			en: "A cryptocurrency mining pool written in Nodejs.",
			zh: "用 Node.js 编写的加密货币矿池。"
		},
		time: "2021.7",
		link: "https://github.com/interestingLSY/IntPool"
	}
]

export {projects, type Project}
