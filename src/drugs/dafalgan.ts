import type { Drug } from "../class/Drug";
import { decreaseBenefit, decreaseExpiresIn } from "../utils/drugBenefit";

export const DAFALGAN_NAME = "Dafalgan";

export const updateDafalgan = (drug: Drug): void => {
	decreaseBenefit(drug, 2);
	decreaseExpiresIn(drug);

	if (drug.expiresIn < 0) {
		decreaseBenefit(drug, 2);
	}
};
