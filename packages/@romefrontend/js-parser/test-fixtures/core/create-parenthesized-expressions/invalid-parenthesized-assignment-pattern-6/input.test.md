# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > create-parenthesized-expressions > invalid-parenthesized-assignment-pattern-6`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 11
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Invalid parenthesized binding"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 4
					index: 4
					line: 1
				}
				start: Object {
					column: 1
					index: 1
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				right: JSArrayExpression {
					elements: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 10
							index: 10
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 4
							index: 4
							line: 1
						}
						start: Object {
							column: 1
							index: 1
							line: 1
						}
					}
					elements: Array [
						JSAssignmentIdentifier {
							name: "a"
							loc: Object {
								filename: "input.js"
								identifierName: "a"
								end: Object {
									column: 3
									index: 3
									line: 1
								}
								start: Object {
									column: 2
									index: 2
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid parenthesized binding

    ([a]) = []
     ^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
