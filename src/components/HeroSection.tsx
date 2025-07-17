import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';

const HeroSection = () => {

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background gradient circles for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up">
            The peer-to-peer service marketplace designed exclusively for college students. 
            <span className="text-primary"> Your skills. Your campus. Your earnings.</span>
          </p>

          {/* Main Tagline */}
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 mb-12 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins">
              <span className="text-foreground">Real Tasks. Real Skills. Real Earnings.</span>
              <br />
              <span className="text-primary">Just Askit.</span>
            </h2>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="flex justify-center mb-12">
            <div className="bg-card border border-border rounded-3xl p-8 max-w-sm mx-auto shadow-glow">
              <div className="bg-dark-surface rounded-2xl aspect-[9/16] flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-primary" />
                <span className="ml-4 text-muted-foreground">App Screen Preview</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 text-lg group animate-glow-pulse"
            >
              Join as a Service Provider
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg"
            >
              Post Your First Task
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;