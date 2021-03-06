import {NodeBaseWithComments} from "../../index";
import {createBuilder} from "../../utils";

export type CSSFrequencyType = NodeBaseWithComments & {
	type: "CSSFrequencyType";
	// TODO
};

export const cssFrequencyType = createBuilder<CSSFrequencyType>(
	"CSSFrequencyType",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
