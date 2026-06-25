import { Drug } from "../src/class/Drug";
import { Pharmacy } from "../src/class/Pharmacy";
import expectedOutput from "../output.json";

const updateDrug = (drug: Drug): Drug =>
	new Pharmacy([drug]).updateBenefitValue()[0];

describe("Pharmacy", () => {
	describe("standard drugs", () => {
		it("decreases benefit and expiresIn", () => {
			expect(updateDrug(new Drug("Doliprane", 2, 3))).toEqual(
				new Drug("Doliprane", 1, 2),
			);
		});

		it("degrades twice as fast after expiration", () => {
			expect(updateDrug(new Drug("Doliprane", 0, 10))).toEqual(
				new Drug("Doliprane", -1, 8),
			);
		});

		it("never has a negative benefit", () => {
			expect(updateDrug(new Drug("Doliprane", 0, 1))).toEqual(
				new Drug("Doliprane", -1, 0),
			);
		});
	});

	describe("Herbal Tea", () => {
		it("increases benefit as it gets older", () => {
			expect(updateDrug(new Drug("Herbal Tea", 2, 3))).toEqual(
				new Drug("Herbal Tea", 1, 4),
			);
		});

		it("increases twice as fast after expiration", () => {
			expect(updateDrug(new Drug("Herbal Tea", 0, 3))).toEqual(
				new Drug("Herbal Tea", -1, 5),
			);
		});

		it("never has a benefit over 50", () => {
			expect(updateDrug(new Drug("Herbal Tea", 0, 49))).toEqual(
				new Drug("Herbal Tea", -1, 50),
			);
		});
	});

	describe("Fervex", () => {
		it("increases benefit by 1 with more than 10 days left", () => {
			expect(updateDrug(new Drug("Fervex", 11, 35))).toEqual(
				new Drug("Fervex", 10, 36),
			);
		});

		it("increases benefit by 2 with 10 days or less left", () => {
			expect(updateDrug(new Drug("Fervex", 10, 35))).toEqual(
				new Drug("Fervex", 9, 37),
			);
		});

		it("increases benefit by 3 with 5 days or less left", () => {
			expect(updateDrug(new Drug("Fervex", 5, 35))).toEqual(
				new Drug("Fervex", 4, 38),
			);
		});

		it("drops benefit to 0 after expiration", () => {
			expect(updateDrug(new Drug("Fervex", 0, 35))).toEqual(
				new Drug("Fervex", -1, 0),
			);
		});

		it("never has a benefit over 50", () => {
			expect(updateDrug(new Drug("Fervex", 5, 49))).toEqual(
				new Drug("Fervex", 4, 50),
			);
		});
	});

	it("never changes Magic Pill", () => {
		expect(updateDrug(new Drug("Magic Pill", 15, 40))).toEqual(
			new Drug("Magic Pill", 15, 40),
		);
	});

	it("keeps the existing 30-day simulation unchanged", () => {
		const pharmacy = new Pharmacy([
			new Drug("Doliprane", 20, 30),
			new Drug("Herbal Tea", 10, 5),
			new Drug("Fervex", 12, 35),
			new Drug("Magic Pill", 15, 40),
		]);
		const log: Drug[][] = [];

		for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
			log.push(
				JSON.parse(
					JSON.stringify(pharmacy.updateBenefitValue()),
				) as Drug[],
			);
		}

		expect({ result: log }).toEqual(expectedOutput);
	});
});
