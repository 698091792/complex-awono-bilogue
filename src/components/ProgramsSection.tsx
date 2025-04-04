import Header from "./Header";
import Section from "./Section";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import aa from "../assets/aa.jpg";

interface ProgramCardProps {
  title: string;
  ageGroup: string;
  description: string;
  imageSrc: string;
}

const ProgramCard = ({ title, ageGroup, description, imageSrc }: ProgramCardProps) => {
  return (
    <div className="group  bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50 transition-all duration-300 hover:shadow-glass">
      <Header />
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" 
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-xs font-medium mb-3">
          {ageGroup}
        </div>
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button href="/programs" variant="ghost" className="group p-0">
          <span className="flex items-center">
            Learn more 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      title: "Early Years Foundation",
      ageGroup: "Ages 4-5",
      description: "A nurturing start to education focusing on play-based learning, basic literacy, numeracy, and social skills development.",
      imageSrc: aa
    },
    {
      title: "Primary Education",
      ageGroup: "Ages 6-8",
      description: "Building core academic foundations in literacy, mathematics, science, and arts while fostering curiosity and confidence.",
      imageSrc: aa
    },
    {
      title: "Upper Primary",
      ageGroup: "Ages 9-11",
      description: "Advanced curriculum that prepares students for secondary education with project-based learning and critical thinking skills.",
      imageSrc: aa
    }
  ];

  return (
    <Section light id="programs">
      <div className="container mx-auto m-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div className="max-w-xl ">
            <h2 className="heading-lg mb-4">Our Academic Programs</h2>
            <p className="text-muted-foreground">
              Discover our comprehensive educational programs designed to nurture young minds 
              and prepare them for future success.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/programs">View All Programs</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              ageGroup={program.ageGroup}
              description={program.description}
              imageSrc={program.imageSrc}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;
