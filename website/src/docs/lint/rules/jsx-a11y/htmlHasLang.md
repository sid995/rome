---
title: Lint Rule jsx-a11y/htmlHasLang
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/jsx-a11y/htmlHasLang
	parent: lint-rules
	title: jsx-a11y/htmlHasLang
---

# jsx-a11y/htmlHasLang

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS hash(675bdf60410a9df17d7c6b4346fa3bfb06330df2) -->

## Examples
### Invalid
<pre class="language-text"><code class="language-text"><<span class="token variable">html</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token variable">props</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token variable">props</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:11</span> <strong>parse/js</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">JSX attribute value should be either an expression or a quoted JSX</span>
    <span style="color: Tomato;">text</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span>
               <span style="color: Tomato;"><strong>^</strong></span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token operator">&gt;</span><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>parse/js</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Unknown start to an statement expression</span>

    <span class="token operator">&gt;</span>&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">`</span><span class="token string">`</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">`</span><span class="token string">`</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">undefined</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">undefined</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">42</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1</span> <strong>lint/jsx-a11y/htmlHasLang</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide a </span><span style="color: Tomato;"><strong>lang</strong></span><span style="color: Tomato;"> attribute when using the </span><span style="color: Tomato;"><strong>html</strong></span><span style="color: Tomato;"> element.</span>

    &lt;<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">42</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token variable">html</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Setting a lang attribute on HTML elements configures the language</span>
    <span style="color: DodgerBlue;">used by screen readers when no user default is specified.</span>

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token string">&quot;en&quot;</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">language</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
<pre class="language-text"><code class="language-text"><<span class="token variable">html</span> <span class="token attr-name">lang</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">language</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token variable">html</span>></code></pre>
