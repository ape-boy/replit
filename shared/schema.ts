import { z } from "zod";

export const slideSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.enum(['content', 'transition', 'opening', 'conclusion']),
  chapter: z.string().optional(),
  content: z.any().optional(),
});

export const presentationSchema = z.object({
  id: z.string(),
  title: z.string(),
  totalSlides: z.number(),
  currentSlide: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const exportOptionsSchema = z.object({
  format: z.enum(['pdf', 'pptx']),
  includeNotes: z.boolean().default(false),
  quality: z.enum(['low', 'medium', 'high']).default('medium'),
});

export type Slide = z.infer<typeof slideSchema>;
export type Presentation = z.infer<typeof presentationSchema>;
export type ExportOptions = z.infer<typeof exportOptionsSchema>;
