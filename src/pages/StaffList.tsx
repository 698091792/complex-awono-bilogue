import { Link } from "react-router-dom";
import Button from "@/components/Button";

const allStaff = [
  {
    name: "Dr. Emily Wilson",
    role: "Founder",
    image: "https://source.unsplash.com/random/400x400/?headshot,woman",
    description:
      "With over 20 years of experience in education, Dr. Wilson leads our school with passion and vision, ensuring every child reaches their full potential."
  },
  {
    name: "Michael Bennett",
    role: "Principal",
    image: "https://source.unsplash.com/random/400x400/?headshot,man",
    description:
      "Mr. Bennett oversees our academic programs and student services, bringing innovative approaches to curriculum development and student support."
  },
  {
    name: "Sarah Martinez",
    role: "Director of Student Affairs",
    image: "https://source.unsplash.com/random/400x400/?headshot,woman,2",
    description:
      "Ms. Martinez creates a positive school culture, coordinating extracurricular activities and ensuring student wellbeing and success."
  },
  {
    name: "James Parker",
    role: "Math Teacher",
    image: "https://source.unsplash.com/random/400x400/?headshot,man,2",
    description: "Passionate about numbers and problem-solving, Mr. Parker makes math fun and engaging for students."
  },
  {
    name: "Laura Simmons",
    role: "Science Teacher",
    image: "https://source.unsplash.com/random/400x400/?headshot,woman,3",
    description: "Ms. Simmons inspires curiosity in science, making complex concepts accessible and exciting."
  },
  {
    name: "Laura Simmons",
    role: "Science Teacher",
    image: "https://source.unsplash.com/random/400x400/?headshot,woman,3",
    description: "Ms. Simmons inspires curiosity in science, making complex concepts accessible and exciting."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="light">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="heading-lg mb-4">Meet Our Staff</h2>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          
        </div>
        <p className="text-muted-foreground mb-10">
            Our dedicated staff members ensure a supportive learning environment for all students.
          </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStaff.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-subtle border border-border/50"
            >
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-lime-500 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
