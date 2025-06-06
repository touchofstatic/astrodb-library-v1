import { db, Author, Book } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{
			name: "author 1"
		},
		{
			name: "author 2"
		},
		{
			name: "author 3"
		}
	]);

	await db.insert(Book).values([
		{
			title: "book 1",
			authorId: 1,
			isbn: "a",
		},

		{
			title: "book 2",
			authorId: 1,
			isbn: "b",

		},

		{
			title: "book 3",
			authorId: 2,
			isbn: "c",

		},

		{
			title: "book 1",
			authorId: 2,
			isbn: "d",
		}
	]);
}
