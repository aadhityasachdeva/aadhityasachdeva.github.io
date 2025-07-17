import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight } from 'lucide-react';

const BetaTesting = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Be Part of Our Beta Tribe <Rocket className="inline w-12 h-12 text-primary ml-2" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're currently testing in <span className="text-primary font-semibold">Delhi NCR & Mumbai</span>. 
              Help shape the future of student freelancing.
            </p>
          </div>

          {/* Placeholder for testimonial quote or app render */}
          <div className="mb-12">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-muted-foreground">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg italic">Testimonial Quote Overlay</p>
                <p className="text-sm mt-2">or App Render Placeholder</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 text-lg group animate-glow-pulse"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Sign Up for Beta Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Join 500+ students already testing Askit India
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaTesting;