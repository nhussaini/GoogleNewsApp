import { formatDate } from '../../utils/helpers';

describe('formatDate function', () => {
  it('returns the correct formatted date string', () => {
    const dateString = '2023-06-15';
    const expectedFormattedDate = 'Thu Jun 15 2023';
    expect(formatDate(dateString)).toEqual(expectedFormattedDate);
  });

  it('pads single-digit days with leading zeros', () => {
    const dateString = '2023-06-05';
    const expectedFormattedDate = 'Mon Jun 05 2023';
    expect(formatDate(dateString)).toEqual(expectedFormattedDate);
  });

  it('translates the month number into the month abbreviation', () => {
    const dateString = '2023-12-15';
    const expectedFormattedDate = 'Fri Dec 15 2023';
    expect(formatDate(dateString)).toEqual(expectedFormattedDate);
  });

  //   it('handles invalid input gracefully', () => {
  //     const dateString = ''; // Invalid input: empty string
  //     expect(formatDate(dateString)).toBe('');
  //   });

  it('returns a string', () => {
    const dateString = '2023-06-15';
    expect(typeof formatDate(dateString)).toBe('string');
  });
});
