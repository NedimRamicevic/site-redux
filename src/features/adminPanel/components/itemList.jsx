import React from 'react';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import { removeCategory, removeProductfromCategory } from "../redux/categorySlice";


function ItemList({categories}) {
    const [items, setItems] = useState(categories[0].products)
    const [category, setCategory] = useState(categories[0].name)
    const [isClicked, setIsClicked] = useState(true)
    const dispatch = useDispatch();

    const onCategoryDeleteClick =  (id) =>{
        dispatch(removeCategory(id))
    }
    const onProductDeleteClick =  (id) =>{
        dispatch(removeProductfromCategory({id, category}))
    }
  return (
<div class="max-w-2xl items-center justify-center flex gap-10">

	<div class="p-4 max-w-md w-2/4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center text-center mb-4">
        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Categories</h3>
   </div>
   {/* <div>
        <Dropdown options={categories} value={selected} onChange={onChange} />
   </div> */}
   <div class="flow-root">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
            {categories.map(item => (
                <li key={item.id} class="py-3 sm:py-4" onClick={()=>{setItems(item.products); setCategory(item.name)} }>
                {listTile(item,()=>onCategoryDeleteClick(item.id))}
            </li>
            ))}
        </ul>
   </div>
    </div>
    {isClicked &&  
    <div class="p-4 max-w-md w-2/4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
            <div class="flex justify-between items-center text-center mb-4">
                
        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Products</h3>
   </div>
   <div class="flow-root">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
            {items.map(item => (
                <li key={item.id} class="py-3 sm:py-4">
                {listTile(item, ()=>onProductDeleteClick(item.id))}
            </li>
            ))}
        </ul>
   </div>
   <div className=" text-red-500 m-auto text-center w-min font-bold cursor-pointer" onClick={()=> setIsClicked(false)}>
    X
   </div>
            </div>
   }
</div>
  )

}

export default ItemList

function listTile(item, onCategoryDeleteClick) {
    return <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={item.image} alt="" />
        </div>
        <div class="flex-1 min-w-0" >
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {item.name}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {item.id}
            </p>
        </div>
        <div class="flex-shrink-0">
            <button class="text-sm font-medium text-red-700 focus:outline-none focus:shadow-outline-blue-300" onClick={onCategoryDeleteClick}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>
            </button>
        </div>
    </div>
}
