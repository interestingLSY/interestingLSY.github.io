import type { LocaleText } from '@/types/i18n'

interface Publication {
	title: string;
	authors: string;
	time: string;
	img_path: string;
	description: LocaleText;
	submit_status: LocaleText;
	link: string;
}

const publications: Publication[] = [
	{
		title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models",
		authors: "DeepSeek AI",
		time: "2025.12",
		img_path: "/publications/FlashMLA.png",
		description: {
			en: "We introduce DeepSeek-V3.2, a model that harmonizes high computational efficiency with superior reasoning and agent performance.",
			zh: "我们提出 DeepSeek-V3.2，一个兼具高计算效率、卓越的推理能力、以及智能体性能的模型。"
		},
		submit_status: {
			en: "On arXiv",
			zh: "发表于 arXiv"
		},
		link: "https://arxiv.org/abs/2512.02556"
	},
	{
		title: "A Deep Dive Into The Flash MLA FP8 Decoding Kernel on Hopper",
		authors: "",
		time: "2025.10",
		img_path: "/publications/FlashMLA.png",
		description: {
			en: "In this blog, we share the story behind our new FP8 sparse decoding kernel for Hopper GPUs.",
			zh: "本文分享了我们为 Hopper GPU 开发的新型 FP8 稀疏解码算子背后的原理与故事。"
		},
		submit_status: {
			en: "On GitHub",
			zh: "发布于 GitHub"
		},
		link: "https://github.com/deepseek-ai/FlashMLA/blob/1408756a88e52a25196b759eaf8db89d2b51b5a1/docs/20250929-hopper-fp8-sparse-deep-dive.md"
	},
	{
		title: "A Deep-Dive Into the New Flash MLA Kernel",
		authors: "Jiashi Li, <b>Shengyu Liu</b>",
		time: "2025.4",
		img_path: "/publications/FlashMLA.png",
		description: {
			en: "We present a new design and implementation of the Flash MLA kernel, which delivers 5% ~ 15% performance improvement on compute-bound workloads, achieving up to 660 TFlops on NVIDIA H800 SXM5 GPUs.",
			zh: "我们提出了一种新的 Flash MLA 算子的设计与实现，在计算密集型任务上可获得 5%~15% 的性能提升，在 NVIDIA H800 SXM5 GPU 上最高可达 660 TFlops。"
		},
		submit_status: {
			en: "On GitHub",
			zh: "发布于 GitHub"
		},
		link: "https://github.com/deepseek-ai/FlashMLA/blob/a9444cd67d7dbbd5b1a5dc083657a155b88271b2/docs/20250422-new-kernel-deep-dive.md"
	},
	{
		title: "LoongServe: Efficiently Serving Long-context Large Language Models with Elastic Sequence Parallelism",
		authors: "Bingyang Wu, <b>Shengyu Liu</b>, Yinmin Zhong, Peng Sun, Xuanzhe Liu, Xin Jin",
		time: "2024.4",
		img_path: "/publications/LoongServe.png",
		description: {
			en: "We propose a new parallelism paradigm, elastic sequence parallelism (ESP), to elastically adapt to the variance between different requests and phases during large language model (LLM) serving. We also design and build an inference system, LoongServe, based on that idea.",
			zh: "我们提出了一种新的并行范式——弹性序列并行（ESP），以弹性适应 LLM 推理中不同请求和阶段之间的差异，并基于此思想设计并构建了推理系统 LoongServe。"
		},
		submit_status: {
			en: "In SOSP'24",
			zh: "发表于 SOSP'24"
		},
		link: "https://arxiv.org/abs/2404.09526"
	},
	{
		title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving",
		authors: "Yinmin Zhong, <b>Shengyu Liu</b>, Junda Chen, Yibo Zhu, Xuanzhe Liu, Xin Jin, Hao Zhang",
		time: "2023.12",
		img_path: "/publications/DistServe.png",
		description: {
			en: "We propose DistServe, a novel large language model serving system that disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs).",
			zh: "我们提出 DistServe，一种新型 LLM 推理系统，通过解耦预填充和解码阶段，以优化在特定延迟约束（SLO）下的有效吞吐量。"
		},
		submit_status: {
			en: "In OSDI'24",
			zh: "发表于 OSDI'24"
		},
		link: "https://arxiv.org/abs/2401.09670"
	},
	{
		title: "A Multi-Level Superoptimizer for Tensor Programs",
		authors: "Mengdi Wu, Xinhao Cheng, <b>Shengyu Liu</b>, Chunan Shi, Jianan Ji, Kit Ao, Praveen Velliengiri, Xupeng Miao, Oded Padon, Zhihao Jia",
		time: "2024.12",
		img_path: "/publications/Mirage.png",
		description: {
			en: "Mirage is a machine learning compiler that automatically generates fast GPU kernels without programming in Triton/CUDA.",
			zh: "Mirage 是一个机器学习编译器，可以自动生成高性能 GPU 算子，无需 Triton/CUDA 编程。"
		},
		submit_status: {
			en: "In submission",
			zh: "投稿中"
		},
		link: "https://arxiv.org/abs/2405.05751"
	},
	{
		title: "RLHFuse: Efficient RLHF Training for Large Language Models with Inter- and Intra-Stage Fusion",
		authors: "Yinmin Zhong*, Zili Zhang*, Bingyang Wu*, <b>Shengyu Liu</b>, Yukun Chen, Changyi Wan, Hanpeng Hu, Lei Xia, Ranchen Ming, Yibo Zhu, Xin Jin",
		time: "2024.9",
		img_path: "/publications/RLHFuse.png",
		description: {
			en: "RLHFuse breaks the traditional view of Reinforcement Learning from Human Feedback (RLHF) workflow as a composition of individual tasks, splitting each task into finer-grained subtasks, and performing stage fusion to improve GPU utilization.",
			zh: "RLHFuse 打破了将 RLHF 流程视为独立任务组合的传统视角，将每个任务拆分为更细粒度的子任务，并通过阶段融合提升 GPU 利用率。"
		},
		submit_status: {
			en: "In NSDI'25",
			zh: "发表于 NSDI'25"
		},
		link: "https://arxiv.org/abs/2409.13221"
	},
	{
		title: "Fast Distributed Inference Serving for Large Language Models",
		authors: "Bingyang Wu*, Yinmin Zhong*, Zili Zhang*, <b>Shengyu Liu</b>, Fangyue Liu, Yuanhang Sun, Xuanzhe Liu, Xin Jin",
		time: "2023.9",
		img_path: "/publications/FastServe.png",
		description: {
			en: "We propose FastServe, a distributed inference serving system for LLMs that exploits the autoregressive pattern of LLM inference to enable preemption at token-level granularity.",
			zh: "我们提出 FastServe，一种分布式 LLM 推理系统，利用 LLM 推理的自回归特性实现 token 级别的抢占式调度。"
		},
		submit_status: {
			en: "In NSDI'26",
			zh: "发表于 NSDI'26"
		},
		link: "https://arxiv.org/abs/2305.05920"
	}
]

export {publications, type Publication}
