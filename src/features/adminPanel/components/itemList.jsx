import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { Dropdown } from './dropdown'


function ItemList({type}) {
        const categories = useSelector((state) => state.categories).map((category) => category)
        const [selected, setSelected] = useState(categories[0].name)
        const [items, setItems] = useState(categories[0].products)
    
        const onChange = (e) => {
            setSelected(e.target.value)
            setItems(categories.find((category) => category.name === e.target.value).products)
        }

  return (
<div class="max-w-2xl mx-auto">

	<div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center text-center mb-4">
        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
   </div>
   <div>
        <Dropdown options={categories} value={selected} onChange={onChange} />
   </div>
   <div class="flow-root">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map(item => (
                <li key={item.id} class="py-3 sm:py-4">
                {listTile(item)}
            </li>
            ))}
        </ul>
   </div>
</div>
</div>
  )

}

export default ItemList

function listTile(item) {
    return <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={item.image} alt="" />
        </div>
        <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {item.name}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {item.description}
            </p>
        </div>
        <div class="flex-shrink-0">
            <button class="text-sm font-medium text-gray-900 focus:outline-none focus:shadow-outline-blue-300 dark:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"/>
            </button>
        </div>
    </div>
}
