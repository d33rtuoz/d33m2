import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";

import NextAuth from "next-auth";

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    async profile(profile) {
      return { ...profile };
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: providers,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string; /* TODO: Разобраться с TS  */
      return session;
    },
  },
});
