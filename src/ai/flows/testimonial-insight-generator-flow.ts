'use server';
/**
 * @fileOverview A Genkit flow for generating insights from community testimonials.
 *
 * - testimonialInsightGenerator - A function that takes an array of testimonials and returns
 *   a summary of recurring positive themes and key benefits.
 * - TestimonialInsightGeneratorInput - The input type for the testimonialInsightGenerator function.
 * - TestimonialInsightGeneratorOutput - The return type for the testimonialInsightGenerator function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TestimonialInsightGeneratorInputSchema = z.object({
  testimonials: z
    .array(z.string())
    .describe('An array of testimonial texts from community members.'),
});
export type TestimonialInsightGeneratorInput = z.infer<
  typeof TestimonialInsightGeneratorInputSchema
>;

const TestimonialInsightGeneratorOutputSchema = z.object({
  positiveThemes: z
    .array(z.string())
    .describe('A list of recurring positive themes found in the testimonials.'),
  keyBenefits: z
    .array(z.string())
    .describe('A list of key benefits that members experience, extracted from the testimonials.'),
});
export type TestimonialInsightGeneratorOutput = z.infer<
  typeof TestimonialInsightGeneratorOutputSchema
>;

export async function testimonialInsightGenerator(
  input: TestimonialInsightGeneratorInput
): Promise<TestimonialInsightGeneratorOutput> {
  return testimonialInsightGeneratorFlow(input);
}

const testimonialInsightPrompt = ai.definePrompt({
  name: 'testimonialInsightPrompt',
  input: { schema: TestimonialInsightGeneratorInputSchema },
  output: { schema: TestimonialInsightGeneratorOutputSchema },
  prompt: `You are an AI assistant tasked with analyzing community testimonials.
Your goal is to identify and summarize the recurring positive themes and key benefits that members frequently mention.

Analyze the following testimonials and provide a concise summary of:
1. Recurring positive themes.
2. Key benefits described by members.

Testimonials:
{{#each testimonials}}- {{{this}}}\n{{/each}}

Provide the output in a JSON format matching the schema for positiveThemes and keyBenefits.`,
});

const testimonialInsightGeneratorFlow = ai.defineFlow(
  {
    name: 'testimonialInsightGeneratorFlow',
    inputSchema: TestimonialInsightGeneratorInputSchema,
    outputSchema: TestimonialInsightGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await testimonialInsightPrompt(input);
    return output!;
  }
);
