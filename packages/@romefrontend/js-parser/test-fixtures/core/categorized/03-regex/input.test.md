# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > categorized > 03-regex`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
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
			index: 50
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 2
					index: 49
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 48
						line: 3
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 1
							index: 48
							line: 3
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					body: Array [
						JSReturnStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 31
									index: 46
									line: 2
								}
								start: Object {
									column: 2
									index: 17
									line: 2
								}
							}
							argument: JSBinaryExpression {
								operator: "/"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 31
										index: 46
										line: 2
									}
									start: Object {
										column: 9
										index: 24
										line: 2
									}
								}
								right: JSReferenceIdentifier {
									name: "i"
									loc: Object {
										filename: "input.js"
										identifierName: "i"
										end: Object {
											column: 31
											index: 46
											line: 2
										}
										start: Object {
											column: 30
											index: 45
											line: 2
										}
									}
								}
								left: JSBinaryExpression {
									operator: "/"
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 29
											index: 44
											line: 2
										}
										start: Object {
											column: 9
											index: 24
											line: 2
										}
									}
									right: JSNumericLiteral {
										value: 42
										format: undefined
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 29
												index: 44
												line: 2
											}
											start: Object {
												column: 27
												index: 42
												line: 2
											}
										}
									}
									left: JSFunctionExpression {
										id: JSBindingIdentifier {
											name: "fn"
											loc: Object {
												filename: "input.js"
												identifierName: "fn"
												end: Object {
													column: 20
													index: 35
													line: 2
												}
												start: Object {
													column: 18
													index: 33
													line: 2
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 25
												index: 40
												line: 2
											}
											start: Object {
												column: 9
												index: 24
												line: 2
											}
										}
										body: JSBlockStatement {
											body: Array []
											directives: Array []
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 25
													index: 40
													line: 2
												}
												start: Object {
													column: 23
													index: 38
													line: 2
												}
											}
										}
										head: JSFunctionHead {
											async: false
											generator: false
											hasHoistedVars: false
											params: Array []
											rest: undefined
											returnType: undefined
											thisType: undefined
											typeParameters: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 22
													index: 37
													line: 2
												}
												start: Object {
													column: 20
													index: 35
													line: 2
												}
											}
										}
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
✔ No known problems!

```
