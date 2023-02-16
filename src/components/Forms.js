import React from 'react';
import Input from "../components/Input"



const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  setTimeout(() => {
    console.log(formData)
      
    }, 4000);



  return (

    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <div className='grid grid-cols-1'>
        
      <div className="mb-4">
      <Input
        label="First Name"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleInputChange}
      />

      </div>
      <div className="mb-4">
      <Input
        label="Last Name"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      </div>
      
      <div>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit</button>
    </div>
      </div>
  
    </form>
    
  );
};

export default Form;
