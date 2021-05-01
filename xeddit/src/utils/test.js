import * as utils from './util';

describe('capitaliseString', () => {
	test('Returns a new string, with the input capitalised', () => {
		expect(utils.capitaliseString('hello')).toBe('Hello');
	});
});
