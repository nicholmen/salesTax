// implement a function that calculates the total sales and total tax, grouped by company.

function arrSalesSum(sales) {
  var salesSum = 0;
  sales.forEach(function(sale) {
    salesSum += sale
  })
  return salesSum;
};

function getTax(taxRates, totalSales) {
  return taxRates * totalSales
};


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companySalesData, salesTaxRates) {

  var sales = {};

  companySalesData.forEach(function(company){
    let taxRate = salesTaxRates[company.province];
    let salesTotal = arrSalesSum(company.sales);
    let tax = getTax(taxRate, salesTotal);

    if(sales[company.name]) {
      sales[company.name].totalSales += salesTotal;
      sales[company.name].totalTaxes += tax;
      return;
    }

    sales[company.name] = {
        totalSales: salesTotal,
        totalTaxes: tax
    }
   });

   return sales;

}

let results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)