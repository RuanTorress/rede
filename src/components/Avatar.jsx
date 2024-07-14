import React from 'react';
import styles from './Avatar.module.css'; // Corrigido o caminho de importação

export function Avatar(props) {
    const hasBorder = props.hasBorder != false;

  return <img className={hasBorder ? styles.AvatarWithBorder : styles.Avatar} 
  src={props.src} alt={props.alt} />;
}


