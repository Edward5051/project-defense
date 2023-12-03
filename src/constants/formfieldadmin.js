const admiField = [
    {
        labelText:"Productname",
        labelFor:"productname",
        id:"text",
        name:"text",
        type:"text",
        autoComplete:"productname",
        isRequired:true,
        placeholder:"Product Name"   
    },

    {
        labelText:"Productdescription",
        labelFor:"productdescription",
        id:"text",
        name:"text",
        type:"text",
        isRequired:true,
        placeholder:"Product Description"   
    },

    {
        labelText: "Category",
        labelFor: "category",
        id: "category",
        name: "category",
        type: "itemlist",
        autoComplete: "Category",
        isRequired: true,
        placeholder: "Category",
        options: ["Furniture", "Clothing", "Vehicles", "Electronics"],
    },

    {
        labelText: "AR model (upload)",
        labelFor: "photo",
        id: "photo",
        name: "photo",
        type: "file",
        placeholder:"AR modek (upload)",
        accept: "image/*",
        isRequired: true,
      },

      {
        labelText: "Linkproduct",
        labelFor: "linkproduct",
        id: "link",
        name: "link",
        type: "link",
        placeholder: "Link to Product",
        isRequired: true,
      },
]

export {admiField};