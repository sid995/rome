# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 297`

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
			column: 30
			index: 30
			line: 1
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "eval is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 5
					index: 5
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
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 9
							index: 9
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "eval"
							loc: Object {
								filename: "input.js"
								identifierName: "eval"
								end: Object {
									column: 5
									index: 5
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
				}
				body: JSBlockStatement {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 30
							index: 30
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
					directives: Array [
						JSDirective {
							value: "use strict"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 25
									index: 25
									line: 1
								}
								start: Object {
									column: 12
									index: 12
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
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 26
									index: 26
									line: 1
								}
							}
							expression: JSNumericLiteral {
								value: 42
								format: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 28
										index: 28
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

  ✖ eval is a reserved word

    (eval) => { "use strict"; 42 }
     ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
