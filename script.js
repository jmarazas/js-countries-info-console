console.log("== Valstybių info ==")

var newUsers = [
    {name: "Singapūras", area: 719.4, population: 5784538},
    {name: "Tailandas", area: 513120, population: 66171439},
    {name: "Italija", area: 301230, population: 58983000},
    {name: "Portugalija", area: 92212, population: 10344802},
    {name: "Kolumbija", area: 1141748, population: 50372424}
]

function printUsers(name, area, population){
    var avg = (area * 1000000) / population

    console.log("Šalis: " + name + ", joje gyvena " + (population / 1000000).toFixed(2) + " mln. gyventojų.")
    console.log("Valstybės plotas: " + area + " km², plotas tenkantis vienam gyventojui: " + avg.toFixed(2) + " m²")
}

for(var i = 0; i < newUsers.length; i++){
    printUsers(newUsers[i].name, newUsers[i].area, newUsers[i].population)
}
