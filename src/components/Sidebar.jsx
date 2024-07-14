import {PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import capa from '../assets/capa.jpg'; 
import thay from '../assets/thay.jpg'; 
import { Avatar } from './Avatar';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.Sidebar} src={capa} />
        <div className={styles.profile}>

           
        <Avatar src={thay} />

            <strong>Thaynara Torres</strong>
                <span>Esteticista e comestologa</span>
                    </div>
                        <footer>
                            <a href="#">
                                <PencilLine size= {20} />
                                Editar seu Perfil
                                    </a>
                            </footer>
                         </aside>
                     );
                    }
