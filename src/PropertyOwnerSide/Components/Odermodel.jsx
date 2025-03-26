import React, { useEffect } from "react";
import { XCircle, Phone, X } from "lucide-react";

const OrderModal = ({ order, onClose }) => {
    if (!order) return null;

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.classList.add("modal-open");
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    // Order progress tracking logic
    const getTrackingStatus = (status) => {
        const stages = ["Order Placed", "Order Confirmed", "Shipped", "Out for Delivery", "Delivered"];
        const statusIndex = stages.findIndex((stage) => stage.toLowerCase() === status?.toLowerCase());
        return stages.map((stage, index) => ({
            name: stage,
            completed: index <= statusIndex,
        }));
    };

    const trackingStatus = getTrackingStatus(order.status || "Order Placed");

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className="bg-white p-6 rounded-2xl shadow-lg relative max-w-3xl w-full overflow-y-auto max-h-[90vh] scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500" onClick={onClose}>
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-4">Order #{order.orderId || order.id}</h2>

                {/* Order Details */}
                <div className="mb-4 border p-4 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="font-bold mb-2">Order Details</h3>
                    <p>📦 Product: {order.serviceName || order.name}</p>
                    <p>🔢 Quantity: {order.details || `${order.quantity} units`}</p>
                    <p>💸 Total Price: {order.price || "N/A"}</p>
                    <span
                        className={`mt-2 inline-block px-4 py-1 text-sm text-white rounded ${
                            order.status === "pending"
                                ? "bg-orange-500"
                                : order.status === "In Progress"
                                ? "bg-blue-500"
                                : order.status === "Completed"
                                ? "bg-green-500"
                                : "bg-gray-500"
                        }`}
                    >
                        {order.status}
                    </span>
                </div>

                {/* Vendor Information */}
                <div className="mb-4 border p-4 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="font-bold mb-2">Vendor Information</h3>
                    <p>🏢 Vendor: ABC Cement Suppliers</p>
                    <p>📍 Address: 123 Market Street, Delhi</p>
                    <p>📅 Expected Delivery: 3-5 Days</p>
                </div>

                {/* Order Tracking with Progress Line */}
                <div className="mb-4 border p-4 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="font-bold mb-4">Order Tracking</h3>
                    <div className="relative">
                        <div className="absolute left-4 top-3 w-1 h-full bg-gray-200 -z-10" />
                        <ul className="space-y-4 relative">
                            {trackingStatus.map((stage, index) => (
                                <li key={index} className="flex items-center relative">
                                    {/* Progress Line */}
                                    {index !== trackingStatus.length - 1 && (
                                        <div
                                            className={`absolute left-4 top-6 w-1 ${
                                                stage.completed ? "bg-green-500" : "bg-gray-300"
                                            }`}
                                            style={{
                                                height: "30px",
                                            }}
                                        />
                                    )}

                                    {/* Filled Circle with Stage */}
                                    <span
                                        className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                                            stage.completed ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                    >
                                        {stage.completed ? (
                                            <span className="w-3 h-3 bg-white rounded-full"></span>
                                        ) : (
                                            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                        )}
                                    </span>
                                    <span
                                        className={`${
                                            stage.completed ? "text-green-500 font-semibold" : "text-gray-600"
                                        }`}
                                    >
                                        {stage.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center"
                        onClick={onClose}
                    >
                        <XCircle size={18} className="mr-2" />
                        Cancel Order
                    </button>
                    <button
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded flex items-center"
                        onClick={() => alert("Contacting Vendor...")}
                    >
                        <Phone size={18} className="mr-2" />
                        Contact Vendor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
