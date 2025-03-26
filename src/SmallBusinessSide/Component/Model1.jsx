
import React from "react";

const Modal1 = ({ item, closeModal }) => {
    if (!item) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-3/4 max-h-[80vh] overflow-y-auto rounded-2xl p-5 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-5 text-xl text-gray-600 hover:text-black"
                    onClick={closeModal}
                >
                    ✕
                </button>

                {/* Order ID and Details */}
                <h3 className="text-xl font-bold mb-4">#{item.id}</h3>


                {/* My Requirements Section */}
                <h4 className="text-lg font-semibold mb-3">My Requirements</h4>
                <ul className="divide-y divide-gray-200 mb-4">
                    {item.requirements && item.requirements.length > 0 ? (
                        item.requirements.map((req, index) => (
                            <li key={index} className="flex justify-between py-2 text-sm">
                                <span>{req.name}</span>
                                <span className="text-gray-600">{req.quantity}</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-gray-500">No requirements available</li>
                    )}
                </ul>

           
            </div>
        </div>
    );
};

export default Modal1;

// Sample Data with all card details
