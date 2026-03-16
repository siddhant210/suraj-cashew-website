import React, { useEffect, useState } from "react"
import axios from "axios"

const AdminOrders = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/api/order`)
    .then(res => {
      setOrders(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])

  return (

    <div className="container mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Admin Orders Dashboard
      </h1>

      <table className="w-full border">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Payment</th>
          </tr>

        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order._id}>

              <td className="p-2 border">
                {order.orderId}
              </td>

              <td className="p-2 border">
                {order.firstName} {order.lastName}
              </td>

              <td className="p-2 border">
                {order.phone}
              </td>

              <td className="p-2 border">
                {order.city}
              </td>

              <td className="p-2 border">
                ₹{order.total}
              </td>

              <td className="p-2 border">
                {order.paymentMethod}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default AdminOrders