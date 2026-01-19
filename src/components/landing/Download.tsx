import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Apple, Smartphone } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="py-16 xl:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardContent className="p-8 xl:p-12">
            <div className="@container">
              <div className="flex flex-col @lg:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center @lg:text-left space-y-4">
                  <h2 className="text-3xl xl:text-4xl font-bold tracking-tight">
                    Ready to Elevate Your Trading?
                  </h2>
                  <p className="text-base xl:text-lg text-muted-foreground">
                    Download Trading Journal App today and start making smarter, 
                    more informed trading decisions.
                  </p>
                </div>
                
                {/* Download Buttons */}
                <div className="flex flex-col gap-4 w-full @lg:w-auto min-w-[280px]">
                  <Button 
                    size="lg" 
                    className="w-full text-base xl:text-lg py-6 xl:py-7"
                    onClick={() => window.open('https://apps.apple.com', '_blank')}
                  >
                    <Apple className="mr-3 h-6 w-6" />
                    Download for iOS
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full text-base xl:text-lg py-6 xl:py-7"
                    onClick={() => window.open('https://play.google.com', '_blank')}
                  >
                    <Smartphone className="mr-3 h-6 w-6" />
                    Download for Android
                  </Button>
                </div>
              </div>
            </div>
            
            {/* App Preview Images */}
            <div className="mt-12 @container">
              <div className="grid grid-cols-1 @md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <img 
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/90b767ce-cf60-49c2-b593-19631545af3e.jpg"
                    alt="Trading app mobile interface with financial graphs"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <img 
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/5993988e-d65a-4b6c-a586-37bb992202e8.jpg"
                    alt="Stock market trading analysis on smartphone"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
