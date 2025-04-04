import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const leadershipTeam = [
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
  }
];

const allStaff = [
  ...leadershipTeam,
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
  }
];

export default function TeamSection() {
  const [viewAll, setViewAll] = useState(false);
  const teamMembers = viewAll ? allStaff : leadershipTeam;

  return (
    <section id="team" className="light">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">
            {viewAll ? "Meet Our Staff" : "Meet Our Leadership Team"}
          </h2>
          <p className="text-muted-foreground">
            {viewAll
              ? "Our dedicated staff members ensure a supportive learning environment for all students."
              : "Our experienced educational leaders are dedicated to creating a nurturing and inspiring learning environment for all students."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
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
        <div className="text-center mt-12">
          <Button onClick={() => setViewAll(!viewAll)} variant="outline">
            {viewAll ? "Back to Leadership Team" : "View All Staff Members"}
          </Button>
        </div>
      </div>
    </section>
  );
}
