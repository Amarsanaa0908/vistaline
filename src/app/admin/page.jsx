"use client"

import { useState, useEffect } from "react"
import { Search, Package, CreditCard, Truck, Check, X, Eye, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockOrders, getOrderStats } from "@/lib/orders-data"

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "vistaline2024"

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  processing: "bg-purple-100 text-purple-800",
  "in-transit": "bg-orange-100 text-orange-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
}

const paymentStatusColors = {
  pending: "bg-red-100 text-red-800",
  paid: "bg-green-100 text-green-800",
}

const shippingMethodLabels = {
  free: "Үнэгүй хүргэлт (12-36ц)",
  cod: "Төлбөр хүргэлтээр ₮8,000",
  express: "Шуурхай ₮20,000 (3-4ц)",
}

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

 const [isAuthenticated, setIsAuthenticated] = useState(() => {
  // Check if we're on the client side
  if (typeof window !== 'undefined') {
    const adminAuth = localStorage.getItem("vistaline_admin_auth");
    return adminAuth === "true";
  }
  return false; // Default for server-side
});

  const [orders, setOrders] = useState(mockOrders)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [paymentFilter, setPaymentFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)

  const stats = getOrderStats()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("vistaline_admin_auth", "true")
      setIsAuthenticated(true)
      setLoginError("")
    } else {
      setLoginError("Нэвтрэх нэр эсвэл нууц үг буруу байна")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("vistaline_admin_auth")
    setIsAuthenticated(false)
    setUsername("")
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Vistaline Admin</h1>
            <p className="text-gray-600">Админ хэсэгт нэвтрэх</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Нэвтрэх нэр</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Нэвтрэх нэрээ оруулна уу"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Нууц үг</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Нууц үгээ оруулна уу"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Нэвтрэх
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t text-center text-xs text-gray-500">
            <p>Static credentials (for demo):</p>
            <p className="font-mono mt-1">admin / vistaline2024</p>
          </div>
        </div>
      </div>
    )
  }

  // Filter orders based on search and filters
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter

    return matchesSearch && matchesStatus && matchesPayment
  })

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const updatePaymentStatus = (orderId, newPaymentStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, paymentStatus: newPaymentStatus } : order)))
  }

  const generateTrackingNumber = (orderId) => {
    const trackingNum = `VL${new Date().getFullYear()}${Math.random().toString().slice(2, 8)}`
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, trackingNumber: trackingNum } : order)))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Vistaline Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Admin Panel</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Гарах
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Нийт захиалга</p>
                <p className="text-3xl font-bold mt-2">{stats.totalOrders}</p>
              </div>
              <Package className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Нийт орлого</p>
                <p className="text-3xl font-bold mt-2">₮{stats.totalRevenue.toLocaleString()}</p>
              </div>
              <CreditCard className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Хүлээгдэж буй</p>
                <p className="text-3xl font-bold mt-2">{stats.pendingOrders}</p>
              </div>
              <Truck className="w-12 h-12 text-orange-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Төлөгдөөгүй</p>
                <p className="text-3xl font-bold mt-2">{stats.unpaidOrders}</p>
              </div>
              <X className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Захиалгын дугаар, нэр, имэйл хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="all">Бүх төлөв</option>
                <option value="pending">Хүлээгдэж буй</option>
                <option value="confirmed">Баталгаажсан</option>
                <option value="processing">Боловсруулж буй</option>
                <option value="in-transit">Хүргэлтэнд</option>
                <option value="delivered">Хүргэгдсэн</option>
                <option value="cancelled">Цуцлагдсан</option>
              </select>
            </div>

            <div>
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="all">Бүх төлбөр</option>
                <option value="pending">Төлөгдөөгүй</option>
                <option value="paid">Төлөгдсөн</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Захиалга №</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Хэрэглэгч</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Огноо</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дүн</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Хүргэлт</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Төлбөр</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Төлөв</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Үйлдэл</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium">{order.customerName}</div>
                        <div className="text-gray-500">{order.email}</div>
                        <div className="text-gray-500">{order.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(order.orderDate).toLocaleDateString("mn-MN")}
                      <div className="text-gray-500 text-xs">
                        {new Date(order.orderDate).toLocaleTimeString("mn-MN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      ₮{order.total.toLocaleString()}
                      <div className="text-xs text-gray-500">{order.items.length} бараа</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{shippingMethodLabels[order.shippingMethod]}</div>
                      {order.trackingNumber && <div className="text-xs text-gray-500 mt-1">{order.trackingNumber}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          paymentStatusColors[order.paymentStatus]
                        }`}
                      >
                        {order.paymentStatus === "paid" ? "Төлөгдсөн" : "Төлөгдөөгүй"}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{order.paymentMethod.toUpperCase()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`text-xs font-medium rounded-md px-2 py-1 border-0 ${statusColors[order.status]}`}
                      >
                        <option value="pending">Хүлээгдэж буй</option>
                        <option value="confirmed">Баталгаажсан</option>
                        <option value="processing">Боловсруулж буй</option>
                        <option value="in-transit">Хүргэлтэнд</option>
                        <option value="delivered">Хүргэгдсэн</option>
                        <option value="cancelled">Цуцлагдсан</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        {order.paymentStatus === "pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 bg-transparent"
                            onClick={() => updatePaymentStatus(order.id, "paid")}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        {!order.trackingNumber && order.status !== "pending" && (
                          <Button variant="outline" size="sm" onClick={() => generateTrackingNumber(order.id)}>
                            Track
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Захиалга олдсонгүй</p>
            </div>
          )}
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Захиалгын дэлгэрэнгүй - {selectedOrder.id}</h2>
              <Button variant="ghost" onClick={() => setSelectedOrder(null)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="font-semibold mb-2">Хэрэглэгчийн мэдээлэл</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-1">
                  <p>
                    <strong>Нэр:</strong> {selectedOrder.customerName}
                  </p>
                  <p>
                    <strong>Имэйл:</strong> {selectedOrder.email}
                  </p>
                  <p>
                    <strong>Утас:</strong> {selectedOrder.phone}
                  </p>
                  <p>
                    <strong>Хаяг:</strong> {selectedOrder.shippingAddress}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="font-semibold mb-2">Захиалсан бараа</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Өнгө: {item.color} | Размер: {item.size} | Тоо: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">₮{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="font-semibold mb-2">Нийт дүн</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Бараа:</span>
                    <span>₮{selectedOrder.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Хүргэлт ({shippingMethodLabels[selectedOrder.shippingMethod]}):</span>
                    <span>₮{selectedOrder.shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Нийт:</span>
                    <span>₮{selectedOrder.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Status Info */}
              <div>
                <h3 className="font-semibold mb-2">Төлөв</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Захиалгын төлөв:</span>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[selectedOrder.status]}`}
                    >
                      {selectedOrder.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Төлбөрийн төлөв:</span>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${paymentStatusColors[selectedOrder.paymentStatus]}`}
                    >
                      {selectedOrder.paymentStatus === "paid" ? "Төлөгдсөн" : "Төлөгдөөгүй"}
                    </span>
                  </div>
                  {selectedOrder.trackingNumber && (
                    <div className="flex justify-between">
                      <span>Tracking №:</span>
                      <span className="font-mono">{selectedOrder.trackingNumber}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
