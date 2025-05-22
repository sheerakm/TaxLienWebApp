import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, MapPin, BarChart2, Brain, Apple, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-primary to-accent rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Welcome to Tax Lien Navigator
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your comprehensive guide to understanding and navigating the world of tax lien investing. Explore educational resources, visualize data on our interactive map, and test your strategies with our simulation tool.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<BookOpen className="h-10 w-10 text-primary" />}
          title="Educational Resources"
          description="Deepen your understanding of tax liens, from basic concepts to advanced strategies. Perfect for beginners and seasoned investors alike."
          link="/learn"
          linkText="Start Learning"
        />
        <FeatureCard
          icon={<MapPin className="h-10 w-10 text-primary" />}
          title="Interactive Map"
          description="Visualize tax lien data across different regions. Identify potential investment opportunities with our easy-to-use map interface."
          link="/map"
          linkText="Explore Map"
        />
        <FeatureCard
          icon={<BarChart2 className="h-10 w-10 text-primary" />}
          title="Investment Simulator"
          description="Test your investment strategies in a risk-free environment. Learn the potential outcomes of different approaches before investing real capital."
          link="/simulate"
          linkText="Try Simulator"
        />
        <FeatureCard
          icon={<Brain className="h-10 w-10 text-primary" />}
          title="AI Concept Summarizer"
          description="Get quick and concise AI-powered summaries of complex tax lien concepts. Enhance your learning and understanding effortlessly."
          link="/summarizer"
          linkText="Use Summarizer"
        />
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">What are Tax Liens?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-foreground/80">
            A tax lien is a legal claim placed by a government entity against a property when the owner fails to pay property taxes. Investing in tax liens can be an opportunity for individuals to earn returns, typically through interest payments or, in some cases, by acquiring the property. However, it involves specific processes, risks, and regulations that vary by jurisdiction. Our platform aims to demystify these aspects for you.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Download Apps Section */}
      <section className="mt-16 py-16 bg-muted rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Take Tax Lien Navigator On The Go
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* iOS App Card */}
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <Apple className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">Download for iOS</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6 px-2">
                  Access all features, track investments, and stay updated on your iPhone or iPad.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Button asChild size="lg" className="w-full max-w-xs">
                  <Link href="#"> {/* Placeholder link */}
                    <Apple className="mr-2 h-5 w-5" /> App Store
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Android App Card */}
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <Smartphone className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">Download for Android</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-3 px-2">
                  Our Android application is currently under construction. We appreciate your patience!
                </p>
                <Badge variant="secondary" className="text-sm py-1 px-3 mb-6">
                  Under Construction
                </Badge>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Button asChild size="lg" disabled className="w-full max-w-xs">
                  <Link href="#"> {/* Placeholder link */}
                    <Smartphone className="mr-2 h-5 w-5" /> Google Play (Soon)
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center text-center">
        {icon}
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground text-center">{description}</p>
      </CardContent>
      <CardContent className="text-center">
        <Button asChild variant="outline">
          <Link href={link}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
