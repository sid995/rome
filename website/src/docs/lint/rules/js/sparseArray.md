---
title: Lint Rule js/sparseArray
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/js/sparseArray
	parent: lint-rules
	title: js/sparseArray
---

# js/sparseArray

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS hash(cebd1bad2b29d7624059b040c80c729b23bda36e) -->

## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:3</span> <strong>lint/js/sparseArray</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">This </span><span style="color: Tomato;"><strong>array</strong></span><span style="color: Tomato;"> contains an </span><span style="color: Tomato;"><strong>empty slot</strong></span><span style="color: Tomato;">.</span>

    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
       <span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Sparse arrays without values for some items can lead to confusion.</span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Recommended fix</span>

  <span style="color: Tomato;">-</span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>undefined</strong></span>

</code></pre>
