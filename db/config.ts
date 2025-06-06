import { defineDb, defineTable, column, NOW } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Book = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    authorId: column.number({ optional: true, references: () => Author.columns.id }),
    isbn: column.text({ optional: true }),
    timeAdded: column.date({ default: NOW }),
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: { Author, Book }
});
