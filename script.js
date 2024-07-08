//Practice:
//create an array to strore "Microsoft","Uber", "Google", "Meta", "Amazon"
// a. remove the first company from the array
// b. romove Uber and add X in it's place
// c. Add Alibaba at the end

//a
let companies = ["Microsoft", "Uber", "Google", "Meta", "Amazon"];
comanies.shift();  //shift method delete from first in list while pop method delete from last.


//b.
campanies.splice(1, 1, "X"); // splice method means replacement(the beginnin 1 is index no of Uber and for remove we add put 1 and replce X)

//c.
campanies.push("Alibab");  //push method add at the end while unshift method add at start.
