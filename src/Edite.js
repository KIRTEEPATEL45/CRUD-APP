import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Edite = () => {
    const {id}  = useParams();
    const navigate = useNavigate();
    const [data,ndata] = useState({
      
        name:'',
        Describtion:'',
        box:true,
        category:'',
        creatAt:''
    })

    const handledata = (e) => {
        const {name,value,type, checked}  = e.target;
        const val = type === 'checkbox' ? checked : value;
        ndata({...data,[name]:val})
        console.log(e.target.val)
     }
 
 
     useEffect(() => {
         axios.get(`http://localhost:8000/user/`+id)
             .then((res) => {
                 ndata(res.data);
                 console.log(res.data);
             })
     }, [id]);
 
     const handlesubmit = (e)=>{
         e.preventDefault();
         data.creatAt = new Date().toISOString().slice(0,10)
         axios.put(`http://localhost:8000/user/`+id,data)
         .then((res)=>{
             navigate(`/`)
             alert("Data upade Succesfully")
         })
     }

  return (
    <div>
         <h1 style={{textAlign:'center'}} >Edite The List</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center',
        textAlign:'center', fontSize:'20px', marginTop:'25px'
    }}>
        <form onSubmit={handlesubmit} >
       <label>Task Name:</label><br/>
       <input required type='text' placeholder='name' name='name' value={data.name}  onChange={handledata} /><br /><br />
       <label>Describtion:</label><br/>
       <textarea required type='text' placeholder='Describtion' name='Describtion' value={data.Describtion} onChange={handledata} /><br /><br />
      
       <label>Category:</label><br />
                    <select required name="category" value={data.category} onChange={handledata}>
                        <option value="">Select a category</option>
                        <option value="Read Task">Read Task</option>
                        <option value="Start Task">Start Task</option>
                        <option value="Working on">Working on</option>
                        <option value="End Task">End Task</option>
                    </select><br /><br />
                    <label>Complete Task:</label>
       <input type='checkbox' name='box' checked={data.box} onChange={handledata} /><br /><br />
       
       <button type='submit' className="btn btn-primary" >Submit</button>
  
      <> <Link to={`/`}  className="btn btn-dark" >Back</Link></>
        </form>
      </div>
    </div>
  )
}

export default Edite
