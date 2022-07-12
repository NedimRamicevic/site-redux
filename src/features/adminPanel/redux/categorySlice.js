// category Slice

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   categories: [],
//   loading: false,
//   error: "",
// };

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  () => {
    return axios.get("/api/categories");
  }
);

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
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
  reducers: {
    addCategory: (state, action) => {
      state.push({
        id: state.length + 1, // id is the length of the array + 1
        name: action.payload.name, // action.payload is the name of the new category
        description: action.payload.description,
        image: "https://via.placeholder.com/150", // image: "https://via.placeholder.com/150",
        products: [], // products will be added later
      });
    },
    removeCategory: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateCategory: (state, action) => {
      state[action.payload.index] = action.payload.category;
    },
    addProducttoCategory: (state, action) => {
      state = state.map((category) => {
        if (category.name === action.payload.page) {
          category.products.push({
            id: category.products.length + 1,
            name: action.payload.name,
            description: action.payload.content,
            image:
              "https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg",
            price: "$200",
          });
        }
        return state;
      });
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
