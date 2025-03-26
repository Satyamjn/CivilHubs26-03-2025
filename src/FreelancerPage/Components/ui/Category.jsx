// import Changed_Top_M from "../components/Changed_Top_Bar";
import { Link } from "react-router-dom";

function Category() {
    const categories = [
        {
            id: 1,
            title: "Android developer",
            jobs: 8,
            icon: "https://rojgaarr.com/assets/images/svg/android.svg",
        },
        {
            id: 2,
            title: "Flutter developer",
            jobs: 5,
            icon: "https://rojgaarr.com/assets/images/svg/flutters.png",
        },
        {
            id: 3,
            title: "React native developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/react.svg",
        },
        {
            id: 4,
            title: "PHP Developer",
            jobs: 5,
            icon: "https://rojgaarr.com/assets/images/svg/php.svg",
        },
        {
            id: 5,
            title: "iOS developer",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/ios.png",
        },
        {
            id: 6,
            title: "Full stack developer",
            jobs: 4,
            icon: "https://rojgaarr.com/assets/images/svg/fullsteck.png",
        },
        {
            id: 7,
            title: "Node.js Developer",
            jobs: 3,
            icon: "https://rojgaarr.com/assets/images/svg/nodejs (1).png",
        },
        {
            id: 8,
            title: "Data entry",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/document.png",
        },
        {
            id: 9,
            title: "Python developer",
            jobs: 2,
            icon: "https://rojgaarr.com/assets/images/svg/python.png",
        },
        {
            id: 10,
            title: "Java developer",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/java.png",
        },
        {
            id: 11,
            title: "React.Js developer",
            jobs: 2,
            icon: "https://rojgaarr.com/assets/images/svg/science.png",
        },
        {
            id: 12,
            title: "Ruby Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/ruby.png",
        },
        {
            id: 13,
            title: "Datafication technology",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/6283047.png",
        },
        {
            id: 14,
            title: "Cloud Computing",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/957636.png",
        },
        {
            id: 15,
            title: "Blockchain",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/free-blockchain-2-411041.png",
        },
        {
            id: 16,
            title: "Big Data",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/bigdata.png",
        },
        {
            id: 17,
            title: "Artificial intelligence (AI)",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/Artificialintelligence.png",
        },
        {
            id: 18,
            title: "Internet of Things",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/iot.png",
        },
        {
            id: 19,
            title: "Cyber Security",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/cyber.png",
        },
        {
            id: 20,
            title: "Seo and Digital Marketing",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/seo.png",
        },
        {
            id: 21,
            title: "Business Developer",
            jobs: 5,
            icon: "https://rojgaarr.com/assets/images/svg/business_developer_f88b518165.png",
        },
        {
            id: 22,
            title: "Sales marketing",
            jobs: 8,
            icon: "https://rojgaarr.com/assets/images/svg/sales-and-marketing.jpg",
        },
        {
            id: 23,
            title: "Training and Internship",
            jobs: 2,
            icon: "https://rojgaarr.com/assets/images/svg/images.png",
        },
        {
            id: 24,
            title: "Human resources (Hr)",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/hr1.png",
        },
        {
            id: 25,
            title: "IT Lead generation",
            jobs: 2,
            icon: "https://rojgaarr.com/assets/images/svg/leadgen.png",
        },
        {
            id: 26,
            title: "Data Analyst",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/dataanalysis.png",
        },
        {
            id: 27,
            title: "Business Analyst",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/banalisis.png",
        },
        {
            id: 28,
            title: "ROR Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/rordev.png",
        },
        {
            id: 29,
            title: "AI/ ML Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/ai-logo.png",
        },
        {
            id: 30,
            title: "Sales force Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/images1.png",
        },
        {
            id: 31,
            title: "Symphony Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/symfony_black_03.png",
        },
        {
            id: 32,
            title: "Oracle Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/Oracle-Symbol.png",
        },
        {
            id: 33,
            title: "C# Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/csharp.png",
        },
        {
            id: 34,
            title: "Asp .NET Developers",
            jobs: 1,
            icon: "https://rojgaarr.com/assets/images/svg/ASP_NET_logo.png",
        },
        {
            id: 35,
            title: "UI Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/uidesigner.png",
        },
        {
            id: 36,
            title: "DevOps Engineer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/devop.jpg",
        },
        {
            id: 37,
            title: "AWS Engineer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/awseng.png",
        },
        {
            id: 38,
            title: "Quality Analyst",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/qana.png",
        },
        {
            id: 39,
            title: "Xamarin Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/download1.png",
        },
        {
            id: 40,
            title: "KIBO Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/kibo.png",
        },
        {
            id: 41,
            title: "Business Process Engineer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/bpr.png",
        },
        {
            id: 42,
            title: "AWS Redshift",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/517921.png",
        },
        {
            id: 43,
            title: "Golang developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/golang.png",
        },
        {
            id: 44,
            title: "ML (machine learning)",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/machine.png",
        },
        {
            id: 45,
            title: "SAP UI/UX consultants",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/saps.png",
        },
        {
            id: 46,
            title: "Mulesoft",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/mlsoft.png",
        },
        {
            id: 47,
            title: "Kafka Developer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/kafka-logo-wi.png",
        },
        {
            id: 48,
            title: "Software testing",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/Software-Testing-Logo.png",
        },
        {
            id: 49,
            title: "Content Writer",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/writer.png",
        },
        {
            id: 50,
            title: "IT Training",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/training-magazine.png",
        },
        {
            id: 51,
            title: "Internship",
            jobs: 0,
            icon: "https://rojgaarr.com/assets/images/svg/internship.png",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            

            {/* Inner Banner Section */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-12 text-center rounded-b-3xl">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Job Category</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="flex justify-center space-x-2 text-white">
                                <li>
                                    <Link to="/" className="hover:underline">Home</Link>
                                </li>
                                <li>/</li>
                                <li>Job Category</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Category Listing Area */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <p className="text-gray-600 mb-4 md:mb-0">Showing results 10 in 200 jobs list</p>
                    <form className="w-full md:w-auto">
                        <div className="flex items-center border rounded overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search.."
                                className="px-4 py-2 w-full md:w-64 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors"
                            >
                                <img
                                    src="public/assets/images/icon/search-category.svg"
                                    alt="Search"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <Link to="/joblisting_1">
                                <div className="p-6">
                                    <div className="flex justify-between items-center">
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <img
                                                src={category.icon}
                                                alt={category.title}
                                                className="w-10 h-10"
                                            />
                                        </div>
                                        <div className="text-gray-500">
                                            <h6>{category.id < 10 ? `0${category.id}` : category.id}</h6>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="text-lg font-semibold text-gray-800">{category.title}</h5>
                                        <p className="text-gray-600">
                                            Job Availables: <span className="font-bold">{category.jobs}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

             
              
            </div>
        </div>
    );
}

export default Category;