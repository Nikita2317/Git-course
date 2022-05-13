// Оператор строгого сравнения !==. Возращает значение true, если переменные не равны и у них один тип данных.
function testStrictNotEqual(val) {
    if (val !== 17) {//если значение val будет 17 и тип number то функция вернет Not Equal
      return "Not Equal";
    }
    return "Equal";//если значение val не будет равняться 7 или тип данных будет не number то функция вернет Equal
  }