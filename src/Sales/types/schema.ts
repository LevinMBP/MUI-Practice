import { z } from "zod";

export const SalesSchema = z.object({
    name: z.string().min(1, {message: 'Required'}),
    email: z
        .string()
        .min(1, {message: 'Email is required.'}),
        // .refine((text) => patterns.email.test(text), {message: 'Email is not valid'})  // <-- can check by regex
    states: z.array(z.string()).min(1).max(2)
});

export type Schema = z.infer<typeof SalesSchema>;

export const defaultValues: Schema = {
    name: '',
    email: '',
    states: []
};