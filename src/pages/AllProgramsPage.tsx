import { Link } from "react-router-dom";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import cc from "../assets/cc.jpg";

const programs = [
  {
    title: "Early Years Foundation",
    ageGroup: "Ages 4-5",
    description: "A nurturing start to education focusing on play-based learning, basic literacy, numeracy, and social skills development.",
    imageSrc: cc
  },
  {
    title: "Primary Education",
    ageGroup: "Ages 6-8",
    description: "Building core academic foundations in literacy, mathematics, science, and arts while fostering curiosity and confidence.",
    imageSrc: cc
  },
  {
    title: "Upper Primary",
    ageGroup: "Ages 9-11",
    description: "Advanced curriculum that prepares students for secondary education with project-based learning and critical thinking skills.",
    imageSrc: cc
  },
  {
    title: "Extracurricular Activities",
    ageGroup: "All Ages",
    description: "A variety of clubs and sports to encourage creativity, teamwork, and leadership skills outside the classroom.",
    imageSrc: cc
  },
  {
    title: "STEM Enrichment Program",
    ageGroup: "Ages 7-11",
    description: "Hands-on science, technology, engineering, and math activities that develop problem-solving and innovation skills.",
    imageSrc: cc
  },
  {
    title: "Transport",
    ageGroup: "All Ages",
    description: "Awono Bilogue has developed bus systems that runs across the city of obala. These buses are of good standard and has good quality. It is used to transport students  from their homes to school, from Mondays to Fridays and exceptionally during excursions and other distant events/activities. Interested parents are required to subscrive early enough to enable proper management of this service which will start 5 days after the resuming of school. Transportation fares are paid in cash in school and non-refundable. NB: Additional charges may apply according to the distances from the road",
    imageSrc: cc
  }
];

const AllProgramsPage = () => {
  return (
    <Section light id="all-programs">
      <div className="container mx-auto m-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-lg">All Academic Programs</h2>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-subtle border p-6">
              <img 
                src={program.imageSrc} 
                alt={program.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-xs font-medium mb-3">
                {program.ageGroup}
              </div>
              <h3 className="heading-sm mb-2">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </Section>
  );
};

export default AllProgramsPage;
