import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src='https://github.com/brunofhorn.png'
					/>
					<div className={styles.authorInfo}>
						<strong>Bruno Fernandes</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time
					title='20 de março às 09hrs'
					dateTime='2025-03-20 09:00:00'
				>
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					👉 <a href=''>jane.design/doctorcare</a>
				</p>
				<p>
					<a href=''>#novoprojeto #nlw #rocketseat</a>
				</p>
			</div>
		</article>
	);
}
