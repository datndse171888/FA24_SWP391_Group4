import React from 'react'
import { useParams } from 'react-router-dom';

const adoptedForm = () => {
    const [register, setRegister] = useState({
        catID: useParams(),
        createDate: new Date(),
        adopterID: localStorage.getItem('userID'),
        status: 'WAITING'
    });

  return (
    <div>
      
    </div>
  )
}

export default adoptedForm
