# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > issue-11387`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 0
			index: 70
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected ,"}
			}
			location: Object {
				filename: "input.jsx"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 63
					index: 63
					line: 1
				}
				start: Object {
					column: 46
					index: 46
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 69
					index: 69
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXElement {
				name: JSXIdentifier {
					name: "div"
					loc: Object {
						filename: "input.jsx"
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
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: Object {
					filename: "input.jsx"
					end: Object {
						column: 69
						index: 69
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				children: Array [
					JSXExpressionContainer {
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 46
								index: 46
								line: 1
							}
							start: Object {
								column: 5
								index: 5
								line: 1
							}
						}
						expression: JSSequenceExpression {
							loc: Object {
								filename: "input.jsx"
								end: Object {
									column: 46
									index: 46
									line: 1
								}
								start: Object {
									column: 7
									index: 7
									line: 1
								}
							}
							expressions: Array [
								JSMemberExpression {
									loc: Object {
										filename: "input.jsx"
										end: Object {
											column: 18
											index: 18
											line: 1
										}
										start: Object {
											column: 7
											index: 7
											line: 1
										}
									}
									object: JSThisExpression {
										loc: Object {
											filename: "input.jsx"
											end: Object {
												column: 11
												index: 11
												line: 1
											}
											start: Object {
												column: 7
												index: 7
												line: 1
											}
										}
									}
									property: JSStaticMemberProperty {
										value: JSIdentifier {
											name: "class"
											loc: Object {
												filename: "input.jsx"
												identifierName: "class"
												end: Object {
													column: 18
													index: 18
													line: 1
												}
												start: Object {
													column: 13
													index: 13
													line: 1
												}
											}
										}
										optional: true
										loc: Object {
											filename: "input.jsx"
											identifierName: "class"
											end: Object {
												column: 18
												index: 18
												line: 1
											}
											start: Object {
												column: 13
												index: 13
												line: 1
											}
										}
									}
								}
								JSMemberExpression {
									loc: Object {
										filename: "input.jsx"
										end: Object {
											column: 30
											index: 30
											line: 1
										}
										start: Object {
											column: 20
											index: 20
											line: 1
										}
									}
									object: JSThisExpression {
										loc: Object {
											filename: "input.jsx"
											end: Object {
												column: 24
												index: 24
												line: 1
											}
											start: Object {
												column: 20
												index: 20
												line: 1
											}
										}
									}
									property: JSStaticMemberProperty {
										value: JSIdentifier {
											name: "class"
											loc: Object {
												filename: "input.jsx"
												identifierName: "class"
												end: Object {
													column: 30
													index: 30
													line: 1
												}
												start: Object {
													column: 25
													index: 25
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.jsx"
											identifierName: "class"
											end: Object {
												column: 30
												index: 30
												line: 1
											}
											start: Object {
												column: 25
												index: 25
												line: 1
											}
										}
									}
								}
								JSMemberExpression {
									loc: Object {
										filename: "input.jsx"
										end: Object {
											column: 46
											index: 46
											line: 1
										}
										start: Object {
											column: 32
											index: 32
											line: 1
										}
									}
									object: JSThisExpression {
										loc: Object {
											filename: "input.jsx"
											end: Object {
												column: 36
												index: 36
												line: 1
											}
											start: Object {
												column: 32
												index: 32
												line: 1
											}
										}
									}
									property: JSStaticMemberProperty {
										value: JSIdentifier {
											name: "function"
											loc: Object {
												filename: "input.jsx"
												identifierName: "function"
												end: Object {
													column: 46
													index: 46
													line: 1
												}
												start: Object {
													column: 38
													index: 38
													line: 1
												}
											}
										}
										optional: true
										loc: Object {
											filename: "input.jsx"
											identifierName: "function"
											end: Object {
												column: 46
												index: 46
												line: 1
											}
											start: Object {
												column: 38
												index: 38
												line: 1
											}
										}
									}
								}
							]
						}
					}
					JSXText {
						value: ", this.function)}"
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 63
								index: 63
								line: 1
							}
							start: Object {
								column: 46
								index: 46
								line: 1
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

 input.jsx:1:46 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected ,

    <div>{(this?.class, this.class, this?.function, this.function)}</div>
                                                  ^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
