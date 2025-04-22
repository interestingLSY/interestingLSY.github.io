interface Publication {
	title: string;
	authors: string;
	time: string;
	img_path: string;
	description: string;
	submit_status: string;
	link: string;
}

const publications: Publication[] = [
	{
		title: "A Deep-Dive Into the New Flash MLA Kernel",
		authors: "Jiashi Li, <b>Shengyu Liu</b>",
		time: "2025.4",
		img_path: "/publications/FlashMLA.png",
		description: "We present a new design and implementation of the Flash MLA kernel, which delivers 5% ~ 15% performance improvement on compute-bound workloads, achieving up to 660 TFlops on NVIDIA H800 SXM5 GPUs.",
		submit_status: "On GitHub",
		link: "https://github.com/deepseek-ai/FlashMLA/blob/a9444cd67d7dbbd5b1a5dc083657a155b88271b2/docs/20250422-new-kernel-deep-dive.md"
	},
	{
		title: "LoongServe: Efficiently Serving Long-context Large Language Models with Elastic Sequence Parallelism",
		authors: "Bingyang Wu, <b>Shengyu Liu</b>, Yinmin Zhong, Peng Sun, Xuanzhe Liu, Xin Jin",
		time: "2024.4",
		img_path: "/publications/LoongServe.png",
		description: "We propose a new parallelism paradigm, elastic sequence parallelism (ESP), to elastically adapt to the variance between different requests and phases during large language model (LLM) serving. We also design and build an inference system, LoongServe, based on that idea.",
		submit_status: "In SOSP'24",
		link: "https://arxiv.org/abs/2404.09526"
	},
	{
		title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving",
		authors: "Yinmin Zhong, <b>Shengyu Liu</b>, Junda Chen, Yibo Zhu, Xuanzhe Liu, Xin Jin, Hao Zhang",
		time: "2023.12",
		img_path: "/publications/DistServe.png",
		description: "We propose DistServe, a novel large language model serving system that disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs).",
		submit_status: "In OSDI'24",
		link: "https://arxiv.org/abs/2401.09670"
	},
	{
		title: "A Multi-Level Superoptimizer for Tensor Programs",
		authors: "Mengdi Wu, Xinhao Cheng, <b>Shengyu Liu</b>, Chunan Shi, Jianan Ji, Kit Ao, Praveen Velliengiri, Xupeng Miao, Oded Padon, Zhihao Jia",
		time: "2024.12",
		img_path: "/publications/Mirage.png",
		description: "Mirage is a machine learning compiler that automatically generates fast GPU kernels without programming in Triton/CUDA.",
		submit_status: "In submission",
		link: "https://arxiv.org/abs/2405.05751"
	},
	{
		title: "RLHFuse: Efficient RLHF Training for Large Language Models with Inter- and Intra-Stage Fusion",
		authors: "Yinmin Zhong*, Zili Zhang*, Bingyang Wu*, <b>Shengyu Liu</b>, Yukun Chen, Changyi Wan, Hanpeng Hu, Lei Xia, Ranchen Ming, Yibo Zhu, Xin Jin",
		time: "2024.9",
		img_path: "/publications/RLHFuse.png",
		description: "RLHFuse breaks the traditional view of Reinforcement Learning from Human Feedback (RLHF) workflow as a composition of individual tasks, splitting each task into finer-grained subtasks, and performing stage fusion to improve GPU utilization.",
		submit_status: "In NSDI'25",
		link: "https://arxiv.org/abs/2409.13221"
	},
	{
		title: "Fast Distributed Inference Serving for Large Language Models",
		authors: "Bingyang Wu*, Yinmin Zhong*, Zili Zhang*, <b>Shengyu Liu</b>, Fangyue Liu, Yuanhang Sun, Xuanzhe Liu, Xin Jin",
		time: "2023.9",
		img_path: "/publications/FastServe.png",
		description: "We propose FastServe, a distributed inference serving system for LLMs that exploits the autoregressive pattern of LLM inference to enable preemption at token-level granularity.",
		submit_status: "In submission",
		link: "https://arxiv.org/abs/2305.05920"
	}
]

export {publications, type Publication}
