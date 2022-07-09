import {multiple, splitPhrase, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
	/* Overrided data */
	a = 1;
	b = 2;
	c = 3;
})

test('sum should be correct', () => {
	/* Action */
	const res = sum(a, b);
	const res2 = sum(b, c);

	/* Result */
	expect(res).toBe(3);
	expect(res2).toBe(5);
})

test('multiple should be correct', () => {
	/* Action */
	const res = multiple(a, b);
	const res2 = multiple(b, c);

	/* Result */
	expect(res).toBe(2);
	expect(res2).toBe(6);
})

test('split words should be correct', () => {
	/* Data */
	const phrase1 = 'some phrase'
	const phrase2 = 'hi dude'

	/* Action */
	const res = splitPhrase(phrase1)
	const res2 = splitPhrase(phrase2)

	expect(res.length).toBe(2)
	expect(res[0]).toBe('some')
	expect(res[1]).toBe('phrase')
})