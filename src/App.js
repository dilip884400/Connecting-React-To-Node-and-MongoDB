import {useState} from 'react'
import './App.css';

function App() {
  const [form, setForm] = useState({})
   function handleChange(e){
          setForm({...form,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
  }
   
  return (
    <div className="App">
    <p>{JSON.stringify(form)}</p>
      <form onSubmit={handleSubmit}>
      <label>Ender uername</label>
        <input type='text' name='username' onChange={handleChange} />
         <label>Ender password</label>
        <input type='text' name='password' onChange={handleChange}/>
        <input type='submit'/>
      </form>
     
    </div>
  );
}

export default App;
