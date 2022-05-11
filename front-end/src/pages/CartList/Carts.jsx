import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { CartList, CartStyled } from './Cartsstyled';


// const Carts = () => {
//     const { carts: cartsStore } = useSelector((state) => state.productReducer);
//     const [carts, setCarts] = useState(cartsStore);
//     const history = useHistory();
  
//     const handleChangeQty = (e, id) => {
//       const findProduct = carts.find((val) => val.id === id);
//       findProduct.qty = e.target.value;
//       setCarts([...carts]);
//     };
  
//     return (
//       <div>
//         <div>
//         <h2>Daftar Keranjang</h2>
//         <CartStyled>
//           <CartList>
//             {carts.length < 1 ? (
//               <h2>Cart is empty !</h2>
//             ) : (
//               <table border="1" width="80%">
//                 <thead>
//                   <tr>
//                     <th>No</th>
//                     <th>Product Name</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th>Subtotal</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {carts &&
//                     carts.map((val, key) => {
//                       const subtotal = val.qty * val.productPrice;
//                       return (
//                         <tr key={key}>
//                           <td>{key + 1}</td>
//                           <td>{val.productName}</td>
//                           <td>
//                             <button>-</button>
//                             <span>
//                               <input
//                                 type="number"
//                                 value={val.qty}
//                                 onChange={(e) => handleChangeQty(e, val.id)}
//                               />
//                             </span>
//                             <button>+</button>
//                           </td>
//                           <td>{val.productPrice}</td>
//                           <td>{subtotal}</td>
//                           <td>
//                             <button>Delete</button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                 </tbody>
//               </table>
//             )}
//           </CartList>
//         </CartStyled>
//       </div>
//         <button onClick={() => history.goBack()} classNameName="goback" id="goback">GO BACK</button>
//     </div>
//     );
//   };
  
function Carts() {
  const history = useHistory();
  

  return (
  <body className="bg-gray-100">
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5"> 
              <div className="w-20">
                <img className="h-24" src="" alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Flannel Pria</span>
                <span className="text-red-500 text-xs">Kemeja</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>

              <input className="mx-2 border text-center w-8" type="text" value="1"/>

              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.150.000</span>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.150.000</span>
          </div>

          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5"> 
              <div className="w-20">
                <img className="h-24" src="" alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Flannel Wanita</span>
                <span className="text-red-500 text-xs">Kemeja</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>

              <input className="mx-2 border text-center w-8" type="text" value="1"/>

              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.130.000</span>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.130.000</span>
          </div>

          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5"> 
              <div className="w-20">
                <img className="h-24" src="" alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Flannel Unisex</span>
                <span className="text-red-500 text-xs">Kemeja</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              <input className="mx-2 border text-center w-8" type="text" value="1"/>

              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.200.000</span>
            <span className="text-center w-1/5 font-semibold text-sm">Rp.200.000</span>
          </div >

          <a href="#" onClick={() => history.goBack()} className="flex font-semibold text-indigo-600 text-sm mt-10">
        
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">Rp.480.000</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>JNE - Rp.10.000</option>
              <option>SiCepat - Rp.20.000</option>
              <option>Anteraja - Rp.30.000</option>
            </select>
          </div>
          <div className="py-10">
            <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>Rp. 490.000</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </div>
        </div>

      </div>
    </div>
  </body>
  )
}

export default Carts;