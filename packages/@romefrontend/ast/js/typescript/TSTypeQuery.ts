/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnyTSEntityName,
	NodeBaseWithComments,
	TSImportType,
} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export type TSTypeQuery = NodeBaseWithComments & {
	type: "TSTypeQuery";
	exprName: TSImportType | AnyTSEntityName;
};

export const tsTypeQuery = createBuilder<TSTypeQuery>(
	"TSTypeQuery",
	{
		bindingKeys: {},
		visitorKeys: {
			exprName: true,
		},
	},
);
