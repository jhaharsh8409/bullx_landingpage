import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleDownload = () => {
    const downloadSection = document.getElementById('download');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12 xl:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="@container">
          <div className="flex flex-col @lg:flex-row items-center gap-8 xl:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center @lg:text-left space-y-6 xl:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl xl:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">Trading Journal App</span>
                </h1>
                <p className="text-xl xl:text-2xl text-muted-foreground font-medium">
                  Track, Analyze, and Improve Your Trading Performance
                </p>
              </div>
              
              <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto @lg:mx-0">
                Take control of your trading journey with our comprehensive journal app. 
                Record every trade, analyze patterns, and make data-driven decisions to 
                maximize your profits and minimize losses.
              </p>
              
              <div className="flex flex-col @sm:flex-row gap-4 justify-center @lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-base xl:text-lg px-6 xl:px-8 py-5 xl:py-6"
                  onClick={handleDownload}
                >
                  Download Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base xl:text-lg px-6 xl:px-8 py-5 xl:py-6"
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    featuresSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 w-full max-w-lg @lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/ca6e1164-162f-46a0-b0b0-6df3115a82a5.jpg"
                  alt="Trading Journal App Dashboard Interface"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
