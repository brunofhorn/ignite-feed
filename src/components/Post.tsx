import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: 'paragraph' | 'link';
	content: string;
}
interface PostProps {
	author: Author;
	content: Content[];
	publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
	const [comments, setComments] = useState(["Post muito bacana!"]);
	const [newCommentText, setNewCommentText] = useState("");
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR }
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("Este campo é obrigatório!");
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter(
			(comment) => comment !== commentToDelete
		);

		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((line, index) => {
					if (line.type === "paragraph") {
						return <p key={index}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={index}>
								<a href=''>{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu feedback</strong>
				<textarea
					name='comment'
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment, index) => (
					<Comment
						key={index}
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
