# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 304`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 45
			index: 45
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 45
					index: 45
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 45
						index: 45
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 39
									index: 39
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "propName"
											loc: Object {
												filename: "input.js"
												identifierName: "propName"
												end: Object {
													column: 13
													index: 13
													line: 1
												}
												start: Object {
													column: 5
													index: 5
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 13
												index: 13
												line: 1
											}
											start: Object {
												column: 5
												index: 5
												line: 1
											}
										}
									}
									value: JSBindingAssignmentPattern {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 38
												index: 38
												line: 1
											}
											start: Object {
												column: 15
												index: 15
												line: 1
											}
										}
										left: JSBindingIdentifier {
											name: "localVar"
											loc: Object {
												filename: "input.js"
												identifierName: "localVar"
												end: Object {
													column: 23
													index: 23
													line: 1
												}
												start: Object {
													column: 15
													index: 15
													line: 1
												}
											}
										}
										right: JSReferenceIdentifier {
											name: "defaultValue"
											loc: Object {
												filename: "input.js"
												identifierName: "defaultValue"
												end: Object {
													column: 38
													index: 38
													line: 1
												}
												start: Object {
													column: 26
													index: 26
													line: 1
												}
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 38
											index: 38
											line: 1
										}
										start: Object {
											column: 5
											index: 5
											line: 1
										}
									}
								}
							]
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 45
								index: 45
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
						init: JSReferenceIdentifier {
							name: "obj"
							loc: Object {
								filename: "input.js"
								identifierName: "obj"
								end: Object {
									column: 45
									index: 45
									line: 1
								}
								start: Object {
									column: 42
									index: 42
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
