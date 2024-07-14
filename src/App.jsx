import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'; 

import './global.css';
import styles from './app.module.css';
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar /> {/* Usando o componente Sidebar */}
        </aside>
        <main>
          <Post 
            author="Ruan"
            content="thaynara braba todo dia toda hora,"
          />
          <Post 
            author="thay"
            content="a melhor mulher do mundo"
          />
        </main>
      </div>
    </div>
  );
}
