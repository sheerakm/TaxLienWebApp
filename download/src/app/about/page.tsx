
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Card className="shadow-xl overflow-hidden">
        <div className="relative h-48 md:h-64 w-full">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Abstract team working or cityscape"
            layout="fill"
            objectFit="cover"
            data-ai-hint="teamwork office"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-center justify-center">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-bold text-primary-foreground">About TaxSaleMap</CardTitle>
              <CardDescription className="text-xl text-primary-foreground/90 mt-2">
                Empowering your journey in tax lien investing.
              </CardDescription>
            </CardHeader>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Target className="mr-3 h-7 w-7" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              At TaxSaleMap, our mission is to demystify the complex world of tax lien investing. We aim to provide accessible educational resources, powerful analytical tools, and a supportive community to help individuals make informed investment decisions.
            </p>
            <p>
              We believe that with the right knowledge and tools, anyone can explore the potential of tax lien investing responsibly and effectively.
            </p>
          </CardContent>
        </Card>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Diverse group of people collaborating"
            width={600}
            height={400}
            className="object-cover"
            data-ai-hint="collaboration meeting"
          />
        </div>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center">
            <Eye className="mr-3 h-7 w-7" /> Our Vision
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 space-y-4">
          <p>
            We envision a future where tax lien investing is more transparent and understandable for everyone. TaxSaleMap strives to be the leading platform for education, research, and community engagement in the tax lien space.
          </p>
          <p>
            By leveraging technology, including AI-powered insights and interactive mapping, we are building a comprehensive ecosystem for aspiring and experienced tax lien investors.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">Meet Our (Placeholder) Team</CardTitle>
          <CardDescription className="text-foreground/80">
            The passionate individuals driving TaxSaleMap forward.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Alice Johnson", role: "Founder & CEO", avatar: "https://placehold.co/100x100.png", hint: "woman portrait" },
            { name: "Bob Williams", role: "Lead Developer", avatar: "https://placehold.co/100x100.png", hint: "man portrait" },
            { name: "Carol Davis", role: "Data Scientist", avatar: "https://placehold.co/100x100.png", hint: "woman tech" },
          ].map((member) => (
            <Card key={member.name} className="p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-sm text-accent">{member.role}</p>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
