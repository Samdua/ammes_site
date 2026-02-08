import { Target, Eye, Compass } from "lucide-react";
import ammesLogo from "@/assets/ammes-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <img 
            src={ammesLogo} 
            alt="AMMES Logo" 
            className="h-32 md:h-40 w-auto mx-auto mb-6 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Welcome to AMMES
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Association of Marine and Mechanical Engineering Students
          </p>
          <p className="text-lg md:text-xl text-secondary font-semibold mt-2">
            Regional Maritime University
          </p>
        </div>
      </section>

      {/* Aim, Vision, Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aim */}
            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Our Aim</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To unite Marine and Mechanical Engineering students under one strong professional and academic association, fostering collaboration and excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To build a community of highly skilled and innovative Marine and Mechanical Engineers who will lead the industry into the future.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Compass className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create, enhance and sustain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to Our Community
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Association of Marine and Mechanical Engineering Students (AMMES) is dedicated to creating a vibrant community of aspiring engineers at Regional Maritime University. We are committed to academic excellence, professional growth, and fostering lasting connections among our members.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us in our journey to become the next generation of innovative marine and mechanical engineers, equipped with the skills, knowledge, and network to make a meaningful impact in the industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
