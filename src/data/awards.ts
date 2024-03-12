interface Award {
	year: number;
	name: string;
	description: string;
}

const awards: Award[] = [
	{
	  year: 2023,
	  name: "Merit Student of Beijing",
	  description: ""
	},
	{
	  year: 2023,
	  name: "Second place at the SC23 Student Cluster Competition",
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
	  description: ""
	},
	{
	  year: 2023,
	  name: "National Scholarship",
	  description: "<b>Highest Honor</b> for undergraduates in China, 8000 RMB. <b>Top 1%</b> in Peking University."
	},
	{
	  year: 2023,
	  name: "Pacemaker Award for Merit Student",
	  description: "<b>Top 1%</b> in Peking University"
	},
	{
	  year: 2022,
	  name: "First place at the 10th ASC Student Supercomputer Challenge",
	  description: "As the <b>team leader</b>. ASC is The largest student supercomputer competition in the world."
	},
	{
	  year: 2022,
	  name: "John Hopcroft Scholarship of Peking University",
	  description: "3000 RMB"
	},
	{
	  year: 2022,
	  name: "Academic Excellence Award",
	  description: ""
	},
];

export {awards, type Award}
