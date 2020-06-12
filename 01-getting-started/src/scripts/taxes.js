
const taxFunctions = {
  calcTaxes: (num) => {
    if (num <= 48535) {
      return (num * 0.15).toFixed(2);

    } else if (num > 48535 && num <= 97069) {
      return ((num - 48535) * 0.205 + 7280.25).toFixed(2);

    } else if (num > 97069 && num <= 150473) {
      return ((num - 97069) * 0.26 + 17229.72).toFixed(2);

    } else if (num > 150473 && num <= 214368) {
      return (((num - 150473) * 0.29) + 31114.76).toFixed(2);

    } else 
      return (((num - 214638) * 0.33) + 49644.31).toFixed(2);
  }
};

export default taxFunctions;
