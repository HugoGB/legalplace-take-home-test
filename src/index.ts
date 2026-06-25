import fs from "fs";

import { Drug } from "./components/Drug";
import { Pharmacy } from "./components/Pharmacy";

const drugs = [
	new Drug("Doliprane", 20, 30),
	new Drug("Herbal Tea", 10, 5),
	new Drug("Fervex", 12, 35),
	new Drug("Magic Pill", 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log: Drug[][] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
	log.push(
		JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())) as Drug[],
	);
}

fs.writeFile(
	"output.json",
	JSON.stringify({ result: log }, null, "\t").concat("\n"),
	(err) => {
		if (err) {
			console.log("error");
		} else {
			console.log("success");
		}
	},
);
