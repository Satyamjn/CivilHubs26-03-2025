import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarProperty from "./NavbarProperty";
import OrderModal from "./Odermodel"; // Corrected import name
import Footer from "./Footer";

// Sample Data
const pending = [
    { id: 1, serviceName: "Cement 50kg Bag", details: "10 bags", price: "₹5000", status: "pending" },
    { id: 2, serviceName: "Caterpillar 424B", details: "Loader 2DX - 3 hours", price: "₹5000", status: "accepted" },
    { id: 3, serviceName: "Komatsu PC210", details: "Excavator - 5 hours", price: "₹5000", status: "cancelled" },
    { id: 4, serviceName: "Steel Rods", details: "100 rods of 12mm", price: "₹12000", status: "pending" },
    { id: 5, serviceName: "Concrete Mixer", details: "Rental - 1 day", price: "₹3000", status: "accepted" },
    { id: 6, serviceName: "Sand 1 Truck", details: "20 tons", price: "₹8000", status: "pending" },
    { id: 7, serviceName: "Bricks", details: "5000 bricks", price: "₹15000", status: "accepted" },
    { id: 8, serviceName: "JCB 3DX", details: "Excavation - 8 hours", price: "₹10000", status: "cancelled" },
    { id: 9, serviceName: "Paint", details: "200 litres - Interior", price: "₹9000", status: "pending" },
    { id: 10, serviceName: "Tiles", details: "Ceramic - 1000 sq.ft", price: "₹25000", status: "accepted" },
    { id: 11, serviceName: "Plumbing Service", details: "Pipe fitting - 2 bathrooms", price: "₹7000", status: "pending" },
    { id: 12, serviceName: "Electrical Wiring", details: "Complete 3BHK", price: "₹18000", status: "accepted" },
    { id: 13, serviceName: "Marble Slabs", details: "Italian marble - 50 sq.m", price: "₹45000", status: "cancelled" },
    { id: 14, serviceName: "Glass Panels", details: "10mm tempered glass - 20 pcs", price: "₹15000", status: "pending" },
    { id: 15, serviceName: "Wooden Doors", details: "Teakwood - 5 pcs", price: "₹25000", status: "accepted" }
];


const inProgress = [
    { orderId: 1, name: "Cement 25kg bag", quantity: 5, price: "₹2000", status: "Pending" },
    { orderId: 2, name: "Sand 50kg bag", quantity: 3, price: "₹1500", status: "Pending" },
    { orderId: 3, name: "Cement 50kg Bag", quantity: 10, price: "₹5000", status: "In Progress" },
    { orderId: 4, name: "Gravel 50kg bag", quantity: 4, price: "₹1200", status: "In Progress" },
];

const completeOrders = [
    { orderId: 1, name: "Cement 25kg bag", quantity: 5, status: "Delivered" },
    { orderId: 2, name: "Sand 50kg bag", quantity: 3, status: "Delivered" },
    { orderId: 3, name: "Cement 50kg Bag", quantity: 10, price: "₹5000", status: "Completed" },
    { orderId: 4, name: "Gravel 50kg bag", quantity: 4, status: "Completed" },
];

const MyOrders = () => {
    const navigate = useNavigate();
    const [view, setView] = useState("pending");
    const [sortedItems, setSortedItems] = useState([...pending]);
    const [isSorted, setIsSorted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const sortItems = (sort) => {
        const dataToSort = view === "pending" ? pending : view === "inProgress" ? inProgress : completeOrders;
        const sorted = sort ? [...dataToSort].sort((a, b) => (view === "pending" ? a.id - b.id : a.orderId - b.orderId)) : [...dataToSort];
        setSortedItems(sorted);
    };

    const openModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleSortChange = (event) => {
        setIsSorted(event.target.checked);
        sortItems(event.target.checked);
    };

    useEffect(() => {
        const data = view === "pending" ? [...pending] : view === "inProgress" ? [...inProgress] : [...completeOrders];
        setSortedItems(data);
    }, [view]);

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <>
            <NavbarProperty />
            <div className="flex flex-col gap-3 p-6 mb-8">
                <div className="w-full">
                    {/* View Toggle Buttons */}
                    <div className="mb-8 flex flex-col sm:flex-row sm:space-x-16">
                        <button onClick={() => setView("pending")} className={`text-xl ${view === "pending" ? "font-bold underline text-teal-500" : ""}`}>Pending</button>
                        <button onClick={() => setView("inProgress")} className={`text-xl ${view === "inProgress" ? "font-bold underline text-teal-500" : ""}`}>In Progress</button>
                        <button onClick={() => setView("completed")} className={`text-xl ${view === "completed" ? "font-bold underline text-teal-500" : ""}`}>Completed</button>
                    </div>

                    {/* Sorting Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" checked={isSorted} onChange={handleSortChange} className="mr-2" />
                            Sort by ID
                        </label>
                    </div>

                    {/* Item Grid */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${view === "pending" ? "pending-scroll" : ""}`}>
                        {sortedItems.map((item, index) => (
                            <div key={index} className="border rounded-lg p-4 bg-white cursor-pointer relative">
                                <div className="flex items-center justify-between">
                                    <p className="font-bold">{view === "pending" || view === "inProgress" ? `Order #${item.orderId || item.id}` : `Order #${item.orderId}`}</p>
                                    <p className={`text-sm ${item.status === "Delivered" || item.status === "Completed" || item.status === "accepted" ? "text-green-500" : item.status === "cancelled" ? "text-red-500" : "text-gray-500"}`}>{item.status}</p>
                                </div>

                                {view === "pending" ? (
                                    <>
                                        <p className="mt-2">{item.serviceName} - {item.details}</p>
                                        <p>{item.price}</p>
                                    </>
                                ) : (
                                    <p className="mt-2">{item.name} - {item.quantity} units {item.price && `for ${item.price}`}</p>
                                )}

                                {/* View Details Button */}
                                <div className="mt-4 flex justify-end pb-6">
                                    <button className="text-teal-500 hover:underline" onClick={() => handleViewDetails(item)}>View Details</button>
                                </div>

                                {/* Status Badge */}
                                {view === "pending" && <div className="-mt-12 left-2"><span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded">Pending</span></div>}
                                {view === "inProgress" && <div className="-mt-12 left-2"><span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">In Progress</span></div>}
                                {view === "completed" && <div className="-mt-12 left-2"><span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Completed</span></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Order Modal */}
            <OrderModal order={selectedOrder} onClose={handleCloseModal} />
            <Footer/>
        </>
    );
};

export default MyOrders;