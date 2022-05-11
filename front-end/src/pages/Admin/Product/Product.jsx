import React, { useState } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/actions/product-action';

function Product() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    size: "m",
    image: ""
  });
  

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handelFormSubmit = (e) => {
    e.preventDefault();

    let name = e.target.elements.name?.value;
    let description = e.target.elements.description?.value;
    let price = e.target.elements.price?.value;
    let stock = e.target.elements.stock?.value;
    let size = e.target.elements.size?.value;
    let image = e.target.elements.image?.value;

    console.log(name, description, size, image, price, stock);
    dispatch(addProduct({
      name,
      description,
      size,
      image,
      price: +price,
      stock: +stock,
      categoryId: '392'
    }))
    history.push('/admin/product')
  }
  

  return (
  <AdminLayout>
    <div className="flex bg-gray-bg1">
      <div className="w-full m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Add Product
        </h1>

        <form onSubmit={handelFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
                type='name'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='name'
                name="name"
                onChange={onFormChange}
                placeholder='Your Product Name'
            />
          </div>

          <div className="mb-4">
            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
            <textarea 
              type="text"
              id="description" 
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder='Product Description'
              name="description"
              onChange={onFormChange}/>
          </div>

          <div className="relative mb-4">
            <label for="price-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="mt-7 w-6 h-6" fill="none" stroke="#333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>            
              </div>
            <input 
              type="double" 
              id="price-icon" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Price"
              name="price"
              onChange={onFormChange}/>
          </div>

          <div className="relative mb-4">
            <label for="stock-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="mt-7 w-6 h-6" fill="none" stroke="#333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>            
              </div>
            <input 
            type="integer" 
            id="stock-icon" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Stock"
            name="stock"
            onChange={onFormChange}/>
          </div>
          
          <div className="mb-4">
            <label for="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Size</label>
              <select 
              id="size" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="size"
              onChange={onFormChange}>
                <option>s</option>
                <option>m</option>
                <option>l</option>
                <option>xl</option>
              </select>
          </div>
          
          <div className="relative mb-4">
            <label for="price-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              </div>
            <input 
            type="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Image"
            name="image"
            onChange={onFormChange}/>
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <button onClick={() => history.goBack()} className={`bg-red-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-red-700 transition-all duration-200 ease-in-out`}>
              Cancel
            </button>

            <button type="submit" className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-700 transition-all duration-200 ease-in-out`}>
              Add Product
            </button>
          </div>

          

          {/* <div className="flex justify-start items-center mt-6">
            
          </div> */}

        </form>
      </div>
    </div>
  </AdminLayout>
  )
}

export default Product