import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCopy, AlertTriangle, TrendingUp, Scale } from "lucide-react";
import Link from "next/link";

const educationalTopics = [
  {
    id: "what-is-tax-lien",
    title: "What is a Tax Lien?",
    icon: <BookCopy className="h-5 w-5 mr-2 text-primary" />,
    content: "A tax lien is a legal claim by a government entity (like a county or municipality) against a property because the owner has failed to pay their property taxes. This lien gives the government the right to recover the unpaid taxes. If the taxes remain unpaid, the government can sell the tax lien to an investor.",
  },
  {
    id: "how-to-invest",
    title: "How to Invest in Tax Liens",
    icon: <TrendingUp className="h-5 w-5 mr-2 text-primary" />,
    content: "Investing in tax liens typically involves participating in auctions where tax lien certificates are sold. Investors bid on these certificates, and the winning bidder pays the outstanding taxes. The property owner then has a redemption period to pay back the investor, including interest and sometimes penalties. If the owner fails to redeem, the investor might be able to foreclose on the property, though this varies significantly by state.",
  },
  {
    id: "risks-rewards",
    title: "Risks and Rewards",
    icon: <AlertTriangle className="h-5 w-5 mr-2 text-primary" />,
    content: "Rewards can include high interest rates, potentially higher than other fixed-income investments. In rare cases, an investor might acquire property for a fraction of its market value. Risks include the property owner redeeming the lien (meaning you only get your investment plus interest, not the property), the property being worthless or having environmental issues, or complex legal processes. Thorough due diligence is crucial.",
  },
  {
    id: "due-diligence",
    title: "Due Diligence in Tax Lien Investing",
    icon: <Scale className="h-5 w-5 mr-2 text-primary" />,
    content: "Effective due diligence involves researching the property (its condition, market value, any other liens), understanding the local laws and auction rules, and assessing the likelihood of redemption. This helps mitigate risks and identify promising investment opportunities. Resources like county records, online property databases, and site visits (if feasible) are important.",
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Learn About Tax Liens</CardTitle>
          <CardDescription className="text-center text-lg text-foreground/80">
            Expand your knowledge on tax lien investing with these key topics.
          </CardDescription>
        </CardHeader>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {educationalTopics.map((topic) => (
          <Card key={topic.id} className="shadow-md hover:shadow-lg transition-shadow">
            <AccordionItem value={topic.id} className="border-b-0">
              <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left">
                <div className="flex items-center">
                  {topic.icon}
                  {topic.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-base text-foreground/90">
                {topic.content}
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </Accordion>

      <Card className="mt-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Further Exploration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80">
            This is just the beginning of your learning journey. Tax lien investing is complex and varies greatly by state and even county. 
            Always consult with financial and legal professionals before making investment decisions. 
            Use our <Link href="/summarizer" className="text-accent hover:underline">AI Summarizer</Link> to clarify specific concepts you encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
