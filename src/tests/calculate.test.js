import calculate from '../logic/calculate';

describe('Calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  it('if buttonName === AC', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('if buttonName === "0" && obj.next === "0" return {}', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  it('If press operator +/- after number return negative number', () => {
    obj.next = '123';
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-123',
      operation: null,
    });
  });

  it('if there is an operation, update next', () => {
    const result = calculate(obj, '34');
    obj.operation = 'x';

    expect(result.next).toBe('12334');
  });

  test(' If there is no operation, update next and clear the value', () => {
    const result = calculate(obj, '354');
    obj.operation = null;

    expect(result.next).toBe('123354');
    expect(result.total).toBeNull();
  });
});
