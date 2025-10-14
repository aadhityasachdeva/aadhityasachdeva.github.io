import { Check, DollarSign, TrendingUp, Clock, Lightbulb, Users, Palette, FileText, LineChart, Search, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  const pricingData = [
    {
      service: "Social Media Management + Content",
      agencyCost: "₹15,000 – ₹50,000",
      askitCost: "Flexible per-task pricing, pay only for what you need"
    },
    {
      service: "Basic SEO Package",
      agencyCost: "₹15,000 – ₹50,000",
      askitCost: "Lower cost with students handling keyword + on-page tasks"
    },
    {
      service: "Content / Blogs / Copywriting",
      agencyCost: "₹2,000 – ₹10,000 per post",
      askitCost: "Affordable, fast turnaround"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Smart, Affordable, and Scalable{' '}
            <span className="text-primary">Support for Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Askit helps MSMEs access skilled students for design, marketing, research, and more — at a fraction of agency costs.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-in"
            onClick={() => window.location.href = 'mailto:support@askitindia.com'}
          >
            Get Started with Askit for MSMEs
          </Button>
        </div>
      </section>

      {/* Section 1: What Askit Can Do */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Askit Can Do for Your <span className="text-primary">MSME</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Pricing Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industry vs. Askit <span className="text-primary">Pricing Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-4 font-semibold text-lg">Service</th>
                  <th className="text-left p-4 font-semibold text-lg">Typical Agency Cost (Monthly)</th>
                  <th className="text-left p-4 font-semibold text-lg">Askit Student Network Estimate</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">{row.service}</td>
                    <td className="p-4">{row.agencyCost}</td>
                    <td className="p-4 text-primary font-medium">{row.askitCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center max-w-4xl mx-auto">
            Agency pricing varies widely by scope and campaign. Askit connects MSMEs with student talent for 30–60% lower costs without compromising creativity or quality.
          </p>
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
            Join Askit's MSME program and connect with talented students who can elevate your marketing, research, and design — affordably.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.location.href = 'mailto:support@askitindia.com'}
          >
            Get Started
          </Button>
          <p className="text-muted-foreground mt-12 text-lg italic">
            At Askit, we believe every business deserves access to great talent — without breaking the bank.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSMEServices;
