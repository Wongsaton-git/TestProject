let number1=prompt("กรอกเลขท้าย 2 ตัวดูซิ")
document.getElementById("Num1").innerHTML=number1;
let number2=Math.floor(Math.random() * 100)
document.getElementById("result").innerHTML= number2


 if (number1== number2) {alert("คุณถูกรางวัล")
     
 } else {alert("คุณไม่ถูกรางวัล ว้ายๆๆ")
     
 }