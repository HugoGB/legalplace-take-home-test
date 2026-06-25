import { updateDrug } from "../utils/updateDrug";
import type { Drug } from "./Drug";

export class Pharmacy {
	drugs: Drug[];

	constructor(drugs: Drug[] = []) {
		this.drugs = drugs;
	}

	updateBenefitValue(): Drug[] {
		this.drugs.forEach(updateDrug);

		return this.drugs;
	}
}
