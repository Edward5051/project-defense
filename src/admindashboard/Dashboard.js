import React from "react";
import { useState } from 'react';
import { admiField } from '../constants/formfieldadmin.js';
import Form from "./form.js";
import Input from "./input.js";

const fields = admiField;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Dashboard() {

    const [adminState, setadminState] = useState(fieldsState);

    const handleChange = (e) => {
        setadminState({ ...adminState, [e.target.id]: e.target.value });
      };

    const handleSubmit = async e => {

    };
    return (
        <form className="mt-8 space-y-6">
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={adminState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
            
            <Form handleSubmit={handleSubmit} text="submit" />
          </div>
        </form>
      );
}