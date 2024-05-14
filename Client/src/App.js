import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ToDo from './components/Todo/ToDo';
import Home from './components/Home/Home';
import Survey from './components/Survey/Survey';

function App() {
  const [pass, setPass] = useState("")
  const [emailAdd, setEmailAdd]= useState("") 
  const [currentPerson, setCurrentPerson] = useState()
  const [loadTasks, setLoadTasks] = useState("")
  const [message, setMessage] = useState('')


  useEffect(() => {
    if (currentPerson){
      setLoadTasks(currentPerson.tasks)
    }
  }, [currentPerson, loadTasks])
 
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/todo'
            element={<ToDo 
              emailAdd={emailAdd}
              setEmailAdd={setEmailAdd}
              pass={pass}
              setPass={setPass}
              loadTasks={loadTasks}
              setLoadTasks={setLoadTasks}
              currentPerson={currentPerson}
              message={message}
            />}/>

          <Route
            path='/'
            element={<Home
              emailAdd={emailAdd}
              setEmailAdd={setEmailAdd}
              pass={pass}
              setPass={setPass}
              setCurrentPerson={setCurrentPerson}
              message={message}
              setMessage={setMessage}
            />} />

          <Route path='/survey'
          element={<Survey />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
