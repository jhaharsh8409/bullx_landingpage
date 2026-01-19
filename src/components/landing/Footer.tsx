import { Separator } from '@/components/ui/separator';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="@container">
          <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">BULLX</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted companion for tracking and improving trading performance.
              </p>
            </div>
            
            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-primary transition-colors">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="mailto:contact@bullx.app" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col @md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} BULLX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
