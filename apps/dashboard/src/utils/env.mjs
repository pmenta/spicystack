import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ENV_VAR: z.string().min(1),
  },
  runtimeEnv: {
    ENV_VAR: process.env.ENV_VAR,
  },
});
