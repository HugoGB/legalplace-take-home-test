import fs from "fs";

import { Drug } from "./class/Drug";
import { Pharmacy } from "./class/Pharmacy";
import { HERBAL_TEA_NAME } from "./drugs/herbalTea";
import { FERVEX_NAME } from "./drugs/fervex";
import { MAGIC_PILL_NAME } from "./drugs/magicPill";

const drugs = [
	new Drug("Doliprane", 20, 30),
	new Drug(HERBAL_TEA_NAME, 10, 5),
	new Drug(FERVEX_NAME, 12, 35),
	new Drug(MAGIC_PILL_NAME, 15, 40),
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
