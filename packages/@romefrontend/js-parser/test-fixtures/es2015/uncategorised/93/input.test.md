# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 93`

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
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 41
			index: 41
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSImportDeclaration {
			defaultSpecifier: undefined
			importKind: undefined
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 41
					index: 41
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: JSStringLiteral {
				value: "crypto"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 41
						index: 41
						line: 1
					}
					start: Object {
						column: 33
						index: 33
						line: 1
					}
				}
			}
			namedSpecifiers: Array [
				JSImportSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					imported: JSIdentifier {
						name: "encrypt"
						loc: Object {
							filename: "input.js"
							identifierName: "encrypt"
							end: Object {
								column: 16
								index: 16
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
							name: "encrypt"
							loc: Object {
								filename: "input.js"
								identifierName: "encrypt"
								end: Object {
									column: 16
									index: 16
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
								column: 16
								index: 16
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
							column: 25
							index: 25
							line: 1
						}
						start: Object {
							column: 18
							index: 18
							line: 1
						}
					}
					imported: JSIdentifier {
						name: "decrypt"
						loc: Object {
							filename: "input.js"
							identifierName: "decrypt"
							end: Object {
								column: 25
								index: 25
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "decrypt"
							loc: Object {
								filename: "input.js"
								identifierName: "decrypt"
								end: Object {
									column: 25
									index: 25
									line: 1
								}
								start: Object {
									column: 18
									index: 18
									line: 1
								}
							}
						}
						importKind: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 25
								index: 25
								line: 1
							}
							start: Object {
								column: 18
								index: 18
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
✔ No known problems!

```
