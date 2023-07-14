import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hugoh1dev.png',
      name: 'Hugo Junior',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏼', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare, 🚀', },
      { type: 'link', content: '👉🏼 hugo.design/doctorcare', },
    ],
    publishedAt: new Date('2023-07-10 20:05:07'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ramonnrocha.png',
      name: 'Ramonn Rocha',
      role: 'Web Developer @Stone'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏼', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto, desafio da RocketSeat. O nome do projeto é ToDoList, 🚀', },
      { type: 'link', content: '👉🏼 ramonnrocha.design/todolist', },
    ],
    publishedAt: new Date('2023-07-19 15:35:10'),
  },
];


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post => {
            return ( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </>
  )
}

