import { Link, useNavigate } from "react-router-dom";

export default function TechStack() {
    const navigate = useNavigate();

    const frameworks = [
        { name: "React.js", role: "FrontEnd Developer", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", link: "https://react.dev/" },
        { name: "Flutter", role: "Flutter Developer", logo: "public/assets/images/icon/Flutter.png", link: "https://flutter.dev/" },
        { name: "Swift", role: "Ios Developer", logo: "public/assets/images/icon/Swift.png", link: "https://developer.apple.com/swift/" },
        { name: "Kotlin", role: "Android Development", logo: "public/assets/images/icon/Kotlin.jpg", link: "https://kotlinlang.org/" },
    ];

    const backend = [
        { name: "Node.JS", role: "Node.js Developer", logo: "public/assets/images/icon/NodeJs.png", link: "https://nodejs.org/" },
        { name: "Python", role: "Python Developer", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", link: "https://www.python.org/" },
        { name: "PHP", role: "DevOps Engineer", logo: "public/assets/images/icon/Php.png", link: "https://www.php.net/" },
        { name: "Java", role: "Java Developer", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", link: "https://www.java.com/" },
    ];

    const cloudServices1 = [
        { name: "Google Cloud", role: "Cloud Engineer", logo: "public/assets/images/icon/Google Cloud.png", link: "https://cloud.google.com/" },
        { name: "AWS", role: "Aws Cloud Engineer", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", link: "https://aws.amazon.com/" },
        { name: "Microsoft Azure", role: "Microsoft Azure", logo: "public/assets/images/icon/Microsoft.png", link: "https://azure.microsoft.com/" },
    ];

    const cloudServices2 = [
        { name: "Firebase", role: "Firebase", logo: "public/assets/images/icon/Firebase.png", link: "https://firebase.google.com/" },
        { name: "mongoDB", role: "Database Engineer", logo: "public/assets/images/icon/MongoDb.png", link: "https://www.mongodb.com/" },
    ];

    const handleJoblist = (id) => {
        navigate('/browse', { state: { category: id } });
        console.log(id);
    }

    const Section = ({ title, items }) => (
        <div className="mb-6 ">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                    <Link key={item.role} to='/' onClick={(e) => { e.preventDefault(); handleJoblist(item.role); }}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 min-w-24 max-w-34">
                        <img src={item.logo} alt={item.name} className="w-9 h-8 relative" />
                        <span className="text-md font-medium">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <div className="p-7 mb-10 ml-9 mr-10 -px-4 bg-gradient-to-b from-blue-100 to-purple-300 rounded-lg shadow-lg mt-20">
            <h2 className="text-4xl font-bold text-start text-gray-800 mb-3">Unmatched Tech Capabilities Driving Innovation</h2>
            <p className="text-gray-600 mb-6 text-start">Our comprehensive tech stack ensures that your business has access to the latest tools and frameworks to thrive.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-start"><Section title="Frameworks" items={frameworks} /></div>
                <div className="flex justify-start"><Section title="Backend" items={backend} /></div>
                <div className="flex justify-start"><Section title="Cloud Services" items={cloudServices1} /></div>
                <div className="flex justify-start"><Section title="Cloud Services" items={cloudServices2} />
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white px-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ml-3 h-14 mt-10">
                        <img src="public/assets/images/icon/Mysql.png" alt="" className="w-auto h-10 ml-2" />
                        <span className="text-md font-medium"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}