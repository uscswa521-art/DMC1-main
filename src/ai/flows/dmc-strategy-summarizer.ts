'use server';
/**
 * @fileOverview This file implements a Genkit flow to summarize the key advantages of the DMC strategy.
 *
 * - dmcStrategySummarizer - A function that generates a concise summary of DMC strategy advantages.
 * - DmcStrategySummarizerInput - The input type for the dmcStrategySummarizer function.
 * - DmcStrategySummarizerOutput - The return type for the dmcStrategySummarizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DmcStrategySummarizerInputSchema = z.object({
  advantages: z.array(z.string()).describe('An array of key advantages of the DMC strategy, each as a string.'),
});
export type DmcStrategySummarizerInput = z.infer<typeof DmcStrategySummarizerInputSchema>;

const DmcStrategySummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the DMC strategy advantages.'),
});
export type DmcStrategySummarizerOutput = z.infer<typeof DmcStrategySummarizerOutputSchema>;

export async function dmcStrategySummarizer(input: DmcStrategySummarizerInput): Promise<DmcStrategySummarizerOutput> {
  return dmcStrategySummarizerFlow(input);
}

const dmcStrategySummarizerPrompt = ai.definePrompt({
  name: 'dmcStrategySummarizerPrompt',
  input: {schema: DmcStrategySummarizerInputSchema},
  output: {schema: DmcStrategySummarizerOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing the core advantages of the DMC trading strategy.

Read the following advantages carefully and provide a concise, engaging summary that highlights the key value proposition of the DMC strategy.

Advantages:
{{#each advantages}}
- {{{this}}}
{{/each}}

Provide the summary in a paragraph.`,
});

const dmcStrategySummarizerFlow = ai.defineFlow(
  {
    name: 'dmcStrategySummarizerFlow',
    inputSchema: DmcStrategySummarizerInputSchema,
    outputSchema: DmcStrategySummarizerOutputSchema,
  },
  async input => {
    const {output} = await dmcStrategySummarizerPrompt(input);
    return output!;
  }
);
