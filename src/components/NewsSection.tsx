
import Section from "./Section";
import Button from "./Button";
import { ArrowRight, Calendar } from "lucide-react";
import b from "../assets/b.jpg";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
}

const NewsCard = ({ title, date, excerpt, imageSrc }: NewsCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50 transition-all duration-300 hover:shadow-glass animate-reveal">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" 
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-3">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <h3 className="heading-sm mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Button href="/news" variant="ghost" className="group p-0">
          <span className="flex items-center">
            Read more
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const news = [
    {
      title: "Annual Science Fair Showcases Student Innovation",
      date: "May 15, 2023",
      excerpt: "Students amazed visitors with their creative science projects at our annual Science Fair, demonstrating practical applications of classroom concepts.",
      imageSrc: b
    },
    {
      title: "Awono Bilogue Launches New After-School Programs",
      date: "April 22, 2023",
      excerpt: "We're excited to announce new after-school activities including coding, chess club, and performing arts to enrich our students' educational experience.",
      imageSrc: b
    },
    {
      title: "Our Students Win Regional Mathematics Competition",
      date: "March 10, 2023",
      excerpt: "Congratulations to our mathematics team for their outstanding performance at the Regional Math Olympiad, bringing home first place in team events.",
      imageSrc: b
    }
  ];

  return (
    <Section id="news">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div className="max-w-xl">
            <h2 className="heading-lg mb-4 animate-reveal">Latest School News</h2>
            <p className="text-muted-foreground animate-reveal">
              Stay updated with the latest events, achievements, and announcements from our vibrant school community.
            </p>
          </div>
          <div className="mt-6 md:mt-0 animate-reveal">
            <Button href="/news">View All News</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard 
              key={index}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default NewsSection;
