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
		title: "RLHFuse: Efficient RLHF Training for Large Language Models with Inter- and Intra-Stage Fusion",
		authors: "Yinmin Zhong*, Zili Zhang*, Bingyang Wu*, <b>Shengyu Liu</b>, Yukun Chen, Changyi Wan, Hanpeng Hu, Lei Xia, Ranchen Ming, Yibo Zhu, Xin Jin",
		time: "2024.9",
		img_path: "/publications/RLHFuse.png",
		description: "RLHFuse breaks the traditional view of Reinforcement Learning from Human Feedback (RLHF) workflow as a composition of individual tasks, splitting each task into finer-grained subtasks, and performing stage fusion to improve GPU utilization.",
		submit_status: "In submission",
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
