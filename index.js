//#region chuỗi
//var myString = "Learn JS hardcore JS";
//console.log(myString.length);
//console.log(myString.indexOf/lastIndexOf("JS", number));
//console.log(myString.slice(5, 6/-3,-1));
//console.log(myString.replace(/JS/g => /value/g: biểu thức chính quy,"JavaScript"));
//console.log(myString.toUpperCase()/ .toLowerCase());
//console.log(myString.trim().length);//loại bỏ khoảng trắng
//var myString1 = "js, PHP, Ruby"
//console.log(myString1.split(", "));//hàm spit phải tìm ra điểm chung hợp lý 
// console.log(myString.charAt(2));//get char by index
//#endregion
//#region số
// let number1 = 10;
// let myString = "abc"
// function isNumber(value) {
//     if (isNaN(value)) {
//         return "sai";
//     } else {
//         return typeof value === "number";// === "number" kiểm tra coi có 
//                                     //phải là kiểu số hay không trả về kiểu boolen
//     }
// }
// console.log(isNumber(100/"acv"));

//NaN cũng được coi là number nếu muốn loại trường hợp ta dùng isNaN
//#endregion
//#region mảng
//search JS array method đi
//#endregion
//#region Object constructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// User.prototype.run = "run for your lifeee"//thêm thuộc tính vào trong object nhưng không nằm trong object mà nằm trong 
//                                         //prototype nhưng bản thân object vẫn truy cập tới được

// var author = new User("Na", "Bui", "Ngoc");
// console.log(author.run);
// author.title = "Ngọc Na có ngiu gòiiiiiii";//thêm thuộc tính vào constructor

// let redmiNote11 = {
//     //property
//     name: "Redmi Note 11",
//     product: 2021,
//     color: "star blue",
//     //phương thức- method
//     playGame() {
//         console.log("play Boom Beach");
//     }
// }
// console.log(redmiNote11.playGame); 
//#endregion
//#region kiểu Date
// var date = Date();
// console.log(typeof date);// trả ra giờ kiểu string nhưng không truy cập được thuộc tính ở trong hàm date
// vì vậy cần tạo một Obj constructor để trả ra một đối tượng Date
// var date = new Date();
// console.log(date.getFullYear())
//getYear: cho ra giá trị kiểu số nhma k biết là gì 
//getFullYear: lấy năm hiện tại từ máy tính
//getMonth: in ra tháng nhưng phải +1 vì máy chạy từ 0-11 tương đương tháng 1 = 0
//getDate: in ra ngày trên máy
//getHours: trả về số giờ 
//getMinutes: trả về số phút
//getSeconds: trả về giây
//get thời gian như mong muốn 
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear()
// console.log(`${day}/${month}/${year}`)//cách 1
// console.log(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()); //cách 2
//#endregion
//ví dụ lập hàm lấy năm tiếp theo
// let value = new Date();

