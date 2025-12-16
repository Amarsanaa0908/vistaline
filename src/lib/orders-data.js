// Mock orders data - In production, this would come from a database
export const mockOrders = [
  {
    id: "ORD-2024-001",
    customerName: "Батбаатар Энхбаяр",
    email: "batbaatar@email.com",
    phone: "+976 9999 1234",
    items: [
      {
        id: "merino-wool-sweater",
        name: "Premium Merino Wool Sweater",
        color: "Navy",
        size: "L",
        quantity: 1,
        price: 149,
      },
    ],
    subtotal: 149,
    shipping: 0,
    total: 149,
    shippingMethod: "free",
    shippingAddress: "Сүхбаатар дүүрэг, 3-р хороо, Барилга 45, Орц 2, Байр 12",
    orderDate: "2024-01-15T10:30:00",
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "card",
    trackingNumber: "VL2024001234",
  },
  {
    id: "ORD-2024-002",
    customerName: "Цэцэгмаа Өлзий",
    email: "tsetsegmaa@email.com",
    phone: "+976 8888 5678",
    items: [
      {
        id: "cashmere-cardigan",
        name: "Cashmere Blend Cardigan",
        color: "Charcoal",
        size: "M",
        quantity: 1,
        price: 189,
      },
      { id: "leather-belt", name: "Premium Leather Belt", color: "Black", size: "M", quantity: 1, price: 59 },
    ],
    subtotal: 248,
    shipping: 20000,
    total: 268000,
    shippingMethod: "express",
    shippingAddress: "Баянзүрх дүүрэг, 1-р хороо, Шинэ байр 23А",
    orderDate: "2024-01-16T14:20:00",
    status: "in-transit",
    paymentStatus: "paid",
    paymentMethod: "card",
    trackingNumber: "VL2024001235",
  },
  {
    id: "ORD-2024-003",
    customerName: "Болд Ганбаатар",
    email: "bold@email.com",
    phone: "+976 9911 2233",
    items: [{ id: "oxford-shirt", name: "Cotton Oxford Shirt", color: "White", size: "L", quantity: 2, price: 89 }],
    subtotal: 178,
    shipping: 8000,
    total: 186000,
    shippingMethod: "cod",
    shippingAddress: "Хан-Уул дүүрэг, 4-р хороо, 11-р байр, Орц 3",
    orderDate: "2024-01-16T16:45:00",
    status: "processing",
    paymentStatus: "pending",
    paymentMethod: "cod",
    trackingNumber: null,
  },
  {
    id: "ORD-2024-004",
    customerName: "Сарангэрэл Мөнх",
    email: "sarangerel@email.com",
    phone: "+976 9922 4455",
    items: [{ id: "silk-blouse", name: "Silk Blouse", color: "Ivory", size: "M", quantity: 1, price: 159 }],
    subtotal: 159,
    shipping: 0,
    total: 159,
    shippingMethod: "free",
    shippingAddress: "Сонгинохайрхан дүүрэг, 12-р хороо, 5-р хороолол",
    orderDate: "2024-01-17T09:15:00",
    status: "pending",
    paymentStatus: "pending",
    paymentMethod: "card",
    trackingNumber: null,
  },
  {
    id: "ORD-2024-005",
    customerName: "Эрдэнэбат Төмөр",
    email: "erdenebat@email.com",
    phone: "+976 9933 6677",
    items: [
      { id: "chelsea-boots", name: "Leather Chelsea Boots", color: "Black", size: "L", quantity: 1, price: 249 },
      { id: "wool-beanie", name: "Merino Wool Beanie", color: "Navy", size: "One Size", quantity: 1, price: 45 },
    ],
    subtotal: 294,
    shipping: 8000,
    total: 302000,
    shippingMethod: "cod",
    shippingAddress: "Чингэлтэй дүүрэг, 6-р хороо, Төв байр 8",
    orderDate: "2024-01-17T11:30:00",
    status: "confirmed",
    paymentStatus: "pending",
    paymentMethod: "cod",
    trackingNumber: null,
  },
]

// Helper functions for order management
export function getOrderById(orderId) {
  return mockOrders.find((order) => order.id === orderId)
}

export function getOrderStats() {
  const totalOrders = mockOrders.length
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = mockOrders.filter((order) => order.status === "pending" || order.status === "processing").length
  const unpaidOrders = mockOrders.filter((order) => order.paymentStatus === "pending").length

  return {
    totalOrders,
    totalRevenue,
    pendingOrders,
    unpaidOrders,
  }
}
