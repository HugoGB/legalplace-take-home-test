import type { Drug } from "../class/Drug";

import { DAFALGAN_NAME, updateDafalgan } from "../drugs/dafalgan";
import { FERVEX_NAME, updateFervex } from "../drugs/fervex";
import { HERBAL_TEA_NAME, updateHerbalTea } from "../drugs/herbalTea";
import { MAGIC_PILL_NAME, updateMagicPill } from "../drugs/magicPill";
import { updateStandardDrug } from "../drugs/standardDrug";
import type { DrugUpdater } from "../types/drugUpdater";

const updateRulesByDrugName = new Map<string, DrugUpdater>([
	[HERBAL_TEA_NAME, updateHerbalTea],
	[FERVEX_NAME, updateFervex],
	[MAGIC_PILL_NAME, updateMagicPill],
	[DAFALGAN_NAME, updateDafalgan],
]);

export const updateDrug = (drug: Drug): void => {
	const updateRule =
		updateRulesByDrugName.get(drug.name) ?? updateStandardDrug;

	updateRule(drug);
};
