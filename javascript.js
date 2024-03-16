let percentage = prompt("Enter your percentage");
let Grade ;


if(percentage>=90 && percentage <=100)
{
    console.log("Grade A+1")
    Grade = "A+1"
}
else if(percentage>=80 && percentage <=89)
{
    console.log("Grade A1")
    Grade = "A1"
}
else if (percentage >= 70 && percentage <= 79) 
{
    console.log("Grade A")
    Grade = "A"
}
else if (percentage >= 60 && percentage <= 69)
 {
    console.log("Grade B")
    Grade = "B"
}
else if (percentage >= 50 && percentage <= 59)
 {
    console.log("Grade C")
    Grade = "C"

}
else if (percentage >= 40 && percentage <= 49)
 {
    console.log("Grade D")
    Grade = "D"
}
else if (percentage <34)
 {
    console.log("Fail")
    Grade = "Fail"

}
else
{
    console.log( "Incorrect Input")
}




switch(Grade)
{
    case "A+1":
    console.log("ohh bhai enjoy kar life kiya kary ga A+1 ly ky 🙄");
    break;

    case "A1":
        console.log("ab A+1 ko dekh kar ziyada parhny ki zarorat nhi hai🙄");
        break;
    case "A":
        console.log("kar ly tu bh mehnat ban ja tu bhi topper🙄");
        break;

    case "B":
        console.log("Zabardast ap sy hi to pakistan k future hai 🙄");
        break;

    case "C":
        console.log("Yeh cheez mery bhai life enjoy karo Yeh duniya hum jesy logo k liye nhi hai  🙄");
        break;

    case "D":
        console.log("tumhary galti nhi hai yeh system hi kharab hy yeh duniya humjeso ko nhi samjh skti 🙄");
        break;
    case "Fail":
        console.log("Always remember Backbanhers create a history 😎");
        break;
}