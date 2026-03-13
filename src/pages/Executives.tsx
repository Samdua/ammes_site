import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";


interface Executive {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const Executives = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Sample data - easily replaceable
  const executives: Executive[] = [
    {
      id: 1,
      name: "Welbeck Nii Isaac",
      position: "President",
      bio: "Third year Marine Engineering student with a passion for leadership and student advocacy. Leading AMMES with dedication to academic excellence and professional growth.",
      image: "/images/Welbeck.jpeg",
      email: "Isaacwelbeck28@gmail.com",
      linkedin: "https://www.linkedin.com/in/isaac-welbeck-1b2767355",
    },
    {
      id: 2,
      name: "Darine N. Jeawley",
      position: "Vice President",
      bio: "Dedicated Marine Engineering student committed to supporting our association's initiatives and ensuring smooth operations across all departments.",
      image: "/images/Darine.jpeg",
      email: "jeawleydarine97@gmail.com",
      linkedin: "https://www.linkedin.com/in/darine-n-jeawley-817188252",
    },
    {
      id: 3,
      name: "Samor-Dua Roderick Nana Kofi",
      position: "General Secretary",
      bio: "Organized and detail-oriented student managing all official documentation and communication for AMMES with precision and professionalism.",
      image: "/images/roderick.jpeg",
      email: "roderick.samor-dua@st.rmu.edu.gh",
      linkedin: "https://www.linkedin.com/in/roderick-samor-dua-1b772b302",
    },
    {
      id: 4,
      name: "Benedict K.w. Bundoo II",
      position: "Organizing Secretary",
      bio: "Creative event planner coordinating all AMMES activities, workshops, and social events to build a vibrant engineering community.",
      image: "/images/Benedict.jpeg",
      email: "bundooiibenedict@gmail.com",
      linkedin: "https://www.linkedin.com/in/benedict-kw-bundoo-ii",
    },
    {
      id: 5,
      name: "Michael C. Jatta",
      position: "Financial Treasurer",
      bio: "Responsible for managing AMMES finances, ensuring transparency and accountability in all financial matters and dues collection.",
      image: "/images/Michael.jpeg",
      email: "",
      linkedin: "",
    },
    {
      id: 6,
      name: "Nana Kofi Sakyi Ofori Junior",
      position: "Deputy General Secretary",
      bio: "Assists the General Secretary in managing administrative duties and ensuring effective communication within the association.",
      image: "/images/Nk.jpeg",
      email: "",
      linkedin: "",
    },{
      id: 8,
      name: "Michael Adu",
      position: "Deputy Organizing Secretary",
      bio: "Supports the planning and coordination of events and activities to ensure smooth execution.",
      image: "",
      email: "",
      linkedin: "",
    },{
      id: 8,
      name: "Theodora Bosompem Manu",
      position: "Deputy Financial Treasurer",
      bio: "Assists in managing the association’s finances, keeping accurate financial records, and supporting budget planning.",
      image: "/images/Theodora.jpeg",
      email: "",
      linkedin: "",
    },
    {
      id: 9,
      name: "Adwoa Etwire Amoh",
      position: "Women Commissioner",
      bio: "Represents and promotes the interests, welfare, and active participation of female members in the association.",
      image: "/images/Adwoa.jpeg",
      email: "",
      linkedin: "",
    },
    {
      id: 10,
      name: "Festus Kudiabor",
      position: "AMMES Parliamentrary Representative",
      bio: "Serves as a link between the association and student parliament",
      image: "/images/Festus.jpeg",
      email: "festusselasie244@gmail.com",
      linkedin: "https://www.linkedin.com/in/festus-kudiabor?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Executive Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders driving AMMES forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {executives.map((exec, index) => (
            <Card
              key={exec.id}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(exec.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <p className="text-sm font-medium">{exec.bio}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-1">{exec.name}</h3>
                <p className="text-secondary font-semibold mb-3">{exec.position}</p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a
                    href={`mailto:${exec.email}`}
                    className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={exec.linkedin}
                    className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Executives;
