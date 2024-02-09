import { healthStatus } from '../src';

test.each([
  [{ name: 'Маг', health: 10 }, 'critical'],
  [{ name: 'Хил', health: 20 }, 'wounded'],
  [{ name: 'Воин', health: 60 }, 'healthy'],
])(`Статус здоровья %s`, (options, status) => {
  const result = healthStatus(options);
  expect(result).toBe(status);
});
