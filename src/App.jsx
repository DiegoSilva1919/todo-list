import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Div1, Div2, Input, Button, Div3, Trash, Check } from './styles.js'

function App() {
  const [List, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(e) {
    setInputTask(e.target.value)
  }

  function cliqueiNoBotao() {
    if(inputTask) {
    setList([...List, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function FinalizarTarefa(id) {
    const newList=List.map(item => (
      item.id === id ? { ... item, finished: !item.finished} : item
    ))
    setList(newList)
  }

  function ApagarTarefa(id) {
    const newList=List.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <Div1>
      <Div2>
        <Input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            List.length > 0 ? (
            List.map(item => (
                <Div3 isFinished={item.finished} key={item.id}>
                  <Check onClick={() => FinalizarTarefa(item.id)}/>
                  <li>{item.task}</li>
                  <Trash onClick={() => ApagarTarefa(item.id)}/>
                </Div3>
            ))) : ( <h3>Sem Tarefa na lista</h3> )
          }
        </ul>
      </Div2>
    </Div1>
  )
}

export default App