  import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
 const [formData, setFormData] = useState({
   fname: '',
   lname: '',
   email: '',
   phone: '',
   gender: '',
   hobbies: [],
   data: [],
 });

 
 const handleSubmit = (e) => {
  e.preventDefault();
  const newData = {
    fname: formData.fname,
    lname: formData.lname,
    email: formData.email,
    phone: formData.phone,
    gender: formData.gender,
    hobbies: formData.hobbies,
  };

  setFormData({
    ...formData,
    data: [...formData.data, newData],
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gender: '',  
    hobbies: [],
  }); 
};

 const handleHobbyChange = (e) => {
   if (e.target.checked) {
     setFormData({ ...formData, hobbies: [...formData.hobbies, e.target.value] });
   } else {
    setFormData({ ...formData, hobbies: formData.hobbies.filter(hobby => hobby !== e.target.value) });
    }
 };


 const handleDelete = (index) => {
  const newData = [...formData.data];
  newData.splice(index, 1);
  setFormData({ ...formData, data: newData });
};

 return (
  <div className="containerFluid">
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        First Name:
        <input type="text" spellCheck="true" className="form-control" id="name" value={formData.fname} onChange={(e) => setFormData({ ...formData, fname: e.target.value })} required />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Last Name:
        <input type="text" className="form-control" id="name" value={formData.lname} onChange={(e) => setFormData({ ...formData, lname: e.target.value })} required />
      </label>
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">
           Email:
           <input
             type="text"
             className="form-control"
             id="email"
             value={formData.email}
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             required
           />
         </label>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Phone:
        <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} pattern="[0-9]{10}" required />
      </label>
    </div>
    <div className="mb-3">
      <label className="form-check-label d-block">Gender:</label>
      <div className="form-check form-check-inline">
        <input type="radio" className="form-check-input" value="Male" name="gender" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
        <label className="form-check-label">Male</label>
      </div>
      <div className="form-check form-check-inline">
        <input type="radio" className="form-check-input" value="Female" name="gender" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
        <label className="form-check-label">Female</label>
      </div>
    </div>
    <div className="mb-3" >
      <label className="form-check-label">Hobbies:</label>
      <div className="form-check">
        <input type="checkbox" className="form-check-input"  value="Reading" onChange={handleHobbyChange} />
        <label className="form-check-label">Reading</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" value="Games" onChange={handleHobbyChange} />
        <label className="form-check-label">Games</label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

     <table className='table'>
       <thead>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Gender</th>
           <th>Hobbies</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {formData.data.map((item, index) => (
           <tr key={index}>
             <td>{item.fname}</td>
             <td>{item.lname}</td>
             <td>{item.email}</td>
             <td>{item.phone}</td>
             <td>{item.gender}</td>
             <td>{item.hobbies.join(', ')}</td>
             <td>
               <button> Edit </button>&nbsp;
               <button type="button" onClick={() => handleDelete(index)}>
                 Delete
               </button>
             </td>
             <td>  
               
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
};

export default User;