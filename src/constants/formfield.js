const signinFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"username",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Firstname",
        labelFor:"firstname",
        id:"firstname",
        name:"firstname",
        type:"text",
        autoComplete:"firstname",
        isRequired:true,
        placeholder:"Firstname"   
    },
    {
        labelText:"Lastname",
        labelFor:"lastname",
        id:"lastnamename",
        name:"lastname",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Lastname"   
    },
    {
        labelText:"Decription",
        labelFor:"description",
        id:"description",
        name:"description",
        type:"text",
        isRequired:true,
        placeholder:"description"   
    },
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    },
    {
        labelText: "Upload Photo",
        labelFor: "photo",
        id: "photo",
        name: "photo",
        type: "file",
        accept: "image/*",
        isRequired: true,
      },
]

export {signinFields,signupFields}