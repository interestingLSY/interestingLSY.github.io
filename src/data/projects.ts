interface Project {
	name: string;
	description: string;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "DistServe",
		description: "A novel large language model serving system that disaggregates prefill and decoding to optimize goodput under certain latency constraints (SLOs). Built on SwiftTransformer.<br /><b>5000+</b> lines of Python.",
		time: "2023.12",
		link: "https://arxiv.org/abs/2401.09670"
	},
	{
		name: "SwiftTransformer",
		description: "SwiftTransformer is a tiny yet powerful and flexible implementation of the transformer neural network. It aims at providing a framework for researchers to try on their novel ideas.<br />During my junior year, my senior colleague and I implemented two of our ideas on FastServe and submitted papers based on those ideas to OSDI and ATC.<br /><b>10000+</b> lines of C++/CUDA.",
		time: "2023.9",
		link: "https://github.com/LLMServe/SwiftTransformer"
	},
	{
		name: "IntPool",
		description: "A mining pool written in Nodejs. During the third year in my high school, I wrote a mining pool as a matter of interest.",
		time: "2021.7",
		link: "https://github.com/interestingLSY/IntPool"
	}
]

export {projects, type Project}
