import {useState} from 'react'
import './App.css';

function App() {
  const [form, setForm] = useState({})
   function handleChange(e){
          setForm({...form,[e.target.name]:e.target.value})
  }

  const  handleSubmit = async (e)=>{
    e.preventDefault()
    const responce = await fetch("http://localhost:8080/demo",{
      method:'GET'
    })
    const data = await responce.text()
    console.log(data)
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
