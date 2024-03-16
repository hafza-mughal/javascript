


let percentage=prompt("enter your percentage");
let grade;





if (percentage>90 && percentage<=100 )
{

    console.log("grade A+1");
    grade ="A+1"
}
 else if ( percentage>=80 && percentage<90)
{

    console.log("grade A1");
    grade ="A1"
}
else if ( percentage>=70 && percentage<80)
{

    console.log("grade A");
    grade ="A"
}
else if ( percentage>=60 && percentage<70)
{

    console.log("grade B");
    grade ="B"
}
else if ( percentage>=50 && percentage<60)
{

    console.log("grade C");
    grade ="C"
}
else if ( percentage>=40 && percentage<50)
{

    console.log("grade D");
    grade ="D"
}
else if ( percentage<30 && percentage<40)
{

    console.log("grade fail");
    grade="fail"
}
else{
    console.log("invalid input")
}





switch(grade)
{
    case"A+1":
    console.log("congratulation ap ne apny ami abu ka name roshan kia ha 😎");
    break;

    case"A1":
    console.log("ab A+1 waly se jelous hony ki zarort nhi ha 🥱");
    break;

    case"A":
    console.log("thora sa parh lena tha to A1 ajana tha 😉");
    break;

    case"B":
    console.log("hamesha smart work kam nhi ata bro 🥺");
    break;

    case"C":
    console.log("ab ap bol sakty ha ky hamara education system hi galat ha 😏 ");
    break;
    
    
    case"D":
    console.log("koi nhi beta ziudin board zindabad 🤩");
     break;

     
    case"fail":
    console.log("ab ap naas was cut kar sakty ha 😔😪 ");
    break;
    
    



}

































