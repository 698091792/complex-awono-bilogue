import complex from "../assets/complex .jpg";
import Section from "./Section";
import Button from "./Button";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-glass animate-reveal">
                <img 
                  src={complex} 
                  alt="Sunshine Primary School building" 
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-xl -z-10 " />
              <div className="absolute top-1/4 -right-6 w-32 h-32 bg-secondary rounded-xl -z-10 " />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-sm font-medium mb-2 ">
              Our Mission & Vision
            </div>
            <h2 className="heading-lg animate-reveal">Nurturing Future Leaders Since 2008</h2>
            <p className="body text-muted-foreground animate-reveal">
              At Complex Bilingual school Awono Bilogue, we believe every child has unique talents and abilities. 
              Our mission is to provide a nurturing and stimulating environment where students can 
              develop intellectually, emotionally, and socially.
            </p>
            <p className="body text-muted-foreground animate-reveal">
              Founded on principles of respect, responsibility, and excellence, we're committed to 
              developing well-rounded individuals prepared for future challenges. Our dedicated staff 
              works closely with families to ensure each child receives the support they need to thrive.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div>
                <div className="text-3xl font-bold text-lime-500">250+</div>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-500">25+</div>
                <p className="text-muted-foreground">Expert Teachers</p>
              </div>
            </div>
            
            <div className="pt-4 ">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
