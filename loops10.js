let choice;
do {
    console.log("menu:");
    console.log("1. option 1");
    console.log("2. option 2");
    console.log("3. option 3");
    choice = parseInt(prompt("enter your choice(1 or 2 or 3):"));
}while (choice !==1 && choice !==2 && choice !==3);

console.log("you selected option" + choice);