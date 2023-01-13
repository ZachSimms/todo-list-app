import './App.css';
import {
  Kbd,
  Heading
} from '@chakra-ui/react'
import {
  useSpring,
  animated  
} from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { createContext, useEffect, useState } from 'react'

import { db } from './firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import { ToDoCard } from './components/ToDoCard';

export const AppContext = createContext()

function App() {

  const [{x, y}, apiAlpha] = useSpring(() => ({ x: 0, y: 0 }))
  const bindOne = useDrag(({ down, offset: [ox, oy]}) => apiAlpha.start({ x: ox, y: oy, immediate: down }), {
    //bounds: { left: -0, right: 500, top: -0, bottom: 500 }
    bounds: { left: -0, top: -0, right: window.innerWidth, bottom: window.innerHeight}
  })

  const [ taskinput, setTaskInput ] = useState("")
  const [ isComplete, setIsComplete ] = useState(false)
  
  const [tasks, setTasks] = useState([])
  const tasksCollectionRef = collection(db, 'tasks');

  const createTask = async () => {
    await addDoc(tasksCollectionRef, { title: taskinput, isComplete: isComplete });
  };

  const updateTask = async (id, title, complete) => {
    const taskDoc = doc(db, 'tasks', id);
    const newFields = {title: title, isComplete: complete};
    await updateDoc(taskDoc, newFields)
  }

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'tasks', id);
    await deleteDoc(taskDoc)
  }

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {

    getTasks();
  }, []);





  return (
    <div className='AppBody'>
      <AppContext.Provider value={{ getTasks, createTask, updateTask, deleteTask, taskinput, setTaskInput, isComplete, setIsComplete,tasks, setTasks }}>

        <animated.div className='App' {...bindOne()} style={{ x,y }}>
          {/* <Heading as='h1' size='md' fontSize='20px'>Thursday</Heading> */}
          <ToDoCard />
        </animated.div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
