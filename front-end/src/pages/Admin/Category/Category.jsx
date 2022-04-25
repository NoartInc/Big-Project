import React from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import { Link } from 'react-router-dom'

function Category() {

  return (
    <AdminLayout>
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Product Category</h1>
        <div>
            <Link to="/admin/category/add" className="bg-blue-600 text-white p-3 px-4 rounded-lg">Add New</Link>
        </div>
      </header>
      <main className="py-8 px-6">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4].map(index => (
              <tr key={index} className="border-b">
                <td className="py-3 w-full">Category {index}</td>
                <td className="py-3 flex justify-center items-center gap-x-2 w-24">
                  <button className="p-1 px-2 rounded bg-red-500 text-white">Hapus</button>
                  <Link to={`/admin/product/edit/${index}`} className="p-1 px-2 rounded bg-blue-500 text-white">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </AdminLayout>
  )
}

export default Category