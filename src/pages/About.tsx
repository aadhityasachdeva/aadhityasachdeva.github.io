import { ArrowLeft, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              About <span className="text-primary">Askit</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering students across India through peer-to-peer collaboration and skill monetization
            </p>
          </div>

          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Askit started with a simple conversation between two friends about everyday needs and untapped potential within student communities. What began as an idea grew into a shared vision: to build a platform where students could <span className="text-primary font-semibold">earn through their skills</span> and <span className="text-primary font-semibold">help one another through peer-to-peer collaboration</span>.
              </p>
              <p>
                We've gained recognition at top entrepreneurial platforms, cleared Zonals at Eureka!, connected with mentors at iSummit (IIT Bombay), and reached finals of Gujarat i-Hub's S4 initiative — shaping Askit into a growing, student-driven ecosystem where getting work done is just one "ask" away.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Our Mission */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                To empower students across India by creating a platform where they can earn, connect, and grow through real-world tasks — while providing accessible, trustworthy help to anyone who needs it.
              </p>
              <p className="text-muted-foreground">
                We believe that peer-to-peer support is the future — and Askit is building that future, one task at a time.
              </p>
            </section>

            {/* Our Vision */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-4">
                To build India's first, student-first service marketplace — where every skill is valued, every task is an opportunity, and every student becomes part of a powerful support ecosystem.
              </p>
              <p className="text-muted-foreground">
                We envision a world where students don't just survive college — they thrive in it, together.
              </p>
            </section>
          </div>

          {/* How It Works - Mobile Interface Section */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                  Need help with anything?
                </h2>
                <p className="text-xl text-muted-foreground mb-2">How does it work?</p>
                <p className="text-lg text-primary font-semibold">Select a category and post a task</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {[
                  "Home Work & Assignments",
                  "Office Work", 
                  "Lift-Move-Pack",
                  "Tutoring",
                  "Computer IT",
                  "Cleaning",
                  "Video & Editing",
                  "Photography", 
                  "Design",
                  "Delivery & Errands",
                  "Pet Care",
                  "Gardening & Plant Care"
                ].map((category) => (
                  <div key={category} className="bg-background border border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-foreground">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              The Askit Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Aryan Vaid */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <img 
                  src="/lovable-uploads/98044be0-7dee-47df-826d-1e16088c46a8.png" 
                  alt="Aryan Vaid" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold font-poppins mb-2">Aryan Vaid</h3>
                <p className="text-primary font-semibold mb-4">The Co-founder</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Pursuing Bachelors in Business Administration from Narsee Monjee Institute of Management Studies, Mumbai
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.instagram.com/aryanvaid01/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aryan-vaid-23b859289/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Aadhitya Sachdeva */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <img 
                  src="/lovable-uploads/d5ea9db7-a032-4f9f-bd1d-59a01d0994fb.png" 
                  alt="Aadhitya Sachdeva" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold font-poppins mb-2">Aadhitya Sachdeva</h3>
                <p className="text-primary font-semibold mb-4">The Co-founder</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Pursuing B.Tech from Amity University, Noida
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.instagram.com/aadhitya01/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aadhitya-sachdeva-03444a331/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Rehan Haider */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <img 
                  src="/lovable-uploads/6b82866b-2e6c-4931-a53e-175c54c5beaf.png" 
                  alt="Rehan Haider" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold font-poppins mb-2">Rehan Haider</h3>
                <p className="text-primary font-semibold mb-4">Design Lead</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Pursuing B.Des from National Institute of Design, Ahmedabad
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.instagram.com/fsnayer/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rehanhaider7/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;