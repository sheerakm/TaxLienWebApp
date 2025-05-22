
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground mt-auto">
      <Separator />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Tax Sale Map</h3>
            <p className="text-sm text-muted-foreground">
              Your guide to navigating tax lien investments.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} TaxSaleMap. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link href="/simulate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Simulate
                </Link>
              </li>
              <li>
                <Link href="/summarizer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Summarizer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy (Placeholder)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service (Placeholder)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
