//Question No:01

var emptyArray= [];

//Question No:02

var emptyArray= [];

//Question No:03

var stringsArray = ["apple","banana","grapes","orange"];

//Question No:04

var numbersArray= [1,2,3,4,5];

//Question No:05

var booleanArray = [true,false,false,true];

//Question No:06

var mixedArray = ["apple",1,true,8.5];

//Question No:07
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2> Qualifications:</h2>"+ "<br>"+ "<br>");
document.write("1)" + " " + qualificationsArray[0] + "<br>");
document.write("2)" + " " + qualificationsArray[1] + "<br>");
document.write("3)" + " " + qualificationsArray[2] + "<br>");
document.write("4)" + " " + qualificationsArray[3] + "<br>");
document.write("5)" + " " + qualificationsArray[4] + "<br>");
document.write("6)" + " " + qualificationsArray[5] + "<br>");
document.write("7)" + " " + qualificationsArray[6] + "<br>");
document.write("8)" + " " + qualificationsArray[7] + "<br>");


//Question No:08
var studentsName = ["Abdullah","Hamza","Huzaifa"];
var studentsScore = [450,400,300];
var totalMarks = 500;
var percentage1 =(studentsScore[0] *100/totalMarks);
var percentage2 =(studentsScore[1] *100/totalMarks);
var percentage3 =(studentsScore[2] *100/totalMarks);

document.write("<br>"+"<br>"+"<br>")
document.write("Score of "+ studentsName[0] + " is " +studentsScore[0] +". Percentage: "+ percentage1 +"%" + "<br>" );
document.write("Score of "+ studentsName[1] + " is " +studentsScore[1] +". Percentage: "+ percentage2 +"%" +"<br>" );
document.write("Score of "+ studentsName[2] + " is " +studentsScore[2] +". Percentage: "+ percentage3 +"%" + "<br>" );
document.write("<br>"+"<br>"+"<br>"+"<br>");

//Question No:09

// //a

var colorNamesArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("<h1>Color Names</h1>");
document.write("Original colors:"+"  " +colorNamesArray);
document.write("<br>");
var userColor = prompt("what color do you want to add in the beginning");
colorNamesArray.unshift(userColor);
var updatedColors =  colorNamesArray.join();
document.write("Updated colors: " +  updatedColors);
document.write("<br>"+"<br>"+"<br>");


//b

var colorNamesArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("<h1>Color Names</h1>");
document.write("Original colors:"+"  " +colorNamesArray);
document.write("<br>");
var userColor = prompt("what color do you want to add in the beginning");
colorNamesArray.push(userColor);
var updatedColors =  colorNamesArray.join();
document.write("Updated colors: " +  updatedColors);
document.write("<br>"+"<br>"+"<br>");

//c

var colorNamesArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("Original colors:"+"  " +colorNamesArray+"<br>");
colorNamesArray.unshift("violet","indigo");
document.write("Updated colors:"+"  " +colorNamesArray);
document.write("<br>"+"<br>"+"<br>");


//d

var colorNamesArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("Original colors:"+"  " +colorNamesArray+"<br>");
colorNamesArray.shift();
document.write("Updated colors:"+"  " +colorNamesArray);
document.write("<br>"+"<br>"+"<br>");

//e
var colorNamesArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("Original colors:"+"  " +colorNamesArray+"<br>");
colorNamesArray.pop();
document.write("Updated colors:"+"  " +colorNamesArray);
document.write("<br>"+"<br>"+"<br>");

//f
var colors = ["red", "green", "blue", "yellow", "orange"];

var indexAdd = prompt("Enter the index at which you want to add a color:");
var colorToAdd = prompt("Enter the color you want to add:");

indexAdd = parseInt(indexAdd);

if (indexAdd >= 0 && indexAdd <= colors.length) {

  colors.splice(indexAdd,0, colorToAdd);

document.write(colors);
document.write("<br>"+"<br>"+"<br>");
} 


//g
var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
var enterIndex = +prompt("Enter the index at which you want to start deleting colors:");
var numbersDelete = +prompt("Enter the number of colors to delete:");
var deletedColors = colors.splice(enterIndex, numbersDelete);

    document.write("Deleted colors: " + deletedColors + "<br>");
    document.write("Updated colors: " + colors);
    document.write("<br>"+"<br>"+"<br>");

//Question No:10
var studentScores = [320,230,480,120];
var updatedScores = studentScores.sort();
document.write("Score of students:" + " " + studentScores + "<br>");
document.write("Ordered Score of students:" + " " + updatedScores);
 document.write("<br>"+"<br>"+"<br>");



// //Question No:11
var students = ["Karachi", "Lahore", "Islamabad", "Quetta","Peshawar"];
var copy = students.slice(2, 4);
document.write("Cities list:" + "<br>" + students+ "<br>"+ "<br>");
document.write("Selected cities list:" + "<br>" + copy);
document.write("<br>"+"<br>"+"<br>");


// //Question No:12

var arr = ["This","is","my","cat"];
var joinarr = arr.join(" ");
document.write("Array:" + "<br>" + arr + "<br>"+ "<br>");
document.write("String:" + "<br>" + joinarr);
document.write("<br>"+"<br>"+"<br>");


//Question No:13
var fifoQueue = ["keyboard","mouse","printer","monitor"];

document.write("Devices"+"<br>"+fifoQueue);
document.write("<br>"+"<br>");
document.write("out:"+ "<br>"+fifoQueue[0]+ "<br>");
document.write("out:"+ "<br>"+fifoQueue[1]+ "<br>");
document.write("out:"+ "<br>"+fifoQueue[2]+ "<br>");
document.write("out:"+ "<br>"+fifoQueue[3]+ "<br>");
document.write("<br>"+"<br>"+"<br>");


//Question No:14

var lifoQueue = ["keyboard","mouse","printer","monitor"];

document.write("Devices"+"<br>"+lifoQueue);
document.write("<br>"+"<br>");
document.write("out:"+ "<br>"+lifoQueue[3]+ "<br>");
document.write("out:"+ "<br>"+lifoQueue[2]+ "<br>");
document.write("out:"+ "<br>"+lifoQueue[1]+ "<br>");
document.write("out:"+ "<br>"+lifoQueue[0]+ "<br>");
document.write("<br>"+"<br>"+"<br>");

//Question No:15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<label>Select a Phone Manufacturer:    </label>");

document.write("<select>");
    document.write("<option>" + manufacturers[0] + "</option>");
    document.write("<option>" + manufacturers[1] + "</option>");
    document.write("<option>" + manufacturers[2] + "</option>");
    document.write("<option>" + manufacturers[3] + "</option>");
    document.write("<option>" + manufacturers[4] + "</option>");
    document.write("<option>" + manufacturers[5] + "</option>");
document.write("</select>");


































