import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/brunofhorn.png",
			name: "Bruno Fernandes Horn",
			role: "Analista de Sistemas",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2025-03-23 21:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayk Brito",
			role: "Educator on RocketSeat",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2025-03-23 21:00:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post, index) => {
						return (
							<Post
								key={index}
								post={post}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
