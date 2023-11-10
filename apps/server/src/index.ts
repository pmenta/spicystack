import Elysia, { t } from "elysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { db } from "./db";

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(
    staticPlugin({
      prefix: "",
    })
  )
  .get("/", () => "Hello Elysia")
  .get("/countries", async () => {
    const allCountries = await db.query.countries.findMany()

    return allCountries;
  })
  .get("/cities", async () => {
    const allCities = await db.query.cities.findMany({
      with: {
        country: true,
      },
    });
    return allCities;
  })
  .get("/nendoroid/skadi", () => ({
    id: 1895,
    name: "Skadi",
    type: "Nendoroid",
    manufacture: "Goodsmile",
    cover: `http://localhost:3000/assets/skadi.jpg`,
    license: {
      type: "approved",
      holder: "Hypergraph",
      from: "Arknights",
    },
  }))
  .post("/sign-in", ({ body }) => body, {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
    response: {
      200: t.Object({
        username: t.String(),
        password: t.String(),
      }),
      400: t.Object({
        error: t.String(),
        status: t.Number(),
      }),
    },
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
