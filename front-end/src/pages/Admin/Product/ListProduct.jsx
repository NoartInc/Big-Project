import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../../components/layouts/AdminLayout'
import { deleteRequest, getRequest } from '../../../utils/api';

function ListProduct() {
    const [list, setList] = useState([]);

    const getList = () => {
        getRequest("/product")
            .then((response) => {
                setList(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const removeProduct = (id) => {
        deleteRequest(`/product/${id}`)
            .then((response) => {
                if (response.status) {
                    alert("Produk berhasil di hapus");
                    getList();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteProduct = (id) => {
        if (window.confirm('Yakin akan menghapus data ini?')) {
            removeProduct(id);
        }
    }

    useEffect(() => {
        getList()
    },[])

 
  return (
    <AdminLayout>
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Product List</h1>
        <div>
            <Link to="/admin/product/add" className="bg-blue-600 text-white p-3 px-4 rounded-lg">Add New</Link>
        </div>
      </header>
      <main className="py-8 px-6">
          {!list.length ? (
              <div className="text-center py-8">
                  <h1>Tidak Ada Data</h1>
              </div>
          ) : (
            <table className="table-auto w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Image</th>
              <th className="text-left w-32 py-3">Name</th>
              <th className="text-left py-3">Description</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">Stock</th>
              <th className="text-left py-3">Size</th>
              <th className="py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data,index) => (
              <tr key={index} className="border-b">
                <td className="py-3"> <img className="w-60 h-40" src={data.image} /></td>
                <td className="py-3"> {data.name}</td>
                <td className="py-3"> {data.description}</td>
                <td className="py-3"> {data.price}</td>
                <td className="py-3"> {data.stock}</td>
                <td className="py-3"> {data.size}</td>
                <td className="py-3 flex justify-center items-center gap-x-2 w-24 text-center">
                  <button className="p-1 px-2 rounded bg-red-500 text-white" onClick={() => deleteProduct(data.id)}>Hapus</button>
                  <Link to={`/admin/product/edit/${data.id}`} className="p-1 px-2 rounded bg-blue-500 text-white">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          ) }
        
      </main>
    </AdminLayout>
  )
}

export default ListProduct