import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.scss';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}  

interface TaskProps {
  editTasks: (task: Task[]) => void;
}

export function Form({ editTasks }: TaskProps) {
  const [ newTaskTitle, setNewTaskTitle ] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if(!newTaskTitle) return;

    const createNewTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    }

    editTasks((oldState) => [...oldState, createNewTask]);
    setNewTaskTitle('');
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input type="text" placeholder="Adicionar uma nova tarefa" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} />
      <button className={styles.createTask} onClick={handleCreateNewTask}>Criar</button>
    </form>
  )
}