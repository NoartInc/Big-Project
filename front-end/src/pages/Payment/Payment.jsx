import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Pembayaran via Transfer
            </h1>
          </div>
          <div className="mb-3 text-center">
            <div className="w-1/2 mx-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/800px-BNI_logo.svg.png"
                className="w-28 mx-auto mb-4"
              />
            </div>
            <label className="text-center text-xl">M Afif Dalianda</label>
            <h4 className="text-center font-bold text-xl uppercase mt-2">
              04462748583
            </h4>
          </div>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              <i className="mdi mdi-lock-outline mr-1">Sudah Bayar</i>
            </button>
          </div>
          <div className="mt-3 text-center">
            <button
              onClick={() => history.goBack()}
              className="w-1/5 text-sm px-6 py-2 text-red-200 bg-red-600 hover:bg-red-900 rounded-md"
              type="goback"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Content */}
                <div className="p-5">
                <svg 
                className="w-12 pb-3 mx-auto" 
                fill="none" 
                stroke="#00cc00"  
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                  {/* <svg
                    class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg> */}
                  <h3 class="mb-5 text-lg font-bold text-center text-gray-500 dark:text-gray-400">
                    Terima Kasih 
                  </h3>
                  <h3 class="mb-5 text-lg font-bold text-center text-gray-500 dark:text-gray-400">
                    Pesanan Anda Sedang Diproses
                  </h3>
                  {/* <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center pb-5 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => history.push('/home')}
                  >
                    Selesai
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Payment;
