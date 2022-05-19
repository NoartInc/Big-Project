import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { doOrder } from "../../store/actions/product-action.js";

function Shipment() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        address:"",
        city:"",
        postCode:"",
        note:""
      });

    // buat fungsi untuk melakukan set
    // masing-masing field, ke state form
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(doOrder(form));
    }
    
    const { user } = useSelector((state) => state.authReducer);

    if (!user) {
        history.push('/login');
    }

    const setUserData = () => {
        if (user) {
            setForm(prevState => ({
                ...prevState,
                fullName: user?.fullname,
                email: user?.email
            }))
        }
    }

    useEffect(() => {
        setUserData();
    }, [user]);
    // dispatch(shipment({

    // }))
  return (
    <div>
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" method="post" onSubmit={onSubmit}>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full">
                                    <label for="fullName" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Full Name
                                    </label>
                                    <input disabled value={user?.fullname} onChange={onInputChange} name="fullName" id="fullName" type="text" placeholder="Full Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input disabled value={user?.email} onChange={onInputChange} name="email" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={onInputChange} name="address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input onChange={onInputChange} name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input onChange={onInputChange} name="postCode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label for="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea onChange={onInputChange} name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" type="submit">Process</button>
                            </div>
                        </div>
                    </form>
                </div>e
            </div>
        </div>
    </div>
  )
}

export default Shipment