import { formatTime } from './formatTime.js';

describe('utils', () => {
  describe ('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
  });
});
