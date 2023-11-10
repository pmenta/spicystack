import { relations } from 'drizzle-orm';
import { pgEnum, pgTable, uniqueIndex, varchar, serial, uuid, integer, AnyPgColumn } from 'drizzle-orm/pg-core';
 
// declarando enum no banco de dados
export const countries = pgTable('countries', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }),
}, (countries) => ({
  nameIndex: uniqueIndex('name_idx').on(countries.name),
}));

export const popularityEnum = pgEnum('popularity', ['unknown', 'known', 'popular']);
 
export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  countryId: uuid("country_id").references((): AnyPgColumn => countries.id),
  popularity: popularityEnum("popularity"),
});

export const postsRelations = relations(cities, ({ one }) => ({
	country: one(countries, { fields: [cities.countryId], references: [countries.id] }),
}));