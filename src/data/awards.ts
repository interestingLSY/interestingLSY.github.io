interface Award {
	year: number;
	name: string;
	description: string;
}

const awards: Award[] = [
	{
		year: 2024,
		name: "National Scholarship <span style='font-size: 10px; color: #444'>(2024)</span>",
		description: "<b>Highest Honor</b> for undergraduates in China. <b>Top 1%</b> in Peking University."
	},
	{
		year: 2024,
		name: "CCF Elite Collegiate Award",
		description: "<b>Only 2 award winners each year</b> at Peking University."
	},
	{
		year: 2024,
		name: "SenseTime Scholarship",
		description: "<b>20 students per year across China</b>. SenseTime is a famous AI software provider in China."
	},
	{
		year: 2024,
		name: "Champion at the 11th ASC Student Supercomputer Challenge",
		description: "As an assistant team member. ASC is The largest student supercomputer competition in the world."
	},
	{
		year: 2023,
		name: "Merit Student of Beijing",
		description: ""
	},
	{
		year: 2023,
		name: "Second Place at the SC23 Student Cluster Competition",
		description: "As the <b>team leader</b>. SC (SuperComputing) is a world-famous conference for high-performance computing."
	},
	{
		year: 2023,
		name: "The Highest Linpack Benchmark (HPL) Award at the SC23 Student Cluster Competition",
		description: ""
	},
	{
		year: 2023,
		name: "Community Impact Award at the SC23 Student Cluster Competition",
		description: "For contribution to the open-source community, including contribution to the MLPerf project and the Zaychik Server project."
	},
	{
		year: 2023,
		name: "National Scholarship <span style='font-size: 10px; color: #444'>(2023)</span>",
		description: "<b>Highest Honor</b> for undergraduates in China. <b>Top 1%</b> in Peking University."
	},
	{
		year: 2023,
		name: "Pacemaker Award for Merit Student",
		description: "<b>Top 1%</b> in Peking University"
	},
	{
		year: 2023,
		name: "Champion at the 10th ASC Student Supercomputer Challenge",
		description: "As the <b>team leader</b>. ASC is the largest student supercomputer competition in the world."
	},
	{
		year: 2022,
		name: "John Hopcroft Scholarship of Peking University",
		description: ""
	},
	{
		year: 2022,
		name: "Academic Excellence Award",
		description: ""
	},
];

export {awards, type Award}
