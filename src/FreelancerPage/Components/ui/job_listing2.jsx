import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Job_Listing2() {
    return (
        <>
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Job Listing</h1>
                        <nav className="text-sm">
                            <ol className="flex justify-center space-x-2">
                                <li><Link to="/index" className="text-blue-500">Home</Link></li>
                                <li className="text-gray-500">/</li>
                                <li className="text-gray-500">Job Listing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:order-1 order-2">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h5 className="text-lg font-semibold mb-4">Job Category</h5>
                                <ul className="space-y-2">
                                    {["Health Care", "Account & Finance", "Transportation", "Medical & Finance", "Development", "Engineering", "Receptionist", "Non-Profit Org."].map((category, index) => (
                                        <li key={index}>
                                            <label className="flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2">{category}</span>
                                                <span className="ml-auto text-gray-500">(80)</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:order-2 order-1 col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((job, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Image src={`public/assets/images/bg/job-list-${job}.png`} className="w-16 h-16 rounded-full" />
                                                <div className="ml-4">
                                                    <h5 className="text-lg font-semibold">Job Title</h5>
                                                    <p className="text-sm text-gray-500">Company Name</p>
                                                </div>
                                            </div>
                                            <div className="text-gray-500">
                                                <i className="bi bi-bookmark"></i>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <ul className="space-y-2">
                                                <li><span className="font-semibold">Salary:</span> $60-$90 / <span className="text-gray-500">Per Hour</span></li>
                                                <li><span className="font-semibold">Experience:</span> 3-3.5 Years</li>
                                                <li><span className="font-semibold">Location:</span> Dhaka, Bangladesh</li>
                                            </ul>
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full Time</span>
                                            <Link to="/job_details" className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center">
                                                <Image src="public/assets/images/icon/apply-ellipse.svg" className="w-4 h-4 mr-2" />
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 flex justify-center">
                                <nav>
                                    <ul className="flex space-x-2">
                                        <li><Link to="#" className="px-3 py-1 bg-gray-200 rounded-full">1</Link></li>
                                        <li><Link to="#" className="px-3 py-1 bg-gray-200 rounded-full">2</Link></li>
                                        <li><Link to="#" className="px-3 py-1 bg-gray-200 rounded-full">3</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Job_Listing2;