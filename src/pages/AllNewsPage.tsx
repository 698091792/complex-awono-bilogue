import { Link } from "react-router-dom";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Calendar } from "lucide-react";
import Footer from "@/components/Footer";
import ccc from "../assets/ccc.jpg";
const allNews = [
  {
    title: "Annual Science Fair Showcases Student Innovation",
    date: "May 15, 2023",
    content: "Students amazed visitors with their creative science projects at our annual Science Fair, demonstrating practical applications of classroom concepts.",
    imageSrc: ccc
  },
  {
    title: "Awono Bilogue Launches New After-School Programs",
    date: "April 22, 2023",
    content: "We're excited to announce new after-school activities including coding, chess club, and performing arts to enrich our students' educational experience.",
    imageSrc: ccc
  },
  {
    title: "Our Students Win Regional Mathematics Competition",
    date: "March 10, 2023",
    content: "Congratulations to our mathematics team for their outstanding performance at the Regional Math Olympiad, bringing home first place in team events.",
    imageSrc: ccc
  }
];

const AllNewsPage = () => {
  return (
    <Section id="all-news">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="heading-lg">All News</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((news, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img src={news.imageSrc} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </Section>
  );
};

export default AllNewsPage;
