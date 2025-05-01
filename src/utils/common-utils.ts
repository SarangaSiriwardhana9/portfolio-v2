import Decimal from 'decimal.js';

export function isNumeric(n: unknown) {
  return !isNaN(parseFloat(n as string)) && isFinite(n as number);
}

export const decimalCalculations = (value?: string | number | null) => {
  const obj = {
    value: new Decimal(String(isNumeric(value) ? value : 0)?.replace(/,/g, '')),
    multiply: (input: string | number) => {
      const decimalInput = new Decimal(
        String(isNumeric(input) ? input : 0)?.replace(/,/g, ''),
      ).toDecimalPlaces(2);
      obj.value = obj.value.mul(decimalInput).toDecimalPlaces(2);
      return obj;
    },
    divide: (input?: string | number) => {
      const decimalInput = new Decimal(
        String(isNumeric(input) ? input : 0)?.replace(/,/g, ''),
      ).toDecimalPlaces(2);
      obj.value = obj.value.div(decimalInput).toDecimalPlaces(2);
      return obj;
    },
    percentage: (input?: string | number, isDecimal = true) => {
      const decimalInput = new Decimal(
        String(isNumeric(input) ? input : 0)?.replace(/,/g, ''),
      ).toDecimalPlaces(2);
      obj.value = obj.value
        .div(isDecimal ? 100 : 10000)
        .mul(decimalInput)
        .toDecimalPlaces(isDecimal ? 2 : 0);
      return obj;
    },
    minus: (input?: string | number) => {
      const decimalInput = new Decimal(
        String(isNumeric(input) ? input : 0)?.replace(/,/g, ''),
      ).toDecimalPlaces(2);
      obj.value = obj.value.minus(decimalInput).toDecimalPlaces(2);
      return obj;
    },
    add: (input?: string | number) => {
      const decimalInput = new Decimal(
        String(isNumeric(input) ? input : 0)?.replace(/,/g, ''),
      ).toDecimalPlaces(2);
      obj.value = obj.value.add(decimalInput).toDecimalPlaces(2);
      return obj;
    },
    toCents: () => {
      obj.value = obj.value.mul(100).toDecimalPlaces(0);
      return obj;
    },
    toDecimal: () => {
      obj.value = obj.value.div(100).toDecimalPlaces(2);
      return obj;
    },
    toDecimalPlaces: (input: number) => {
      obj.value = obj.value.toDecimalPlaces(input);
      return obj;
    },
    toInteger: () => {
      return obj.value.toDecimalPlaces(0).toNumber();
    },
    toNumber: (): number => {
      return obj.value.toNumber();
    },
    toString: (): string => {
      return obj.value.toString();
    },
    toMoney: (currency = '', noThousandSeparator = false): string => {
      const amount = obj.value.toNumber();
      const result = obj.value
        .mul(amount >= 0 ? 1 : -1)
        .toNumber()
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, noThousandSeparator ? '' : ',');
      const prefix = currency ? `${currency} ` : '';
      return `${amount >= 0 ? '' : '- '}${prefix}${result}`;
    },
  };

  obj.value = new Decimal(String(isNumeric(value) ? value : 0)?.replace(/,/g, '')).toDecimalPlaces(
    2,
  );

  return obj;
};

export function toSentenceCase(str: string) {
  return str
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}
