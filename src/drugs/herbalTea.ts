import { decreaseExpiresIn, increaseBenefit } from "../utils/drugBenefit";
import type { Drug } from "../class/Drug";

export const HERBAL_TEA_NAME = "Herbal Tea";

export const updateHerbalTea = (drug: Drug): void => {
	increaseBenefit(drug);
	decreaseExpiresIn(drug);

	if (drug.expiresIn < 0) {
		increaseBenefit(drug);
	}
};
