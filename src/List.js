// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const List = () => {
//     const [data, ndata] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:8000/user')
//             .then((res) => {
//                 ndata(res.data);
//                 console.log(res.data);
//             })
//     }, []);

//     const handleDelete = async (id) => {
//         await axios.delete(`http://localhost:8000/user/` + id)
//         ndata(data.filter((i) => i.id !== id))
//     }

//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>ALL The List:</h1>
//             <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end', borderRadius: '30px', margin: '5px' }}>
//                 <Link to={`/Create`} className="btn btn-warning">Add+</Link>
//             </div>
//             <div>
//                 <dl>
//                     {data &&
//                         data.map((index, i) => {
//                             return (
//                                 <div  key={i}>
//                                     <dt>ID:</dt>
//                                     <dd>{index.id}</dd>
//                                     <dt>List Name:</dt>
//                                     <dd>{index.name}</dd>
//                                     <dt>Description:</dt>
//                                     <dd>{index.Describtion}</dd>
//                                     <dt>Complete Task:</dt>
//                                     <dd> <input type="checkbox" checked={index.box} readOnly /></dd>
//                                     <dt>Delete:</dt>
//                                     <dd>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(index.id)}>Delete</button>
//                                     </dd>
//                                     <dt>Update:</dt>
//                                     <dd>
//                                         <Link to={`/Edite/${index.id}`} className="btn btn-primary">Update</Link>
//                                     </dd>
//                                     <hr />
//                                 </div>
//                             )
//                         })
//                     }
//                 </dl>
//             </div>
//         </div>
//     )
// }

// export default List;





