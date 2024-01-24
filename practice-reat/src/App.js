import { useState } from 'react';
import List from './component/list';

function App() {
 const applicants = [
    {
      name: 'Joe',
      work: 'freelance-developer',
      blogs: '54',
      websites: '32',
      hackathons: 'none',
      location: 'Morocco',
      id: '0',
    },
    {
      name: 'Janet',
      work: 'fullstack-developer',
      blogs: '34',
      websites: '12',
      hackathons: '6',
      location: 'Mozambique',
      id: '1',
    },
 ];

 const [data, setData] = useState(applicants);

 const addApplicant = () => {
  setData([
      ...data,
      {
        name: 'New Applicant',
        work: 'role',
        blogs: '0',
        websites: '0',
        hackathons: 'none',
        location: 'location',
        id: Date.now().toString(),
      },
    ]);
 };

 const remove = () => {
    // setData(data.filter((applicant) => applicant.id !== id));
    let arr = [...applicants];
    arr.pop();
    setData(arr);
 };

 const removeApplicant = (id) => {
  setData(data.filter((applicant) => applicant.id !== id));
};

function event(e){
  console.log(e.timeStamp);
}

 return (
    <div className="App">
      {/* <button onClick={addApplicant}>Add</button>
      <button onClick={remove}>Remove</button>
      {data.map((applicant) => (
        <div>
          <button onClick={() => removeApplicant(applicant.id)}>Remove</button>
          <List applicant={applicant} />
        </div>
      ))} */}
      <button onClick={event}>
      click
      </button>

      
    </div>
 );
}

export default App;