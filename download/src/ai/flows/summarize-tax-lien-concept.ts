'use server';

/**
 * @fileOverview Summarizes tax lien concepts using an AI model.
 *
 * - summarizeTaxLienConcept - A function that summarizes a given tax lien concept.
 * - SummarizeTaxLienConceptInput - The input type for the summarizeTaxLienConcept function.
 * - SummarizeTaxLienConceptOutput - The return type for the summarizeTaxLienConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTaxLienConceptInputSchema = z.object({
  concept: z.string().describe('The tax lien concept to summarize.'),
});
export type SummarizeTaxLienConceptInput = z.infer<typeof SummarizeTaxLienConceptInputSchema>;

const SummarizeTaxLienConceptOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the tax lien concept.'),
});
export type SummarizeTaxLienConceptOutput = z.infer<typeof SummarizeTaxLienConceptOutputSchema>;

export async function summarizeTaxLienConcept(
  input: SummarizeTaxLienConceptInput
): Promise<SummarizeTaxLienConceptOutput> {
  return summarizeTaxLienConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTaxLienConceptPrompt',
  input: {schema: SummarizeTaxLienConceptInputSchema},
  output: {schema: SummarizeTaxLienConceptOutputSchema},
  prompt: `You are an expert in tax liens. Provide a concise summary of the following concept:\n\n{{concept}}`,
});

const summarizeTaxLienConceptFlow = ai.defineFlow(
  {
    name: 'summarizeTaxLienConceptFlow',
    inputSchema: SummarizeTaxLienConceptInputSchema,
    outputSchema: SummarizeTaxLienConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
