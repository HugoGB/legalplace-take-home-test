import type { Drug } from "../class/Drug";

export const MIN_BENEFIT = 0;
export const MAX_BENEFIT = 50;

export const increaseBenefit = (drug: Drug, amount = 1): void => {
	drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + amount);
};

export const decreaseBenefit = (drug: Drug, amount = 1): void => {
	drug.benefit = Math.max(MIN_BENEFIT, drug.benefit - amount);
};

export const decreaseExpiresIn = (drug: Drug): void => {
	drug.expiresIn -= 1;
};
