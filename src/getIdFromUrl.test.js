import { getIdFromUrl } from './getIdFromUrl';

test('should get id from url properly', () => {
  const id = '12';
  const parseId = getIdFromUrl(`http://teste/teste/${id}`);
  expect(parseId).toBe(id);
});
