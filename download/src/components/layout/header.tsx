
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Briefcase, Users, Map, BarChart2, Brain, Info, Mail } from 'lucide-react'; // Added Info and Mail

const navItems = [
  { href: '/', label: 'Overview', icon: <Briefcase className="md:hidden h-5 w-5" /> },
  { href: '/learn', label: 'Learn', icon: <Users className="md:hidden h-5 w-5" /> },
  { href: '/map', label: 'Map', icon: <Map className="md:hidden h-5 w-5" /> },
  { href: '/simulate', label: 'Simulate', icon: <BarChart2 className="md:hidden h-5 w-5" /> },
  { href: '/summarizer', label: 'Summarizer', icon: <Brain className="md:hidden h-5 w-5" /> },
  { href: '/about', label: 'About', icon: <Info className="md:hidden h-5 w-5" /> }, // New About Us link
  { href: '/contact', label: 'Contact', icon: <Mail className="md:hidden h-5 w-5" /> }, // New Contact Us link
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Image 
            src="/logo.svg" 
            alt="Tax Sale Map Logo" 
            width={32} 
            height={32} 
            className="h-8 w-8" 
https://chatgpt.com/c/682e8ad4-fe44-8006-94eb-37215e051126          />
          <span className="text-xl font-semibold hidden sm:inline">Tax Sale Map</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-2 py-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  title={item.label} // Added title for accessibility on hover for icon-only view
                >
                  {item.icon}
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
