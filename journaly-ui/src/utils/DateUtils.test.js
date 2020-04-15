import {_convertDate} from './Entry';

test('should return date as Apr 12th, 2020', () => {
    const isoStringDate = '4/12/2020, 12:53:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Apr 12th, 2020');
});

test('should return date as Dec 1st, 2022', () => {
    const isoStringDate = '12/01/2022, 12:53:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Dec 1st, 2022');
});

test('should return date as Oct 2nd, 2021', () => {
    const isoStringDate = '10/02/2021, 12:53:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Oct 2nd, 2021');
});

test('should return date as May 3rd, 2021', () => {
    const isoStringDate = '5/03/2023, 12:53:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('May 3rd, 2023');
});
