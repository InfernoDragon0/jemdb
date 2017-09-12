//read from db, then send to merchant_index via ejs

module.exports.genweekBody = genweekBody;
module.exports.genYearBody = genYearBody;

console.log("hi");


var data=[
  {
    "2017": [
      {
          'jan': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'feb': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'mar': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'apr': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'jun': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'jul': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'aug': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'sep': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'oct': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'nov': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'dec': [
            {
                'week1Orders' : 10,
                'week1income' : 20,
                'week2Orders' : 10,
                'week2income' : 20,
                'week3Orders' : 10,
                'week3income' : 20,
                'week4Orders' : 10,
                'week4income' : 20,
            }
          ],
        'janTotalOrder': 100,
        'janIncome':200,
        'febTotalOrder': 100,
        'febIncome':200,
        'marTotalOrder': 100,
        'marIncome':200,
        'aprTotalOrder': 100,
        'aprIncome':200,
        'junTotalOrder': 100,
        'junIncome':200,
        'julTotalOrder': 100,
        'julIncome':200,
        'augTotalOrder': 100,
        'augIncome':200,
        'sepTotalOrder': 100,
        'sepIncome':200,
        'octTotalOrder': 100,
        'octIncome':200,
        'novTotalOrder': 100,
        'novIncome':200,
        'decTotalOrder': 100,
        'decIncome':200,
      }
    ]
  }
]

function test(){
console.log(JSON.stringify(data));
}

test();

function genweekBody(data, year, month) {
    return new Promise((resolve, reject) => {

        var weekBody = [{

            "date": month + " Week 1",
            "totalOrders": data[year][month].week1Orders,
            "income":  data[year][month].week1income
        },
        {

            "date": month + " Week 2",
            "totalOrders":  data[year][month].week2Orders,
            "income":  data[year][month].week2income
        },
        {

            "date": month + " Week 3",
            "totalOrders":  data[year][month].week3Orders,
            "income":  data[year][month].week3income
        },
        {

            "date": month + " Week 4",
            "totalOrders":  data[year][month].week4Orders,
            "income":  data[year][month].week4income
        }
        ];
        resolve(weekBody);
    });
};




function genYearBody(data,year) {
return new Promise((resolve, reject) => {

    var yearBody = [{

        "date": "Jan",
        "totalOrders": data[year].janTotalOrder,
        "income": data[year].janIncome
    }, {
        "date": "Feb",
        "totalOrders": data[year].febTotalOrder,
        "income": data[year].febIncome
    }, {
        "date": "Mar",
        "totalOrders": data[year].marTotalOrder,
        "income": data[year].marIncome
    }, {
        "date": "Apr",
        "totalOrders": data[year].aprTotalOrder,
        "income": data[year].aprIncome
    }, {
        "date": "May",
        "totalOrders": data[year].mayTotalOrder,
        "income": data[year].mayIncome
    }, {
        "date": "Jun",
        "totalOrders": data[year].junTotalOrder,
        "income": data[year].junIncome
    }, {
        "date": "Jul",
        "totalOrders": data[year].julIncome,
        "income": data[year].julIncome
    }, {
        "date": "Aug",
        "totalOrders": data[year].augTotalOrder,
        "income": data[year].augIncome
    }, {
        "date": "Sep",
        "totalOrders": data[year].sepTotalOrder,
        "income": data[year].sepIncome
    }, {
        "date": "Oct",
        "totalOrders": data[year].octTotalOrder,
        "income": data[year].octIncome
    }, {
        "date": "Nov",
        "totalOrders": data[year].novTotalOrder,
        "income": data[year].novIncome
    }, {
        "date": "Dec",
        "totalOrders": data[year].decTotalOrder,
        "income": data[year].decIncome
    }
    ];
resolve(yearBody);
});
};