// function getNextYear() {
//     return value.getFullYear() + 1
// }
// console.log(getNextYear()); 
//#region math object
//math.PI: trả về số pi mặc định
//math.round(): trả về số đã được làm tròn(ví dụ đưa số thập phân thì round sẽ làm tròn số đó gần điểm nào hơn)
//math.abs(): trả về số giá trị tuyệt đối (input 5 hay -5 => 5 vì đây là giá trị tuyệt đối luôn dương)
//math.ceil(): trả về làm tròn lên số thập phân, phần thập phân phải lớn hơn 0 dù chỉ là nhỏ nhất vd (4,000001 => 5, 4,0000 => 4)
//math.floor(): trả về số làm tròn dưới dù cho là số thập phân nào nhưng phải lớn hơn 0
//math.random(): trả về số thập phân nhỏ hơn 1 ngẫu nhiên, refresh trình duyệt là thấy 
//math.max/min(): in ra số lớn nhất/nhỏ nhất  
//#endregion
// let fud = ["Fry chicken", "xiên pẩn", "bánh tráng"];
// function getRandomItem(fud) {
//     return fud[Math.floor(Math.random() * fud.length)]
// }
// console.log(getRandomItem(fud));
//#endregion
//#region loop
//baì toán lấy giá trị dùng vòng for in
// function run(object) {
//     let arr = []
//     for(let x in object) {
//         arr.push(`Thuộc tính ${x} có giá trị ${object[x]}`);
//     }
//     return arr;
// }
// console.log(run(
//     { name: 'Nguyen Van A', 
//     age: 16 
// }));
//bài toán lấy giá trị dùng vòng for in 
// let myArr = [
//     "Javascript",
//     "Python",
//     "C++"
// ]
// for (const key of myArr) {
//     console.log(key);
// } // trường hợp này chỉ lấy được value trong mảng chứ không lấy được value trong object
// //trường hợp dưới có thể lấy được trong object sử dụng vòng for of
// let myObj = {
//     name: "Ngoc Na",
//     age: 20
// }
// console.log(Object.keys(myObj));//trả lại mảng key trong object
// for (const key of Object.keys(myObj)) {
//     console.log(myObj);
//     console.log(myObj[key]);
// }
// console.log(Object.values(myObj));//trả lại mảng value trong object
// for (const key of Object.values(myObj)) {
//     console.log(key);
// }
//#endregion
var people = [
    {
        name: "Quagmire",
        age: 26,
        gender: "male"
   },
    {
        name: "Peter Griffin",
        age: 25,
        gender: "male"
   },
    {
        name: "Meg Griffin",
        age: 15,
        gender: "female"
    },
    {
        name: "Brian Griffin",
        age: 5,
        gender: "Animal"
    }
]
console.log("ví dụ forEach");
// people.forEach((people)=>{
//     console.log(`${people.name} has age ${people.age} and gender is ${people.gender}`);
// })//hàm forEach trả về tất cả phần tử trong mảng, có thể truy cập bằng dấu chấm .

console.log("ví dụ every");

var isMale = people.every((people) => people.gender === "male")//hàm every trả về giá trị kiểu boolen, nếu tất cả đều đúng với giá trị trả về thì trả về true
//ngược lại nếu 1 trong những phần tử mảng khác với điều kiện thì sẽ trả về false hết như ví dụ ở dưới 
console.log(isMale);// kết quả trả về là false 

console.log("ví dụ some");

var isMale = people.some((people) =>  people.gender === "male")//ngược lại đối với every, nếu một phần tử trong mảng đúng thì sẽ trả về true
console.log(isMale);

console.log("ví dụ find");

var isName = people.find((people) => people.name === "Meg Griffin")//kiểm tra tất cả phần tử trong mảng tìm coi có phần tử nào giống với điều kiện trả về hay không
//trả về 1 object đầu tiên đúng với điều kiện trả về, nếu 
//không thỏa mãn trả về undefined
console.log(isName);

console.log("ví dụ filter");

//để giải quyết vấn đề của find trả về 1 object thì chúng ta có filter dể trả về tất cả object thỏa điều kiện
var isMale = people.filter((people) => people.gender === "male")//filter trả về những object thỏa điều kiện trả về không phải như find chỉ trả về đúng 1 phần tử thỏa điều kiện
console.log(isMale)

console.log("ví dụ map");
//map là một hàm duyệt qua hết những phần tử trong mảng rồi trả về hàm
//nếu muốn thay đổi chỉ cần thau đổi điều kiện trả về trong mảng
//giống như ví dụ dưới đây thêm id vào object
var mapMethod = people.map((people) => {
    //map duyệt qua từng phần tử rồi trả về hàm phần tử đó
    //return cái gì trả về đúng cái đó
    //nói chung là cứ sửa đổi diều kiện return là ra đúng cái mình muốn
    return people.name
        // name: people.name,
        // age: `${people.age} tuổi`,
        // gender: people.gender,
        //phần thêm vào object
        // id: 123,
        // number: index + 1, //trả về số thứ tự từng phần trử trong mảng
        //tương tự như từ đầu forEach tới map đều có index cả
        //riêng map sẽ có thêm originArray để trả về mảng ban đầu chưa thay đổi
        // begin: originArray
    
})
console.log(mapMethod.join(""));
