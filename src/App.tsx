import Update from './components/Update';
import NewNotes from './components/NewNotes';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [dataForm, setDataForm] = useState('');
  const [data, setData] = useState<Post[]>([]);
  const [key, setKey] = useState(1);
  const [count, setCount] = useState(1)



  const post = async (data: Post) => {
    const response = await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error('Ошибка')
      return
    }
    setCount(prevCount => {
      prevCount += 1
      return prevCount
    })
    return response.ok
  }

  const get = async () => {
    const response = await fetch('http://localhost:7070/notes');
    if (!response.ok) {
      console.error('Ошибка БД')
      return
    }
    const result = await response.json() as Post[]
    setData(prevData => {
      prevData = result
      return prevData
    })
    if (result.length) {
      result.sort((a, b) => b.id - a.id);
      setKey(result[0].id)
    }
  }

  const remove = async (id: number) => {
    const response = await fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      console.error('Ошибка БД')
      return
    }
    setCount(prevCount => {
      prevCount += 1
      return prevCount
    })
  }

  useEffect(() => {
    get()
  },[count])

  const handlerForm = async () => {
    setKey(prevKey => {
      return prevKey += 1;
    })
    const data = {id: key, content: dataForm}
    const mark = await post(data)
    if (mark) {
      setDataForm('');
    } else {
      console.log('Данные не отправлены')
    }
  }

  const handleUpdate = () => {
    setCount(prevCount => {
      prevCount += 1
      return prevCount
    })
  }

  return (
    <div className="container">
      <Update update={handleUpdate} />
      <Cards data={data} remove={remove}/>
      <NewNotes setDataForm={setDataForm} add={handlerForm} value={dataForm}/>

    </div>
  )
}

export default App

type Post = {
  id: number;
  content: string
}
