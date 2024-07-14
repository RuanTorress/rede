import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment (){
    return ( 
    <div className={styles.Comment} >
        <Avatar hasBorder={false} src="https://github.com/RuanTorress.png"  />

        <div className={styles.CommentBox} >
            <div className={styles.CommentContent} >
                    <header>
                        <div className={styles.authorAndTime}   > 
                            <strong>Ruan Torres</strong>
                            <time title="11 de maio as 08:13h" 
                                  dateTime="2022-05-11 08:00:30">Cerca de 1h</time>
                        </div>

                        <button title='Deletar comentario' > <Trash size={20} /> </button>
                    </header>

                    <p>muito bom parabens</p>
            </div>

            <footer>
               <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
               </button>
            </footer>
          </div>
       </div>

    )
}