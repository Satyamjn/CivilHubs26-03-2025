import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useEffect } from "react";


function Job_Listing1() {

   
    return (
        <>
            
            <div className="bg-gradient-to-r from-purple-400 to bg-purple-900 py-20 rounded-b-3xl -mt-9">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Job Listing</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="flex justify-center space-x-2">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-white ">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Job Listing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:order-1 order-2">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mb-8">
                                    <h5 className="text-lg font-semibold mb-4">Job Category</h5>
                                    <ul className="space-y-2">
                                        {[
                                            "Health Care", "Account & Finance", "Transportation", "Medical & Finance", 
                                            "Development", "Engineering", "Receptionist", "Non-Profit Org."
                                        ].map((category, index) => (
                                            <li key={index}>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="form-checkbox" />
                                                    <span>{category} (80)</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h5 className="text-lg font-semibold mb-4">Type of Employments</h5>
                                    <ul className="space-y-2">
                                        {[
                                            "Full Time", "Freelance", "Part Time", "Remote", "Temporary", "Permanent", "Internship"
                                        ].map((type, index) => (
                                            <li key={index}>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="form-checkbox" />
                                                    <span>{type} (30)</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h5 className="text-lg font-semibold mb-4">Date of Post</h5>
                                    <ul className="space-y-2">
                                        {[
                                            "Today", "Last week ago", "Last month ago", "3 month ago", "1 year ago"
                                        ].map((date, index) => (
                                            <li key={index}>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="form-checkbox" />
                                                    <span>{date} (80)</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h5 className="text-lg font-semibold mb-4">Salary Range</h5>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span id="slider-range-value1">0</span>K - <span id="slider-range-value2">100</span>K
                                        </div>
                                        <div id="slider-range" className="w-full"></div>
                                    </div>
                                    <ul className="space-y-2 mt-4">
                                        {[
                                            "$5K-$15K", "$20K-$30K", "$35K-$50K", "$55K-$70K", "$75K-$100K"
                                        ].map((salary, index) => (
                                            <li key={index}>
                                                <label className="flex items-center space-x-2">
                                                    <input type="radio" name="salary" className="form-radio" />
                                                    <span>{salary} (80)</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h5 className="text-lg font-semibold mb-4">Tags</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Technology", "Marketing", "Sales", "Transport", "Medical", 
                                            "Design", "Data Analyst", "Development", "Non-Profit", "Manager", "Health"
                                        ].map((tag, index) => (
                                            <Link key={index} to="/job_listing1" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tag}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/" className="bg-purple-600 text-white px-6 py-2 rounded-lg">Go to Job Alert</Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-2 order-1 lg:col-span-3">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-8">
                                    <p>Showing results 10 in 200 jobs list</p>
                                    <div className="flex items-center space-x-4">
                                        <select className="border rounded-lg px-4 py-2">
                                            <option value="0">Sort By(Default)</option>
                                            <option value="1">Full Time</option>
                                            <option value="2">Part Time</option>
                                            <option value="3">Remote</option>
                                            <option value="3">Internship</option>
                                            <option value="3">Freelance</option>
                                        </select>
                                        <div className="flex space-x-2">
                                            <Link to="/job_listing2" className="p-2 border rounded-lg">
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.26106 6.95674H0.695674C0.311464 6.95674 0 6.64527 0 6.26106V0.695674C0 0.311464 0.311464 0 0.695674 0H6.26106C6.64527 0 6.95674 0.311464 6.95674 0.695674V6.26106C6.95674 6.64527 6.64527 6.95674 6.26106 6.95674Z" />
                                                    <path d="M15.304 6.95674H9.73864C9.35443 6.95674 9.04297 6.64527 9.04297 6.26106V0.695674C9.04297 0.311464 9.35443 0 9.73864 0H15.304C15.6882 0 15.9997 0.311464 15.9997 0.695674V6.26106C15.9997 6.64527 15.6882 6.95674 15.304 6.95674Z" />
                                                    <path d="M6.26106 16.0004H0.695674C0.311464 16.0004 0 15.689 0 15.3048V9.73937C0 9.35517 0.311464 9.0437 0.695674 9.0437H6.26106C6.64527 9.0437 6.95674 9.35517 6.95674 9.73937V15.3048C6.95674 15.689 6.64527 16.0004 6.26106 16.0004Z" />
                                                    <path d="M15.304 16.0004H9.73864C9.35443 16.0004 9.04297 15.689 9.04297 15.3048V9.73937C9.04297 9.35517 9.35443 9.0437 9.73864 9.0437H15.304C15.6882 9.0437 15.9997 9.35517 15.9997 9.73937V15.3048C15.9997 15.689 15.6882 16.0004 15.304 16.0004Z" />
                                                </svg>
                                            </Link>
                                            <Link to="/job_listing1" className="p-2 border rounded-lg  text-white">
                                                <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.91313 0C0.856731 0 0 0.893707 0 1.99656C0 3.09861 0.856731 3.99157 1.91313 3.99157C2.96953 3.99157 3.82626 3.09861 3.82626 1.99656C3.82626 0.893707 2.96953 0 1.91313 0Z" />
                                                    <path d="M1.91313 6.00464C0.856731 6.00464 0 6.8976 0 8.00045C0 9.1025 0.856731 9.99621 1.91313 9.99621C2.96953 9.99621 3.82626 9.1025 3.82626 8.00045C3.82626 6.8976 2.96953 6.00464 1.91313 6.00464Z" />
                                                    <path d="M1.91313 12.0085C0.856731 12.0085 0 12.9023 0 14.0043C0 15.1064 0.856731 16.0001 1.91313 16.0001C2.96953 16.0001 3.82626 15.1064 3.82626 14.0043C3.82626 12.9023 2.96953 12.0085 1.91313 12.0085Z" />
                                                    <path d="M20.561 0.495117H6.95229C6.15787 0.495117 5.51367 1.16716 5.51367 1.99665C5.51367 2.82545 6.15782 3.49744 6.95229 3.49744H20.561C21.3554 3.49744 21.9996 2.82545 21.9996 1.99665C21.9996 1.16716 21.3554 0.495117 20.561 0.495117Z" />
                                                    <path d="M20.561 6.49878H6.95229C6.15787 6.49878 5.51367 7.17077 5.51367 8.00032C5.51367 8.82911 6.15782 9.5011 6.95229 9.5011H20.561C21.3554 9.5011 21.9996 8.82911 21.9996 8.00032C21.9996 7.17077 21.3554 6.49878 20.561 6.49878Z" />
                                                    <path d="M20.561 12.5034H6.95229C6.15787 12.5034 5.51367 13.1754 5.51367 14.0042C5.51367 14.833 6.15782 15.5049 6.95229 15.5049H20.561C21.3554 15.5049 21.9996 14.833 21.9996 14.0042C21.9996 13.1754 21.3554 12.5034 20.561 12.5034Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { title: "Senior Receptionist", company: "Medico.co Ltd", salary: "$20K-$50K", deadline: "05 April, 2023" },
                                        { title: "Senior PHP Developer", company: "Marko Land Company", salary: "$50K-$70K", deadline: "05 April, 2023" },
                                        { title: "Junior React Developer", company: "UI.UX Company", salary: "$30K-$50K", deadline: "06 April, 2023" },
                                        { title: "Senior React Developer", company: "UI.UX Company", salary: "$20-$50", deadline: "06 April, 2023" },
                                        { title: "Mern Stack Developer", company: "Germain Group Ltd", salary: "$80K-$90K", deadline: "07 April, 2023" },
                                        { title: "Junior React Developer", company: "UI.UX Company", salary: "$30K-$50K", deadline: "06 April, 2023" },
                                        { title: "Junior React Developer", company: "Bistro.Tech Ltd", salary: "$80K-$90K", deadline: "08 April, 2023" }
                                    ].map((job, index) => (
                                        <div key={index} className="p-6 border rounded-lg">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-start space-x-4 ">
                                                    <Image src={`public/assets/images/bg/company-logo/company-0${index + 1}.png`} className="w-12 h-12 rounded-xl"  />
                                                    <div>
                                                        <h5 className="text-lg font-semibold"><Link to="/job_details">{job.title}</Link></h5>
                                                        <p className="text-sm text-gray-600"><Link to="/company_details">{job.company}</Link></p> 
                                                    </div>
                                                </div>
                                                <div className="text-gray-600">
                                                    <i className="bi bi-bookmark-fill"></i>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="space-y-2">
                                                    <li>
                                                        <p><span className="font-semibold">Salary:</span> {job.salary} / <span className="text-gray-600">Per Month</span></p>
                                                    </li>
                                                    <li>
                                                        <p><span className="font-semibold">Deadline:</span> {job.deadline}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex space-x-2">
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full Time</span>
                                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Part Time</span>
                                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote</span>
                                                </div>
                                                <Link to="/job_details" className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
                                                    <span>Apply Now</span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <nav aria-label="Page navigation">
                                        <ul className="flex space-x-2">
                                            <li><Link to="/" className="px-4 py-2 border rounded-lg">1</Link></li>
                                            <li><Link to="/job_listing2" className="px-4 py-2 border rounded-lg">2</Link></li>
                                            <li><Link to="/" className="px-4 py-2 border rounded-lg">3</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Job_Listing1;