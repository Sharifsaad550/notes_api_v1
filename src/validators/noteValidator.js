import { z } from "zod"

export const createNoteSchema = z.object({
    title: z.string()
        .min(3, "title must be atleast 3 charcters long")
        .max(100, "Title is too long"),
    content:  z.string().optional(),
    category: z.enum(["work", "personal","study"]).default("personal"),
    tags: z.array([z.string]).optional(),
    isFavorite: z.boolean().optional(),
    isPinned: z.boolean().optional()
})

export const updateNoteSchema = createNoteSchema.partial()

export const mongoIdSchema = z.object({
    note_id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Note Id")
})