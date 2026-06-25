import type { Drug } from "../class/Drug";
import {
	MIN_BENEFIT,
	decreaseExpiresIn,
	increaseBenefit,
} from "../utils/drugBenefit";

export const FERVEX_NAME = "Fervex";

export const updateFervex = (drug: Drug): void => {
	increaseBenefit(drug);

	if (drug.expiresIn < 11) {
		increaseBenefit(drug);
	}

	if (drug.expiresIn < 6) {
		increaseBenefit(drug);
	}

	decreaseExpiresIn(drug);

	if (drug.expiresIn < 0) {
		drug.benefit = MIN_BENEFIT;
	}
};
