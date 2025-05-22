import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SummarizerForm from "@/components/summarizer-form";
import { Brain } from "lucide-react";

export default function SummarizerPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
           <div className="flex justify-center mb-4">
             <Brain className="h-12 w-12 text-primary" />
           </div>
          <CardTitle className="text-3xl font-bold text-primary">AI Tax Lien Concept Summarizer</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Enter a tax lien concept below, and our AI will provide a concise summary to help you understand it better.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SummarizerForm />
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">How to Use the Summarizer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-foreground/80">
          <p>
            1. <strong>Enter a Concept:</strong> Type or paste the tax lien concept, term, or question you want summarized into the text area.
            For example: "What is a redemption period in tax lien investing?" or "Explain the difference between tax deeds and tax liens."
          </p>
          <p>
            2. <strong>Submit:</strong> Click the "Summarize Concept" button.
          </p>
          <p>
            3. <strong>Review Summary:</strong> The AI-generated summary will appear below the form. This can help you quickly grasp complex ideas.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Disclaimer:</strong> The AI Summarizer provides informational summaries and should not be considered financial or legal advice. 
            Always verify information and consult with qualified professionals for investment decisions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
