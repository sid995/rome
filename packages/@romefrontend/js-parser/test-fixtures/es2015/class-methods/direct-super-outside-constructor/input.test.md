# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > class-methods > direct-super-outside-constructor`

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
			column: 1
			index: 28
			line: 3
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
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "super() is only valid inside a class constructor of a subclass"}
				advice: Array [
					log {
						category: "info"
						text: "Maybe a typo in the method name ('constructor') or not extending another class?"
					}
				]
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 13
					index: 23
					line: 2
				}
				start: Object {
					column: 8
					index: 18
					line: 2
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 28
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 28
						line: 3
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 3
										index: 13
										line: 2
									}
									start: Object {
										column: 2
										index: 12
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 13
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 16
								index: 26
								line: 2
							}
							start: Object {
								column: 2
								index: 12
								line: 2
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
									column: 6
									index: 16
									line: 2
								}
								start: Object {
									column: 4
									index: 14
									line: 2
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 12
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 13
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 16
									index: 26
									line: 2
								}
								start: Object {
									column: 7
									index: 17
									line: 2
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 15
											index: 25
											line: 2
										}
										start: Object {
											column: 8
											index: 18
											line: 2
										}
									}
									expression: JSCallExpression {
										arguments: Array []
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 15
												index: 25
												line: 2
											}
											start: Object {
												column: 8
												index: 18
												line: 2
											}
										}
										callee: JSSuper {
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 13
													index: 23
													line: 2
												}
												start: Object {
													column: 8
													index: 18
													line: 2
												}
											}
										}
									}
								}
							]
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

 input.js:2:8 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ super() is only valid inside a class constructor of a subclass

    1 │ class A {
  > 2 │   x () {super()}
      │         ^^^^^
    3 │ }

  ℹ Maybe a typo in the method name ('constructor') or not extending another class?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
