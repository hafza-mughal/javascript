let percentage = prompt("enter your percentage");
let grade ;

if(percentage>=90 && percentage <=100)
{
    console.log("grade A+1")
    grade = " A+1"
}

else if(percentage >= 80 && percentage <90)
{
     console.log("grade A+")
     grade = " A+"
}

else if(percentage >= 70 && percentage <80)
{
     console.log("A")
     grade = " A"
}

else if(percentage >= 60 && percentage <70)
{
     console.log("B")
     grade = "B"
}

else if(percentage >=50 && percentage <60)
{
     console.log(" C")
     grade = " C"
}

else if(percentage >=40 && percentage <50)
{
     console.log(" D")
     grade = " D"
}
else if(percentage<30 && percentage <40)
{
     console.log("fail")
     grade = " fail"
}

else{
    console.log ("incorrect input")
}







switch(grade)
{
    case "A+1":
    console.log("congrulations ap ne kashmir azad kar liya ha job phr bhi nahi milni .......................😒😒🎉");

break;

case "A+":
    console.log("kiya kar raho ho bhai wo daikho wo aagy nikal gaya sar phar do uska 🏑⛏⛏⛏🛠💉");

break;

case "A":
    console.log("apke saath teacher loyal nahi ha ");

break;

case "B":
    console.log("chalo koi baat nahi ab roo nahi sb ne cheating se number liya ha ☺🙂");

break;

case "C":
    console.log("mashallah se apka future brigth ha isme full light shight ha 😀😚😅");

break;

case "D":
    console.log("ek papar supli me gya chapak 😁😂🤣");

break;

case "Fail":
    console.log("allah sabr de wasy bolna nahi chaiye sary papar supli me gay chapak chapak chapak😭😭😢");

break;









}