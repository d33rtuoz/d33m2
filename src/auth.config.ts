import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import type { NextAuthConfig } from "next-auth";

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    async profile(profile) {
      return { ...profile };
    },
  }),
];

export default {
  providers: [Google],
} satisfies NextAuthConfig;
