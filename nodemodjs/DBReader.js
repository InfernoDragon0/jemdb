//read from db, then send to merchant_index via ejs


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