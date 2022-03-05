
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

