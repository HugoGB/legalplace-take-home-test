import { Drug } from "../class/Drug";

import { FERVEX_NAME, updateFervex } from "../drugs/fervex";
import { HERBAL_TEA_NAME, updateHerbalTea } from "../drugs/herbalTea";
import { MAGIC_PILL_NAME, updateMagicPill } from "../drugs/magicPill";
import { updateStandardDrug } from "../drugs/standardDrug";
import { DrugUpdater } from "../types/drugUpdater";

const updateRulesByDrugName = new Map<string, DrugUpdater>([
	[HERBAL_TEA_NAME, updateHerbalTea],
	[FERVEX_NAME, updateFervex],
	[MAGIC_PILL_NAME, updateMagicPill],
]);

export const updateDrug = (drug: Drug): void => {
	const updateRule =
		updateRulesByDrugName.get(drug.name) ?? updateStandardDrug;

	updateRule(drug);
};
