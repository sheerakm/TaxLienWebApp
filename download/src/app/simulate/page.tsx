import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChartBig, DollarSign, TrendingDown, TrendingUp, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SimulatePage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
            <BarChartBig className="h-8 w-8" />
            Tax Lien Investment Simulator
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Test your strategies and understand potential outcomes in a risk-free environment.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 border border-dashed border-accent rounded-lg bg-accent/10">
            <h3 className="text-xl font-semibold text-accent mb-2">Simulation Tool - Coming Soon!</h3>
            <p className="text-accent/90">
              We are actively developing an interactive simulation tool. 
              The features below outline our vision for this powerful learning aid.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="investmentAmount" className="text-base">Initial Investment Amount</Label>
              <div className="flex items-center mt-1">
                <DollarSign className="h-5 w-5 text-muted-foreground mr-2" />
                <Input id="investmentAmount" type="number" placeholder="e.g., 10000" disabled className="bg-muted/50"/>
              </div>
            </div>

            <div>
              <Label htmlFor="interestRate" className="text-base">Expected Annual Interest Rate (%)</Label>
              <div className="flex items-center mt-1">
                 <TrendingUp className="h-5 w-5 text-muted-foreground mr-2" />
                <Input id="interestRate" type="number" placeholder="e.g., 8" disabled className="bg-muted/50"/>
              </div>
            </div>
             <div>
              <Label htmlFor="redemptionPeriod" className="text-base">Average Redemption Period (Months)</Label>
               <div className="flex items-center mt-1">
                <HelpCircle className="h-5 w-5 text-muted-foreground mr-2" />
                <Input id="redemptionPeriod" type="number" placeholder="e.g., 12" disabled className="bg-muted/50"/>
              </div>
            </div>
          </div>

          <Button disabled size="lg" className="w-full bg-primary/80 hover:bg-primary/70">
            Run Simulation (Feature In Development)
          </Button>

          <Card className="mt-6 bg-card border-primary/30">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Simulated Results (Example)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">Potential Profit:</span>
                <span className="font-semibold text-green-600 text-lg animate-pulse">Calculating...</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">Number of Redeemed Liens:</span>
                 <span className="font-semibold text-blue-600 text-lg animate-pulse">Calculating...</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">Number of Acquired Properties (Foreclosure):</span>
                <span className="font-semibold text-orange-600 text-lg animate-pulse">Calculating...</span>
              </div>
               <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-xs text-muted-foreground mt-4 cursor-help">
                      * These are hypothetical placeholder values. The actual simulation will provide dynamic results based on your inputs and chosen scenarios.
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Simulations help estimate outcomes but don't guarantee future results.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Why Use a Simulator?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-foreground/80">
          <p><strong className="text-primary/90">Understand Risk:</strong> See how different factors (interest rates, redemption rates) can impact your returns.</p>
          <p><strong className="text-primary/90">Develop Strategy:</strong> Experiment with various investment amounts and scenarios without financial commitment.</p>
          <p><strong className="text-primary/90">Learn the Process:</strong> Get a feel for the lifecycle of a tax lien investment, from purchase to redemption or foreclosure.</p>
          <p><strong className="text-primary/90">Build Confidence:</strong> Practice makes perfect. Gain confidence before diving into real-world tax lien auctions.</p>
        </CardContent>
      </Card>
    </div>
  );
}
