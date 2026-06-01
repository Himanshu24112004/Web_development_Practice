// if else....... 

let marks=Number(prompt("Enter Your Marks :"));
if(marks>=90){
    console.log("Grade:A");
}
else if(marks>=75){
    console.log("Grade:B");
}
else if(marks>=60){
    console.log("Grade:C");
}
else if(marks>=45){
    console.log("Grade:D");
}
else if(marks>=30){
    console.log("Passed");
}
else{
    console.log("Fail");
}

//for  loop ......

if(marks>=30){
    for(let f=1; f<=21; f++){
        console.log("well Done !!!!!!");
    }
}
else{
    for(let d=1; d<=11; d++){
        console.log("sharm kro bhagwan se dro");
    }
}  
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

//while loop.......

let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

//do while loop .....

let h = 1;
do {
    console.log(h);
    h++;
} while (h <= 5);


