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
		title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving",
		authors: "Yinmin Zhong, <b>Shengyu Liu</b>, Junda Chen, Yibo Zhu, Xuanzhe Liu, Xin Jin, Hao Zhang",
		time: "2023.12",
		img_path: "/publications/DistServe.png",
		description: "We propose DistServe, a novel large language model serving system that disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs).",
		submit_status: "In OSDI'24",
		link: "https://arxiv.org/abs/2401.09670"
	},
	{
		title: "Iteration-Level Preemptive Scheduling for Large Language Model Inference",
		authors: "Bingyang Wu*, Yinmin Zhong*, Zili Zhang*, <b>Shengyu Liu</b>, Fangyue Liu, Yuanhang Sun, Xuanzhe Liu, Xin Jin",
		time: "2023.9",
		img_path: "/publications/FastServe.png",
		description: "We propose FastGen, a distributed inference serving system for LLMs that exploits the autoregressive pattern of LLM inference to enable preemption at token-level granularity.",
		submit_status: "Submitted to ATC'24",
		link: "https://arxiv.org/abs/2305.05920"
	}
]

export {publications, type Publication}
