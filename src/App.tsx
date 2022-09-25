import { useState } from 'react'
import { TaskList } from './components/TaskList'
import { Header } from './components/Header'

import styles from './App.module.scss'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <TaskList />
      </div>
    </>
  )
}

export default App
