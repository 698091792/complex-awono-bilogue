
import Section from "./Section";
import { Sparkles, BookOpen, Users, Calendar, Award, Heart } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50 transition-all duration-300 hover:shadow-glass hover:scale-[1.02] animate-reveal">
      <div className="bg-primary/10 text-lime-500 p-3 w-fit rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "Creative Learning",
      description: "Our innovative curriculum sparks imagination and fosters creative thinking in every child."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Comprehensive Education",
      description: "Balanced academic approach focusing on core subjects and diverse extracurricular activities."
    },
    {
      icon: <Users size={24} />,
      title: "Small Class Sizes",
      description: "Personalized attention with low student-to-teacher ratios for optimal learning outcomes."
    },
    {
      icon: <Calendar size={24} />,
      title: "Flexible Schedules",
      description: "Accommodating programs designed for busy families with before and after school options."
    },
    {
      icon: <Award size={24} />,
      title: "Qualified Teachers",
      description: "Experienced educators dedicated to guiding students toward academic excellence."
    },
    {
      icon: <Heart size={24} />,
      title: "Supportive Community",
      description: "A warm, inclusive environment where every child feels valued and supported."
    }
  ];

  return (
    <Section light id="features">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="heading-lg mb-4 animate-reveal">What Makes Us Special</h2>
          <p className="text-muted-foreground animate-reveal">
            Our approach to education combines academic excellence with character development 
            in a supportive learning environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
