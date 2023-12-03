import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signinFields } from "../constants/formfield.js";
import FormAction from "./FormAction.js";
import FormExtra from "./FormExtra.js";
import Input from "./input.js";

const fields = signinFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signin() {
  const [signinState, setSigninState] = useState(fieldsState);
  const navigate = useNavigate(); // Create a navigate object from React Router

  const handleChange = (e) => {
    setSigninState({ ...signinState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  // Handle Login API Integration here
  const authenticateUser = () => {
    // Implement your authentication logic here

    // Assuming authentication is successful, navigate to the dashboard
    // You may need to replace the condition with your actual authentication logic
    if (true) {
      navigate('/dashboard'); // Redirect to the dashboard route
    }
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signinState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="SignIn" />
      </div>
    </form>
  );
}
