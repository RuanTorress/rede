import styles from './Post.module.css';
import thay from '../assets/thay.jpg';
import { Comment } from './Comment';
import { Avatar } from './Avatar';


export function Post () {
    return (
        <article className={styles.Post} >
            <header>
                <div className={styles.author} >

                    <Avatar hasBorder src={thay} />

                <div className={styles.authorInfor} >
                    <strong>Thaynara</strong>
                    <span>esteticista</span>
                </div>
            </div>
            <time title="11 de maio as 08:13h" 
 dateTime="2022-05-11 08:00:30">Publicado a 1h</time>


            </header>


 <div className={styles.content} >

        <p>Fala galeraa 👋</p>
            <p> Acabei de subir mais um projeto no meu portifa. 
                É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀
                </p>
        <p> <a href=""> 👉 jane.design/doctorcare</a></p>
        <p> <a href="">#novoprojeto  </a> 
            <a href="">#rocketseat</a>
            <a href="">#nlw</a>
        </p>
    </div>
    <form className={styles.commentForm}>
        <strong>Deixe seu feedbank</strong>

        <textarea placeholder='Deixe seu comentario'
         />
         <footer><button type='submit' >comentar</button></footer>
    </form>


                <div className={styles.commentList} >

                     <Comment />
                     <Comment />
                     <Comment />

            </div>
        </article>
    )
};