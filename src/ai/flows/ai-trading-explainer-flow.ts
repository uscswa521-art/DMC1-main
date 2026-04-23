'use server';
/**
 * @fileOverview A generative AI tool that explains trading terms and strategies.
 *
 * - explainTradingConcept - A function that handles explaining trading concepts.
 * - ExplainTradingConceptInput - The input type for the explainTradingConcept function.
 * - ExplainTradingConceptOutput - The return type for the explainTradingConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainTradingConceptInputSchema = z.object({
  query: z.string().describe('The trading term or strategy to explain.'),
});
export type ExplainTradingConceptInput = z.infer<typeof ExplainTradingConceptInputSchema>;

const ExplainTradingConceptOutputSchema = z.object({
  explanation: z.string().describe('A simplified explanation of the trading concept with examples.'),
});
export type ExplainTradingConceptOutput = z.infer<typeof ExplainTradingConceptOutputSchema>;

export async function explainTradingConcept(input: ExplainTradingConceptInput): Promise<ExplainTradingConceptOutput> {
  return aiTradingExplainerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTradingExplainerPrompt',
  input: {schema: ExplainTradingConceptInputSchema},
  output: {schema: ExplainTradingConceptOutputSchema},
  prompt: `You are an AI assistant specialized in trading, designed to help new users understand complex trading terms and strategies.
Your goal is to provide clear, simplified explanations and relevant examples.
Focus on concepts commonly mentioned in trading communities such as SMC (Smart Money Concepts), SNR (Support and Resistance), ICT (Inner Circle Trader concepts), and liquidity.

Explain the following trading term or strategy in a simple, easy-to-understand manner for a beginner, providing concrete examples where possible:

Term/Strategy: {{{query}}}`,
});

const aiTradingExplainerFlow = ai.defineFlow(
  {
    name: 'aiTradingExplainerFlow',
    inputSchema: ExplainTradingConceptInputSchema,
    outputSchema: ExplainTradingConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
