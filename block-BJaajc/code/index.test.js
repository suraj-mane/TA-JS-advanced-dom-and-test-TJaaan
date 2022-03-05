
const getFullName = require('./index');

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName('suraj' + 'mane')).toBe("surajmaneundefined");
});

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName('mane' + 'mane')).toBe("manemaneundefined");
});

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName('suraj' + 'suraj')).toBe("surajsurajundefined");
});

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName("suraj" + "mane")).not.toBe("surajundefined");
});

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName('suraj' + 'mane')).not.toBe("surajsurajundefined");
});

test('adds firstname + lastname to equal fullName', () => {
  expect(getFullName("suraj" + "mane")).not.toBe("surajundefined");
});

const ispalindrome = require('./index');

test('adds str to equal str', () => {
  expect(ispalindrome(121)).toBe(true);
});

test('adds str to equal str', () => {
  expect(ispalindrome(121)).toBe(true);
});

test('adds str to equal str', () => {
  expect(ispalindrome(121)).toBe(true);
});

test('adds str to equal str', () => {
  expect(ispalindrome(125)).not.toBe(false);
});

test('adds str to equal str', () => {
  expect(ispalindrome(1213)).not.toBe(false);
});

test('adds str to equal str', () => {
  expect(ispalindrome(1254)).not.toBe(false);
});
