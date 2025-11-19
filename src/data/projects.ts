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
		id: "shu",
		title: "Suplidora HU",
		description:
			"This is a project for the Suplidora HU company. It is a web application that allows the company to manage its inventory and invoces for its clients and a public catalogue for its products.",
		image: "https://suplidorahernandez.com/",
		githubUrl: "https://github.com/JendyTech/SuplidoraHU",
		type: "web",
		technologies: ["Typescript", "React", "NextJS", "Tailwind", "NestJS"],
	},
	{
		id: "ecommerce-platform",
		title: "Auto-Llaves-Facturacion",
		description:
			"Sistema frontend de facturación profesional desarrollado con React, TypeScript y Tailwind CSS para consumir una API REST en NestJS.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBLn7jXbGye172UBmeUns5WrkHCnyPttLbwaOLsL3dM8zVagDgRhNZ0XTwL8UGjemhnhFv_3HswgUX61lYHmPZe57T7aTqvN7GO3-9PEMuDgZfrXWyvKjr-xkpIp_bOXh1kMAxW9akkytLOQZV5UAjPH7YLyHkuy0iQGftOc5I9O4l66KOsoal3B7xUe_xfCffki0pz3SYR-wN16OLjSU9vgH6B25oIbBz_3451pcw1Z3saBZUyVvRzzQ3XKOSpcJbvGGTyZ_LTF8A",
		githubUrl: "https://github.com/Jeri-Dev/Auto-Llaves-Facturacion-FE",
		type: "web",
		technologies: ["Typescript", "React", "MaterialUI", "NestJS", "SQL"],
	},
	{
		id: "Defensa-Civil-App",
		title: "Defensa Civil App",
		description:
			"Esta fue una aplicacion movil desarrollada para el ministerio de defensa civil de Republica Domincana, la cual permite a los usuarios reportar desastres naturales y recibir alertas en tiempo real.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDljO-2-0bdtwfcpkdfmFZt9Blmdvq9tcF6JuCIhzb3uOykVq5irbJYa9I7J2xU6Oris-EVDA4-BiP_kim2TD2RKAJvWhuFb_ZSz3xMNI-t1fGSuDMympokbgUoshssoCAtWRYe9NrWtfhWoCd7tOY3qVyoGawQuDlEzMlnXrA0G-L3sFlOneyc1UqaDzT6Hmz0glBPtnuS0j52gaBEAuesmfxb6I3LMLFVvr3-5N4bHnPXXxaUKwXF0Tq-EH2WGf1TdDpzVBHojs0",
		githubUrl: "https://github.com/Proyecto-Final-Amadis/Defensa-Civil-App/",
		type: "app",
		technologies: ["Dart", "Flutter"],
	},
	{
		id: "portfolio-website",
		title: "MultiTool App",
		description:
			"Esta aplicacion cuenta con difentes herramientas e implementaciones de api diferentes para el usuario.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDljO-2-0bdtwfcpkdfmFZt9Blmdvq9tcF6JuCIhzb3uOykVq5irbJYa9I7J2xU6Oris-EVDA4-BiP_kim2TD2RKAJvWhuFb_ZSz3xMNI-t1fGSuDMympokbgUoshssoCAtWRYe9NrWtfhWoCd7tOY3qVyoGawQuDlEzMlnXrA0G-L3sFlOneyc1UqaDzT6Hmz0glBPtnuS0j52gaBEAuesmfxb6I3LMLFVvr3-5N4bHnPXXxaUKwXF0Tq-EH2WGf1TdDpzVBHojs0",
		githubUrl: "https://github.com/Proyecto-Final-Amadis/Defensa-Civil-App/",
		type: "app",
		technologies: ["Dart", "Flutter"],
	},
	{
		id: "RestaurantApi",
		title: "RestaurantApi",
		description:
			"API para la administracion de restaurantes tanto como sus platos, ordenes, mesas y usuarios.",
		image: "/emo_analisys.png",
		githubUrl: "https://github.com/Jeri-Dev/EmotionsApi/tree/main",
		type: "api",
		technologies: ["C#", ".NET", "Entity Framework"],
	},
	{
		id: "EmotionsApi",
		title: "Emotion Analizer",
		description:
			"Este es un proyecto surgio por un proyecto final universitario, se basa en un modelo de IA capaz de transcribir un audio e interpretar el sentimiento del hablante gracias a integracion de NLP.",
		image: "/emo_analisys.png",
		githubUrl: "https://github.com/Jeri-Dev/RestaurantApi",
		type: "api",
		technologies: ["Python", "FastAPI", "Sklearn"],
	},
]
