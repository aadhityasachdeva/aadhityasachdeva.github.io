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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Askit started with a simple conversation between two friends about everyday needs and untapped potential within student communities. What began as an idea grew into a shared vision: to build a platform where students could <span className="text-primary font-semibold">earn through their skills</span> and <span className="text-primary font-semibold">help one another through peer-to-peer collaboration</span>.
                </p>
                <p>
                  We've gained recognition at top entrepreneurial platforms, cleared Zonals at Eureka!, connected with mentors at iSummit (IIT Bombay), and reached finals of Gujarat i-Hub's S4 initiative, shaping Askit into a growing, student-driven ecosystem where getting work done is just one "ask" away.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/456160af-f008-4b10-8c5e-0a8f01152141.png" 
                  alt="Askit mobile app interface showing category selection"
                  className="w-full max-w-sm rounded-2xl shadow-lg"
                />
              </div>
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
                To empower students across India by creating a platform where they can earn, connect, and grow through real-world tasks while providing accessible, trustworthy help to anyone who needs it.
              </p>
              <p className="text-muted-foreground">
                We believe that peer-to-peer support is the future and Askit is building that future, one task at a time.
              </p>
            </section>

            {/* Our Vision */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-4">
                To build India's first, student-first service marketplace where every skill is valued, every task is an opportunity, and every student becomes part of a powerful support ecosystem.
              </p>
              <p className="text-muted-foreground">
                We envision a world where students don't just survive college, they thrive in it, together.
              </p>
            </section>
          </div>

          {/* Our Progress Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Our Progress
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-xl font-bold font-poppins mb-2 text-primary">MVP v1 launched in May 2025</h3>
                        <p className="text-muted-foreground">Our first version hits the market with core functionality.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-xl font-bold font-poppins mb-2 text-primary">100+ tasks posted</h3>
                        <p className="text-muted-foreground">Real tasks completed through our platform.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-xl font-bold font-poppins mb-2 text-primary">Iterated based on feedback</h3>
                        <p className="text-muted-foreground">MVP v2 now live. We have improved our platform based on user suggestions.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex items-center md:justify-center">
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-xl font-bold font-poppins mb-2 text-primary">Currently testing in Select Cities</h3>
                        <p className="text-muted-foreground">Focused on major student hubs in India.</p>
                      </div>
                    </div>
                  </div>
                </div>
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