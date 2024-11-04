// 1.Bir array yaradin adlardan ibaret olsun hemin arraya her hansisa bir adi
 // arrayin metodlarindan isdifade etmekle daxil edin daha sonra silin
let city = ["Baki", "Seki", "Sumqayit"];
city[city.length] = "Gence";
city.pop();

console.log(city);


//2)
let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    },{
        name: "Nicat",
        surname: "Aliyev",
        age:26,
        driving: false
    },{
        name: "Ayxan",
        surname: "Aliyev",
        age:15,
        driving: true
    },{
        name: Nihad,
        surname: "Aliyev",
        age:19,
        driving: true
    }
]
//bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun
//yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin
//yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin
function nameN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.indexOf('N') === 0) {
            console.log(arr[i]);
        }
    }
}
function years(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 20 && arr[i].age < 26) {
            console.log(arr[i]);
        }
    }
}
function numDriving(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age % 2 === 0 && arr[i].driving) {
            console.log(arr[i]);
        }
    }
}
nameN(obj);
years(obj);
numDriving(obj);



// 4. obj arrayini tersine yazdirin yeni baslangic deyer Ali deyil Nihad olsun

let reversedObj = obj.reverse();
console.log(reversedObj);