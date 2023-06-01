


const user = {
    name: "Dima",
    4: 30,
    birthDay: "dd/mm/yyyy",
    showMyPublicData: function(){
        console.log(`${this.name} ${this.birthDay}`);
    }
}

//console.log(user);
//console.log(Object.keys(user));
//console.log(Object.values(user));

/*


const shops = [
    {oil: 200},
    {rice: 500},
    {bread: 60},
];

const budget = [5000, 15000, 30000];

const map = new Map([
    [{paper: 400}, 3000]
]);
//console.log(map);

/*

map.set(shops[0], 5000);
map.set(shops[1], 4000);
map.set(shops[2], 15000);
console.log(map);



shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})


console.log(map);
//console.log(map.get(shops[0]));
//console.log(map.has(shops[0]));
//console.log(map.has(shops[4]));
//map.delete(shops[0]);
//console.log(map);
//map.clear();
//console.log(map);

//console.log(map.size);

*/

const shops = [
    {oil: 200},
    {rice: 500},
    {bread: 60},
];

const budget = [5000, 15000, 30000];

const map = new Map([
    [{paper: 400}, 3000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})
//console.log(map);
//console.log(map.keys());
//console.log(map.values());

//=============== Key ========================================

//console.log(typeof(map));

for ( let shop of map.keys()){
    console.log(shop);
}
