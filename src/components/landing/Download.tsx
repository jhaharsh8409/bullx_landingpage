import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Download as DownloadIcon, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Download() {
  const handleDownloadAPK = () => {
  window.location.href =
    'https://github.com/jhaharsh8409/bull-apk/releases/download/v1.0.0/bullx.apk';
};


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
                    Download BULLX today and start making smarter, 
                    more informed trading decisions.
                  </p>
                </div>
                
                {/* Download Button */}
                <div className="flex flex-col gap-4 w-full @lg:w-auto min-w-[280px]">
                  <Button 
                    size="lg" 
                    className="w-full text-base xl:text-lg py-6 xl:py-7"
                    onClick={handleDownloadAPK}
                  >
                    <DownloadIcon className="mr-3 h-6 w-6" />
                    Download APK
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Smartphone className="h-4 w-4" />
                    <span>For Android Devices</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Installation Instructions */}
            <Alert className="mt-8 bg-muted/50 border-primary/20">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Installation Note:</strong> You may need to enable "Install from Unknown Sources" 
                in your Android settings to install this app. Go to Settings → Security → Unknown Sources 
                and toggle it on before installing.
              </AlertDescription>
            </Alert>
            
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
