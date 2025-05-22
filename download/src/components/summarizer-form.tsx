"use client";

import { useState, useTransition } from 'react';
import { summarizeTaxLienConcept, type SummarizeTaxLienConceptOutput } from '@/ai/flows/summarize-tax-lien-concept';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


export default function SummarizerForm() {
  const [concept, setConcept] = useState('');
  const [summary, setSummary] = useState<SummarizeTaxLienConceptOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!concept.trim()) {
      setError("Please enter a concept to summarize.");
      return;
    }

    setError(null);
    setSummary(null);

    startTransition(async () => {
      try {
        const result = await summarizeTaxLienConcept({ concept });
        setSummary(result);
        toast({
          title: "Summary Generated",
          description: "The AI has successfully summarized the concept.",
          variant: "default",
          action: <CheckCircle className="text-green-500" />,
        });
      } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        setError(`Failed to summarize concept: ${errorMessage}`);
        toast({
          title: "Error Generating Summary",
          description: `Failed to summarize concept: ${errorMessage}`,
          variant: "destructive",
           action: <AlertCircle className="text-white" />,
        });
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="concept" className="block text-sm font-medium text-foreground mb-1">
            Tax Lien Concept
          </label>
          <Textarea
            id="concept"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="Enter a tax lien concept, term, or question here..."
            rows={5}
            className="shadow-sm focus:ring-accent focus:border-accent"
            disabled={isPending}
          />
        </div>
        <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Summarizing...
            </>
          ) : (
            "Summarize Concept"
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="shadow-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Card className="mt-6 shadow-lg bg-gradient-to-br from-primary/5 via-card to-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-primary">AI Generated Summary</CardTitle>
            <CardDescription>Here's a concise explanation of the concept you provided:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{summary.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
