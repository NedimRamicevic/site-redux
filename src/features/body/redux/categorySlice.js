// category Slice

import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [
    {
      id: 1,
      name: "WebDevelopment",
      description: "Web Development",
      image:
        "https://www.presmakina.com/presmakina/urun/betonblok/pro295/home.jpg",
      products: [
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
          price: "$100",
        },
        {
          id: 2,
          name: "Microsoft",
          description: "Microsoft",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg",
          price: "$200",
        },
      ],
    },
    {
      id: 2,
      name: "MobileDevelopment",
      description: "Mobile Development",
      image:
        "https://www.presmakina.com/presmakina/urun/betonblok/pro100/home.jpg",
      products: [
        {
          id: 1,
          name: "Apple",
          description: "Apple",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",

          price: "$100",
        },
        {
          id: 2,
          name: "Microsoft",

          description: "Microsoft",
          image:
            "https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg",
          price: "$200",
        },
      ],
    },
  ],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateCategory: (state, action) => {
      state[action.payload.index] = action.payload.category;
    },
    addProducttoCategory: (state, action) => {
      state[action.payload.index].products.push(action.payload.product);
    },
    removeProductfromCategory: (state, action) => {
      state[action.payload.index].products.splice(action.payload.product, 1);
    },
  },
});

export const {
  addCategory,
  removeCategory,
  updateCategory,
  addProducttoCategory,
  removeProductfromCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
