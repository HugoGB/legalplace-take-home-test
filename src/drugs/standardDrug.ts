import { decreaseBenefit, decreaseExpiresIn } from "../utils/drugBenefit";
import type { Drug } from "../class/Drug";

export const updateStandardDrug = (drug: Drug): void => {
	decreaseBenefit(drug);
	decreaseExpiresIn(drug);

	if (drug.expiresIn < 0) {
		decreaseBenefit(drug);
	}
};
