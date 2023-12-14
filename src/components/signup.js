import { useState } from 'react';
import { signupFields } from '../constants/formfield';
import FormAction from './FormAction';
import Input from './input';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    console.log('Profile Picture:', profilePicture);
    createAccount();
  };

  // handle Signup API Integration here
  const createAccount = () => {
    // where image upload logic will be handled here for now i do not have the skills for that 
    // a simple read on docs should do the trivk 
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
