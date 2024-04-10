import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Table.css';


const Table = () => {

    const [data, ndata] = useState('');
    const [search, Setsearch] = useState('');
    const [tagValue, settagValue] = useState("");
    const [tags, settags] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/user')
            .then((res) => {
                ndata(res.data);
                console.log(res.data);
            })
    }, []);

    const addTag = (e) => {
        if (e.keyCode === 13 && tagValue != null) {
            settags([...tags, tagValue]);
        }
    };
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/user/` + id)
        ndata(data.filter((i) => i.id !== id))
        navigate('/')
    }

    const deltag = (val) => {
        let reminetag = tags.filter((t) => t !== val)
        settags(reminetag);
    };

   

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>ALL The List:</h1>
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end', borderRadius: '30px', margin: '5px' }} >
                <Link style={{ marginBottom: '15px', marginRight: '20px' }} to={`/Create`} className="btn btn-warning" >Add+</Link><br />
                <Form>
                    <InputGroup className='my-3' >
                        <Form.Control onChange={(e) => Setsearch(e.target.value)} placeholder='Search title' />
                    </InputGroup>
                </Form>
               
            </div>
            <div>
                <table className="table table-striped">
                    <tbody>
                        <tr>

                            <th>ID</th>
                            <th>List Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>CreateAt</th>
                            <th>Complete Task</th>
                            <th>Delete</th>
                            <th>Edite</th>

                        </tr>
                        {
                            data &&
                            data.filter((index) => {
                                return search === '' ? index : index.name.includes(search)
                            }).map((index, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{i+1}</td>
                                        <td>{index.name}</td>
                                        <td>{index.Describtion}</td>
                                        <td>{index.category}</td>
                                        <td>{index.creatAt}</td>
                                        <td><input type="checkbox" checked={index.box} readOnly /></td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(index.id)} >Delete</button>
                                        </td>
                                        <td>
                                            <Link to={`/Edite/${index.id}`} className="btn btn-primary" >Update</Link>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className='content' >
                <div className='tagInput' >
                    {
                        tags.map((index, i) => {
                            return <button onClick={() => deltag(index)} key={i}>{index}<span>X</span></button>
                        })
                    }
                    <input type='text' value={tagValue} onChange={(e) => settagValue(e.target.value)}
                        onKeyDown={addTag}
                        placeholder='type and enter' />
                </div>
            </div>


        </div>
    )
}

export default Table