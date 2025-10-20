import { Check, DollarSign, TrendingUp, Clock, Lightbulb, Users, Palette, FileText, LineChart, Search, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PricingChart from '@/components/PricingChart';
import heroImage from '@/assets/msme-hero-collaboration.png';
import bgPattern from '@/assets/msme-background-pattern.png';

const MSMEServices = () => {
  const services = [
    {
      icon: Palette,
      title: "Creative & Design Support",
      description: "Professional logos, social media posts, banners, and more"
    },
    {
      icon: FileText,
      title: "Content Creation & Copywriting",
      description: "Engaging blogs, captions, product descriptions, and website copy"
    },
    {
      icon: LineChart,
      title: "Digital Marketing Essentials",
      description: "SEO optimization, social media management, and paid ads setup"
    },
    {
      icon: Search,
      title: "Research & Administrative Tasks",
      description: "Market studies, competitor analysis, presentations, and data work"
    },
    {
      icon: Zap,
      title: "Flexible & Tailored Packages",
      description: "Custom work solutions with no long-term retainers required"
    }
  ];

  const valuePoints = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Pay less than agency retainers with no hidden overheads"
    },
    {
      icon: TrendingUp,
      title: "Flexible Scaling",
      description: "No long-term commitments; scale up or down as needed"
    },
    {
      icon: Clock,
      title: "Faster Turnaround",
      description: "Students deliver quicker with agile, modern timelines"
    },
    {
      icon: Lightbulb,
      title: "Fresh Creativity & Innovation",
      description: "Modern, youth-driven design styles and perspectives"
    },
    {
      icon: Check,
      title: "Transparent Pricing",
      description: "Clear, task-based rates visible upfront"
    },
    {
      icon: Users,
      title: "Local Focus & Community",
      description: "Students understand your audience and cultural tone"
    }
  ];


  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center animate-pulse"
          style={{ backgroundImage: `url(${bgPattern})` }}
        />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="text-left space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Elevate Your Business with{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  India's Freshest Talent
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Affordable Design, Marketing & Research—
                <span className="text-accent"> No Agency Price Tag.</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Connect with skilled students who bring modern creativity, fresh perspectives, and professional quality at up to 60% lower cost than traditional agencies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 shadow-neon animate-glow-pulse bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                  onClick={() => window.location.href = 'mailto:support@askitindia.com'}
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 border-2"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Pricing
                </Button>
              </div>
              {/* Key stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-accent">60%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Skilled Students</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">24hrs</div>
                  <div className="text-sm text-muted-foreground">Quick Turnaround</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Young talented students collaborating on business projects"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Askit Can Do */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Askit Can Do for Your <span className="text-primary">Business</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your business with skilled student talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-neon hover:scale-105 transition-all duration-300 border-border/50 hover:border-accent bg-card/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-neon">
                    <service.icon className="w-8 h-8 text-accent group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Pricing Comparison */}
      <section id="pricing" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <PricingChart />
        </div>
      </section>

      {/* Section 3: How Askit Creates Value */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Askit Creates Value for <span className="text-primary">MSMEs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePoints.map((point, index) => (
              <div key={index} className="flex gap-4 items-start animate-fade-in">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Askit */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Askit Over an <span className="text-primary">Agency</span>
          </h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6 text-center">
                <p className="text-2xl font-bold">
                  Agencies charge ₹20,000–₹40,000+ monthly for Business Development services.
                </p>
                <p className="text-3xl font-bold text-primary">
                  Askit delivers similar value at up to 60% lower cost.
                </p>
                <p className="text-lg text-muted-foreground">
                  By hiring freelancers through Askit, you only pay for what you want. You receive quality deliverables that match your expectations no wasted budget on unnecessary services or long-term commitments.
                </p>
                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    Social proof and testimonials coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Without the <span className="text-primary">Agency Price Tag?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join Askit's MSME program and connect with talented students who can elevate your marketing, research, and design affordably.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.location.href = 'mailto:support@askitindia.com'}
          >
            Get Started
          </Button>
          <p className="text-muted-foreground mt-12 text-lg italic">
            At Askit, we believe every business deserves access to great talent without breaking the bank.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSMEServices;
