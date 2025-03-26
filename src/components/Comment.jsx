import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment() {
		onDeleteComment(content);
	}

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src='https://github.com/brunofhorn.png'
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Bruno Fernandes (você)</strong>
							<time
								title='23 de março às 09:00h'
								dateTime='2025-03-23 09:00:00'
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button
							onClick={handleDeleteComment}
							title='Deletar comentário'
						>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
