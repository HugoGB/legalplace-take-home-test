import { Drug } from "../src/components/Drug";
import { Pharmacy } from "../src/components/Pharmacy";

describe("Pharmacy", () => {
	it("should decrease the benefit and expiresIn", () => {
		expect(
			new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue(),
		).toEqual([new Drug("test", 1, 2)]);
	});
});
