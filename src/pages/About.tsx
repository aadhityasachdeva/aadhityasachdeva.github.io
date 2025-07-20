import { ArrowLeft } from 'lucide-react';
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
                Askit started with a simple late-night conversation between two friends — a discussion about everyday needs and the untapped potential within student communities. What began as an idea soon grew into a shared vision: to build a platform where students could <span className="text-primary font-semibold">earn through their skills</span> and <span className="text-primary font-semibold">help one another through peer-to-peer collaboration</span>.
              </p>
              <p className="mb-6">
                Over the past year, Askit has gained momentum through recognition and validation at some of the country's top entrepreneurial platforms. We <span className="text-primary font-semibold">cleared Zonals at Eureka!, Asia's largest business model competition</span>, and connected with mentors and incubators at <span className="text-primary font-semibold">iSummit</span>, hosted by <span className="text-primary font-semibold">IIT Bombay's E-Cell</span>. We also reached the final round of the <span className="text-primary font-semibold">Startup Srujan Seed Support (S4)</span> initiative under <span className="text-primary font-semibold">Gujarat i-Hub</span>, a flagship startup grant program supported by the <span className="text-primary font-semibold">Ministry of Commerce & Industry, Government of India</span>.
              </p>
              <p>
                These milestones, along with our relentless motivation and user-first approach, have shaped Askit into what it is today — a growing, student-driven ecosystem where getting work done is just one "ask" away.
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

          {/* Progress Section */}
          <section className="mb-16">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/4005c8a2-4b73-4ef9-8eca-7016690d7fe2.png" 
                alt="Our Progress So Far" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Core Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              About the Core Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Aryan Vaid */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">AV</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">Aryan Vaid</h3>
                <p className="text-primary font-semibold mb-4">The Co-founder</p>
                <p className="text-muted-foreground text-sm">
                  Pursuing Bachelors in Business Administration from Narsee Monjee Institute of Management Studies, Mumbai
                </p>
              </div>

              {/* Aadhitya Sachdeva */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">AS</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">Aadhitya Sachdeva</h3>
                <p className="text-primary font-semibold mb-4">The Co-founder</p>
                <p className="text-muted-foreground text-sm">
                  Pursuing B.Tech from Amity University, Noida
                </p>
              </div>

              {/* Rehan Haider */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">RH</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">Rehan Haider</h3>
                <p className="text-primary font-semibold mb-4">Design Lead</p>
                <p className="text-muted-foreground text-sm">
                  Pursuing B.Des from National Institute of Design, Ahmedabad
                </p>
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