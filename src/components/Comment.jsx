import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/brunofhorn.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Fernandes (você)</strong>
                            <time title="23 de março às 09:00h" dateTime='2025-03-23 09:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!! </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>33</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}