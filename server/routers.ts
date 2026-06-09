import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { realizations, reviews, faqs, pageContent } from "../drizzle/schema";
import { eq, asc } from "drizzle-orm";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Realizacje (publiczne) ───────────────────────────────────────────────
  realizations: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(realizations)
        .where(eq(realizations.published, true))
        .orderBy(asc(realizations.sortOrder));
    }),
  }),

  // ─── Opinie (publiczne) ───────────────────────────────────────────────────
  reviews: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(reviews)
        .where(eq(reviews.published, true))
        .orderBy(asc(reviews.sortOrder));
    }),
  }),

  // ─── FAQ (publiczne) ──────────────────────────────────────────────────────
  faqs: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(faqs)
        .where(eq(faqs.published, true))
        .orderBy(asc(faqs.sortOrder));
    }),
  }),

  // ─── Treści CMS (publiczne) ───────────────────────────────────────────────
  content: router({
    get: publicProcedure.input(z.string()).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(pageContent).where(eq(pageContent.key, input)).limit(1);
      return result[0]?.value ?? null;
    }),
    getAll: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(pageContent);
    }),
  }),

  // ─── Panel admina ─────────────────────────────────────────────────────────
  admin: router({
    // Realizacje
    realizations: router({
      list: protectedProcedure.query(async () => {
        const db = await getDb();
        if (!db) return [];
        return db.select().from(realizations).orderBy(asc(realizations.sortOrder));
      }),
      create: protectedProcedure.input(z.object({
        tag: z.string(),
        title: z.string(),
        description: z.string(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        published: z.boolean().default(true),
        sortOrder: z.number().default(0),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.insert(realizations).values(input);
        return { success: true };
      }),
      update: protectedProcedure.input(z.object({
        id: z.number(),
        tag: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        published: z.boolean().optional(),
        sortOrder: z.number().optional(),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        const { id, ...data } = input;
        await db.update(realizations).set(data).where(eq(realizations.id, id));
        return { success: true };
      }),
      delete: protectedProcedure.input(z.number()).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.delete(realizations).where(eq(realizations.id, input));
        return { success: true };
      }),
    }),

    // Opinie
    reviews: router({
      list: protectedProcedure.query(async () => {
        const db = await getDb();
        if (!db) return [];
        return db.select().from(reviews).orderBy(asc(reviews.sortOrder));
      }),
      create: protectedProcedure.input(z.object({
        author: z.string(),
        rating: z.number().min(1).max(5).default(5),
        text: z.string(),
        service: z.string().optional(),
        reviewDate: z.string().optional(),
        published: z.boolean().default(true),
        sortOrder: z.number().default(0),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.insert(reviews).values(input);
        return { success: true };
      }),
      update: protectedProcedure.input(z.object({
        id: z.number(),
        author: z.string().optional(),
        rating: z.number().optional(),
        text: z.string().optional(),
        service: z.string().optional(),
        reviewDate: z.string().optional(),
        published: z.boolean().optional(),
        sortOrder: z.number().optional(),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        const { id, ...data } = input;
        await db.update(reviews).set(data).where(eq(reviews.id, id));
        return { success: true };
      }),
      delete: protectedProcedure.input(z.number()).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.delete(reviews).where(eq(reviews.id, input));
        return { success: true };
      }),
    }),

    // FAQ
    faqs: router({
      list: protectedProcedure.query(async () => {
        const db = await getDb();
        if (!db) return [];
        return db.select().from(faqs).orderBy(asc(faqs.sortOrder));
      }),
      create: protectedProcedure.input(z.object({
        question: z.string(),
        answer: z.string(),
        published: z.boolean().default(true),
        sortOrder: z.number().default(0),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.insert(faqs).values(input);
        return { success: true };
      }),
      update: protectedProcedure.input(z.object({
        id: z.number(),
        question: z.string().optional(),
        answer: z.string().optional(),
        published: z.boolean().optional(),
        sortOrder: z.number().optional(),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        const { id, ...data } = input;
        await db.update(faqs).set(data).where(eq(faqs.id, id));
        return { success: true };
      }),
      delete: protectedProcedure.input(z.number()).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.delete(faqs).where(eq(faqs.id, input));
        return { success: true };
      }),
    }),

    // Treści CMS
    content: router({
      set: protectedProcedure.input(z.object({
        key: z.string(),
        value: z.string(),
      })).mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("DB unavailable");
        await db.insert(pageContent).values(input)
          .onDuplicateKeyUpdate({ set: { value: input.value } });
        return { success: true };
      }),
    }),
  }),
});

export type AppRouter = typeof appRouter;

