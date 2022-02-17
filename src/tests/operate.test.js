import operate from '../logic/operate';

describe('Operations testing', () => {
  it('adding operation test', () => {
    expect(operate('67', '3', '+')).toBe('70');
  });

  it('subtract operation test', () => {
    expect(operate('43', '9', '-')).toBe('34');
  });

  it('multiply operation test', () => {
    expect(operate('100', '11', 'x')).toBe('1100');
  });

  it('divide operation test', () => {
    expect(operate('50', '10', '÷')).toBe('5');
  });

  it('operator %', () => {
    expect(operate('47', '2', '%')).toBe('1');
  });

  it('If unknown operator, throw error', () => {
    expect(() => operate('78', '4', '*')).toThrow("Unknown operation '*'");
  });

  it('if divide with 0, throw error', () => {
    expect(operate('25', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('if type of data is right', () => {
    expect(typeof (operate('5385', '112', 'x'))).toBe('string');
  });
});
