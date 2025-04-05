
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ScrollToTop from "@/components/ScrollToTop";
import { Check, Award, Heart, Users } from "lucide-react";
import room from "../assets/room.jpg"
import c from "../assets/c.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-lime-500 py-20 md:py-32 px-6">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6 ">About Our School</h1>
              <p className="text-xl text-white ">
                Discover the values, mission, and people that make Awono Bilogue
                a special place for learning and growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <Section>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-sm font-medium mb-2 ">
                    Our Mission
                  </div>
                  <h2 className="heading-lg animate-reveal">Inspiring Future Leaders</h2>
                  <p className="body text-muted-foreground">
                    At Awono Bilogue School, we believe that every child has the potential to be 
                    a leader and make a positive impact on the world. Our mission is to provide a 
                    nurturing and stimulating environment where children can develop their unique 
                    talents and abilities while fostering a love for learning.
                  </p>
                  <p className="body text-muted-foreground">
                    We aim to develop well-rounded individuals who are academically prepared, 
                    socially responsible, and confident in their abilities to face future challenges.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-3 animate-reveal">
                      <div className="bg-primary/10 p-1 rounded-full text-lime-500 mt-1">
                        <Check size={16} />
                      </div>
                      <p className="text-foreground">Provide excellent education in a supportive environment</p>
                    </div>
                    <div className="flex items-start space-x-3 ">
                      <div className="bg-primary/10 p-1 rounded-full text-lime-500 mt-1">
                        <Check size={16} />
                      </div>
                      <p className="text-foreground">Foster creativity, critical thinking, and problem-solving</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full text-lime-500 mt-1">
                        <Check size={16} />
                      </div>
                      <p className="text-foreground">Promote values of respect, responsibility, and integrity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-glass">
                    <img 
                      src={room}
                      alt="Students learning in a classroom" 
                      className="w-full aspect-[2/2] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* History */}
        <Section light>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-sm font-medium mb-2">
                Our History
              </div>
              <h2 className="heading-lg mb-4">A Tradition of Excellence Since 2008</h2>
              <p className="text-muted-foreground">
                Tracing our journey from a small community school to one of the region's most respected educational institutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="grid md:grid-cols-[1fr_3fr] gap-6 items-start animate-reveal">
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-lime-500">2008</div>
                    <div className="text-sm text-muted-foreground">Founding Year</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
                    <h3 className="heading-sm mb-2">Our Beginning</h3>
                    <p className="text-muted-foreground">
                      Awono Bilogue School was founded by D
                      Mr. Tanga Awono, a visionary educator with 
                      a passion for creating a new kind of learning environment. Starting with just three 
                      classrooms and 45 students, the school quickly established a reputation for excellence.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[1fr_3fr] gap-6 items-start animate-reveal">
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-lime-500">2012</div>
                    <div className="text-sm text-muted-foreground">Expansion</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
                    <h3 className="heading-sm mb-2">Growing Community</h3>
                    <p className="text-muted-foreground">
                      After four successful years, we expanded our campus to include a new wing with 
                      specialized facilities for arts, music, and science. Enrollment doubled, and 
                      we welcomed many talented educators to our growing school.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[1fr_3fr] gap-6 items-start animate-reveal">
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-lime-500">2018</div>
                    <div className="text-sm text-muted-foreground">Innovation</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
                    <h3 className="heading-sm mb-2">Embracing Technology</h3>
                    <p className="text-muted-foreground">
                      We launched our innovative STEAM program, integrating technology across the curriculum. 
                      Our new media center and computer lab provided students with access to cutting-edge 
                      educational tools and resources.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[1fr_3fr] gap-6 items-start animate-reveal">
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-lime-500">Today</div>
                    <div className="text-sm text-muted-foreground">Current Era</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
                    <h3 className="heading-sm mb-2">Thriving Community</h3>
                    <p className="text-muted-foreground">
                      Today, Awono Bilogue is home to over 250 students and 25 dedicated staff members. 
                      Our commitment to educational excellence, innovation, and community remains unwavering 
                      as we continue to grow and evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Values */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-sm font-medium mb-2">
                Our Core Values
              </div>
              <h2 className="heading-lg mb-4">The Principles That Guide Us</h2>
              <p className="text-muted-foreground">
                These core values are embedded in our curriculum and daily interactions, helping to shape 
                responsible, confident, and compassionate young people.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50 flex flex-col items-start animate-reveal">
                <div className="bg-primary/10 p-3 rounded-lg text-lime-500 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="heading-sm mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in all aspects of education, challenging students to achieve 
                  their personal best in academics, arts, athletics, and character development.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50 flex flex-col items-start animate-reveal">
                <div className="bg-primary/10 p-3 rounded-lg text-lime-500 mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="heading-sm mb-2">Respect</h3>
                <p className="text-muted-foreground">
                  We foster mutual respect among students, staff, and families, appreciating diversity 
                  and treating others with kindness, courtesy, and consideration.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50 flex flex-col items-start animate-reveal">
                <div className="bg-primary/10 p-3 rounded-lg text-lime-500 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="heading-sm mb-2">Community</h3>
                <p className="text-white">
                  We create a supportive community where students feel valued, safe, and connected, 
                  collaborating with families to ensure each child's success.
                </p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Team */}
        <Section light>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-lime-500 text-sm font-medium mb-2">
                Our Leadership
              </div>
              <h2 className="heading-lg mb-4">Meet Our Leadership Team</h2>
              <p className="text-muted-foreground">
                Our experienced educational leaders are dedicated to creating a nurturing 
                and inspiring learning environment for all students.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50 ">
                <div className="aspect-square">
                  <img 
                    src={c} 
                    alt="Dr. Emily Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-1">Dr. Emily Wilson</h3>
                  <p className="text-lime-500 mb-3"> Founder</p>
                  <p className="text-muted-foreground text-sm">
                    With over 20 years of experience in education, Dr. Wilson leads our school with 
                    passion and vision, ensuring every child reaches their full potential.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50 ">
                <div className="aspect-square">
                  <img 
                    src={c}
                    alt="Michael Bennett" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-1">Michael Bennett</h3>
                  <p className="text-lime-500 mb-3">Principal</p>
                  <p className="text-muted-foreground text-sm">
                    Mr. Bennett oversees our academic programs and student services, bringing innovative 
                    approaches to curriculum development and student support.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50">
                <div className="aspect-square">
                  <img 
                    src={c}
                    alt="Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-1">Sarah Martinez</h3>
                  <p className="text-lime-500 mb-3">Director of Student Affairs</p>
                  <p className="text-muted-foreground text-sm">
                    Ms. Martinez creates a positive school culture, coordinating extracurricular activities 
                    and ensuring student wellbeing and success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-reveal">
              <Button href="/team" variant="primary">
                View All Staff Members
              </Button>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section className="bg-lime-500 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="heading-lg">Ready to Join Our Community?</h2>
              <p className="text-white text-lg ">
                Schedule a tour of our campus and learn more about enrollment opportunities for your child.
              </p>
              <div className="pt-4">
                <Button 
                  href="/contact" 
                  className="bg-white text-black hover:bg-yellow-400"
                  size="lg"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
