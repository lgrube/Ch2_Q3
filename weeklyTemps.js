//Luke Grube
//Cmp 344
//averages out week 1,2,3,4 and the average of the month
//1/26/15


function weeklyTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}
function add(temp) {
	this.dataStore.push(temp);
}
function average() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}
var week1 = new weeklyTemps();
var week2 = new weeklyTemps();
var week3 = new weeklyTemps();
var week4 = new weeklyTemps();
var week5 = new weeklyTemps();
week1.add(52);
week1.add(55);
week1.add(61);
week1.add(65);
week2.add(55);
week2.add(50);
week2.add(52);
week2.add(49);
week3.add(60);
week3.add(66);
week3.add(55);
week3.add(50);
week4.add(45);
week4.add(90);
week4.add(12);
week4.add(55);
week5.add(52);
week5.add(55);
week5.add(61);
week5.add(65);
week5.add(55);
week5.add(50);
week5.add(52);
week5.add(49);
week5.add(60);
week5.add(66);
week5.add(55);
week5.add(50);
week5.add(45);
week5.add(90);
week5.add(12);
week5.add(55);
print(week1.average(),week2.average(),week3.average(),week4.average(),week5.average());
