/// <reference types="node" />
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Fetch user with explicit typing so TS knows password + role exist
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        }) as {
          id: number;
          name: string | null;
          email: string;
          password: string;
          role: string;
        } | null;

        if (!user) return null;

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;

        return {
          id: String(user.id),
          name: user.name ?? "",
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        role: token.role as string,
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};