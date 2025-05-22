
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPinIcon, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <Card className="shadow-xl overflow-hidden">
         <div className="relative h-48 md:h-64 w-full">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Abstract communication or network graphic"
            layout="fill"
            objectFit="cover"
            data-ai-hint="communication network"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-center justify-center">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-bold text-primary-foreground">Get In Touch</CardTitle>
              <CardDescription className="text-xl text-primary-foreground/90 mt-2">
                We'd love to hear from you!
              </CardDescription>
            </CardHeader>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80">
            <div className="flex items-start space-x-3">
              <MapPinIcon className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Our Office</h3>
                <p>123 Innovation Drive</p>
                <p>Tech City, TX 75001</p>
                <p>United States</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Email Us</h3>
                <a href="mailto:info@taxsalemap.com" className="hover:text-accent transition-colors">
                  info@taxsalemap.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Call Us</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible. (Form is for demonstration only)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" className="mt-1 bg-card" disabled />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="mt-1 bg-card" disabled />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground/90">Subject</Label>
                <Input id="subject" type="text" placeholder="Regarding..." className="mt-1 bg-card" disabled />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/90">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} className="mt-1 bg-card" disabled />
              </div>
              <Button type="submit" className="w-full" disabled>
                <Send className="mr-2 h-5 w-5" />
                Send Message (Disabled)
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
       <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg shadow-inner overflow-hidden">
                 <Image 
                  src="https://placehold.co/800x450.png" 
                  alt="Placeholder map showing office location" 
                  width={800} 
                  height={450}
                  className="w-full h-full object-cover"
                  data-ai-hint="map location"
                />
            </div>
             <p className="text-sm text-muted-foreground mt-2 text-center">
                Note: The map above is a placeholder.
              </p>
          </CardContent>
        </Card>
    </div>
  );
}
