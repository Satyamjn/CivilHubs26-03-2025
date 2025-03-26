import React from "react";

const Modal = ({ item, closeModal }) => {
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

                {/* Quotes Section */}
                <div className="relative">
  <h4 className="text-lg font-semibold mb-2">Quotes</h4>

  {/* First Quote Section */}
  <div className="relative mt-6 p-4 bg-gray-100 rounded">
    <div className="absolute top-0 right-0 mt-6 mr-2">
      <button className="text-teal-600 hover:text-teal-800">
        <i className="fas fa-download"></i> {/* Font Awesome download icon */}
      </button>
    </div>
    <p className="text-teal-600">Vendor: Harsh Interior Designer</p>
    <p className="text-gray-600">Location: Indore, MP</p>
  </div>

  {/* Second Quote Section */}
  <div className="relative mt-6 p-4 bg-gray-100 rounded">
    <div className="absolute top-0 right-0 mt-6 mr-2">
      <button className="text-teal-600 hover:text-teal-800">
        <i className="fas fa-download"></i> {/* Font Awesome download icon */}
      </button>
    </div>
    <p className="text-teal-600">Vendor: Harsh Interior Designer</p>
    <p className="text-gray-600">Location: Indore, MP</p>
  </div>

  {/* Third Quote Section */}
  <div className="relative mt-6 p-4 bg-gray-100 rounded">
    <div className="absolute top-0 right-0 mt-6 mr-2">
      <button className="text-teal-600 hover:text-teal-800">
        <i className="fas fa-download"></i> {/* Font Awesome download icon */}
      </button>
    </div>
    <p className="text-teal-600">Vendor: Harsh Interior Designer</p>
    <p className="text-gray-600">Location: Indore, MP</p>
  </div>

  {/* Fourth Quote Section */}
  <div className="relative mt-6 p-4 bg-gray-100 rounded">
    <div className="absolute top-0 right-0 mt-6 mr-2">
      <button className="text-teal-600 hover:text-teal-800">
        <i className="fas fa-download"></i> {/* Font Awesome download icon */}
      </button>
    </div>
    <p className="text-teal-600">Vendor: Harsh Interior Designer</p>
    <p className="text-gray-600">Location: Indore, MP</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Modal;


