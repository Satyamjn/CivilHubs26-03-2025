import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import cementImg from "@/assets/Civilhubs/cement1.jpg";
import NavbarBusiness from "../Component/NavbarBusiness";

// Service Requests data
const serviceRequests = [
  {
    id: 1,
    serviceName: "JCB 76 Hp Backhoe",
    details: "Loader 3DX - 2 hours",
    status: "pending"
  },
  {
    id: 2,
    serviceName: "Caterpillar 424B",
    details: "Loader 2DX - 3 hours",
    status: "accepted"
  },
  {
    id: 3,
    serviceName: "Komatsu PC210",
    details: "Excavator - 5 hours",
    status: "cancelled"
  }
];

// Recent Orders data
const recentOrder = [
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Pending",
    actions: ["Accept", "Cancel"],
  },
  // ... other recent orders
];

// Completed Orders data
const completeOrders = [
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  {
    orderId: 1,
    name: "Cement 25kg bag",
    quantity: 5,
    status: "Delivered",
  },
  // ... other completed orders
];

const Popup = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl w-3/4 max-w-2xl shadow-lg">
        <h2 className="font-bold text-xl">{item.name || `Cement ${item.serviceName || ''} - ${item.quantity || ''}`}</h2>
        <p className="mt-2">Orderer Details</p>
        <p>Name: {item.ordererName || 'Rahul Yadav'}</p>
        <p>Address: {item.address || 'Logical Softtech Indore, MP'}</p>
        <p>Contact: {item.contact || '+911234567890'}</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-teal-500 text-white px-4 py-2 rounded" onClick={() => {/* handle accept */}}>Accept</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("order");
  const [sortedItems, setSortedItems] = useState([...recentOrder]);
  const [isSorted, setIsSorted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const openPopup = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  // Function to sort items by orderId
  const sortItems = (sort) => {
    const dataToSort = view === "order" ? recentOrder : serviceRequests;
    const sorted = sort
      ? [...dataToSort].sort((a, b) => a.orderId - b.orderId)
      : [...dataToSort];
    setSortedItems(sorted);
  };

  // Handle sort change
  const handleSortChange = (event) => {
    setIsSorted(event.target.checked);
    sortItems(event.target.checked);
  };

  // Update items based on view selection
  useEffect(() => {
    setSortedItems(view === "order" ? [...recentOrder] : [...serviceRequests]);
  }, [view]);

  // Handle Accept and Cancel actions for service requests
  const handleAccept = (id) => {
    const updatedRequests = sortedItems.map(request => 
      request.id === id ? { ...request, status: "accepted" } : request
    );
    setSortedItems(updatedRequests);
  };

  const handleCancel = (id) => {
    const updatedRequests = sortedItems.map(request => 
      request.id === id ? { ...request, status: "cancelled" } : request
    );
    setSortedItems(updatedRequests);
  };

  return (
    <>
      <NavbarBusiness />
      <div className="flex flex-col gap-3 p-6">
        {/* Main Content */}
        <div className="w-full">
          {/* View Toggle Buttons */}
          <div className="mb-8 flex flex-col md:flex-row space-x-0 md:space-x-16">
            <button
              onClick={() => setView("order")}
              className={`text-xl ${view === "order" ? "font-bold underline text-teal-500" : ""}`}
            >
              Orders
            </button>
            <button
              onClick={() => setView("completed")}
              className={`text-xl ${view === "completed" ? "font-bold underline text-teal-500" : ""}`}
            >
              Service Request 
            </button>
          </div>
  
          {/* Item Grid */}
          <div>
            <p className="text-xl font-bold">{view === "order" ? "Recent Orders" : "Service Requests"}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sortedItems.map((item, index) => (
              <div
                onClick={() => openPopup(item)}  // Call openPopup
                key={index}
                className="border rounded-lg p-4 bg-white cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">{view === "order" ? `Order #${item.orderId}` : `Service #${item.id}`}</p>
                  <p className={`text-sm ${item.status === "Delivered" || item.status === "accepted" ? "text-green-500" : "text-gray-500"}`}>
                    {item.status}
                  </p>
                </div>
                
                {view === "order" ? (
                  <p className="mt-2">{item.name} - {item.quantity} units</p>
                ) : (
                  <p className="mt-2">{item.serviceName} - {item.details}</p>
                )}
  
                {/* Actions for Pending Service Requests */}
                {view === "completed" && item.status === "pending" && (
                  <div className="mt-4 flex justify-end space-x-4">
                    <button 
                      className="text-teal-500 hover:underline" 
                      onClick={() => handleAccept(item.id)}
                    >
                      Accept
                    </button>
                    <button 
                      className="text-red-500 hover:underline" 
                      onClick={() => handleCancel(item.id)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Completed Orders Section */}
          <div className="mt-8">
            <p className="text-xl font-bold">Completed Orders</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {completeOrders.map((item, index) => (
                <div
                  onClick={() => openPopup(item)}  // Call openPopup for completed orders
                  key={index}
                  className="border rounded-lg p-4 bg-white cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold">Order #{item.orderId}</p>
                    <p className="text-sm text-green-500">{item.status}</p>
                  </div>
                  
                  <p className="mt-2">{item.name} - {item.quantity} units</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <Popup item={selectedItem} onClose={() => setIsPopupOpen(false)} />
        )}
        </div>
      </>
    );
  
};

export default Orders;