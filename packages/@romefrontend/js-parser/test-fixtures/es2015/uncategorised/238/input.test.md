# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 238`

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
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 19
			index: 19
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Expected keyword from"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 19
					index: 19
					line: 1
				}
			}
		}
	]
	body: Array [
		JSImportDeclaration {
			defaultSpecifier: undefined
			importKind: undefined
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: JSStringLiteral {
				value: ""
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 19
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
			namedSpecifiers: Array [
				JSImportSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					imported: JSIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "foo"
							loc: Object {
								filename: "input.js"
								identifierName: "foo"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
						}
						importKind: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
				}
				JSImportSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
					imported: JSIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 17
								index: 17
								line: 1
							}
							start: Object {
								column: 14
								index: 14
								line: 1
							}
						}
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "bar"
							loc: Object {
								filename: "input.js"
								identifierName: "bar"
								end: Object {
									column: 17
									index: 17
									line: 1
								}
								start: Object {
									column: 14
									index: 14
									line: 1
								}
							}
						}
						importKind: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 17
								index: 17
								line: 1
							}
							start: Object {
								column: 14
								index: 14
								line: 1
							}
						}
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

 input.js:1:19 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected keyword from

    import { foo, bar }
                       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
