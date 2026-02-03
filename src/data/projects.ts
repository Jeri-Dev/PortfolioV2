export type ProjectType = "web" | "app" | "api"

export interface Project {
	id: string
	title: string
	description: string
	image: string
	projectUrl?: string
	githubUrl?: string
	type: ProjectType
	technologies?: string[]
}

export const projects: Project[] = [
	{
		id: "ai-platform",
		title: "QuickLanding",
		description:
			"A Next.js application that uses AI to generate personalized landing pages in real-time through conversational chat.",
		image: "/quick.png",

		githubUrl: "https://github.com/Jeri-Dev/QuickLanding",
		type: "web",
		technologies: ["Typescript", "React", "Groc", "NextJS", "AI"],
	},

	{
		id: "shu",
		title: "Suplidora HU",
		description:
			"This is a project for the Suplidora HU company. It is a web application that allows the company to manage its inventory and invoces for its clients and a public catalogue for its products.",
		image: "/suplidora.png",
		projectUrl: "https://suplidorahernandez.com/",
		type: "web",
		technologies: ["Typescript", "React", "NextJS", "Tailwind", "NestJS"],
	},
	{
		id: "ecommerce-platform",
		title: "Auto-Llaves-Facturacion",
		description:
			"Professional invoicing frontend system developed with React, TypeScript and Tailwind CSS to consume a REST API in NestJS.",
		image: "/alg.png",

		githubUrl: "https://github.com/Jeri-Dev/Auto-Llaves-Facturacion-FE",
		type: "web",
		technologies: ["Typescript", "React", "MaterialUI", "NestJS", "SQL"],
	},
	{
		id: "EmotionsApi",
		title: "Emotion Analizer",
		description:
			"This project originated from a university final project. It is based on an AI model capable of transcribing audio and interpreting the speaker's emotions through NLP integration.",
		image: "/emo_analisys.png",
		githubUrl: "https://github.com/Jeri-Dev/RestaurantApi",
		type: "api",
		technologies: ["Python", "FastAPI", "Sklearn"],
	},
	{
		id: "RestaurantApi",
		title: "RestaurantApi",
		description:
			"API for restaurant management including dishes, orders, tables and users.",
		image: "/restaurant.png",
		githubUrl: "https://github.com/Jeri-Dev/EmotionsApi/tree/main",
		type: "api",
		technologies: ["C#", ".NET", "Entity Framework"],
	},
]
