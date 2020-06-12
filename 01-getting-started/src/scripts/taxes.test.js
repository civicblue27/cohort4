import taxes from "./taxes";

test("Does number function work?", () => {
      expect(taxes.calcTaxes(40000)).toStrictEqual("6000.00");
      expect(taxes.calcTaxes(4000)).toStrictEqual("600.00");
      expect(taxes.calcTaxes(70000)).toStrictEqual("11680.58");
      expect(taxes.calcTaxes(100000)).toStrictEqual("17991.78");
      expect(taxes.calcTaxes(180000)).toStrictEqual("39677.59");
      expect(taxes.calcTaxes(225000)).toStrictEqual("53063.77");
      
});



