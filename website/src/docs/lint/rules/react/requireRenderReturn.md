---
title: Lint Rule react/requireRenderReturn
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/react/requireRenderReturn
	parent: lint-rules
	title: react/requireRenderReturn
---

# react/requireRenderReturn

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS hash(d34a3766c2e4c5238e132fc0876573522e9d7eb7) -->

## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:10</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
     <strong> │ </strong>           <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <<span class="token variable">div</span>> Foo <<span class="token operator">/</span><span class="token variable">div</span>>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:10</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong>import React from &apos;react&apos;;
  <strong>  2</strong><strong> │ </strong>class Foo extends React.Component {
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  render() {
     <strong> │ </strong>           <span style="color: Tomato;"><strong>^</strong></span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 4</strong><strong> │ </strong>    [1, 2, 3].map((num) =&gt; {
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 5</strong><strong> │ </strong>      return &lt;<span class="token variable">div</span>&gt; Foo &lt;<span class="token operator">/</span><span class="token variable">div</span>&gt;
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 6</strong><strong> │ </strong>    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 7</strong><strong> │ </strong>  <span class="token punctuation">}</span>
     <strong> │ </strong><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  8</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">Component</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React, {Component} from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">Component</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">Component</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">Component</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React, {Component} from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">Component</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">Component</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">PureComponent</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">PureComponent</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React, {PureComponent} from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:3:16</span> <strong>lint/react/requireRenderReturn</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">The </span><span style="color: Tomato;"><strong>render</strong></span><span style="color: Tomato;"> method on a component must return content.</span>

  <strong>  1</strong><strong> │ </strong><span class="token keyword">import</span> <span class="token variable">React</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">PureComponent</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">const</span> <span class="token variable">Foo</span> <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token keyword">extends</span> <span class="token variable">PureComponent</span> <span class="token punctuation">{</span>
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 3</strong><strong> │ </strong>  <span class="token variable">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     <strong> │ </strong>                 <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  4</strong><strong> │ </strong><span class="token punctuation">}</span>

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <<span class="token variable">div</span>>Foo<<span class="token operator">/</span><span class="token variable">div</span>><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">React</span> <span class="token keyword">from</span> <span class="token string">&apos;react&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">React</span><span class="token punctuation">.</span><span class="token variable">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <<span class="token variable">div</span>>Foo<<span class="token operator">/</span><span class="token variable">div</span>><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><strong><span style="background-color: red">import React from &apos;react&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">class Foo {
  render = () => { return <><<span class="token operator">/</span>> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<pre class="language-text"><code class="language-text">class Foo {
  render = () => (<><<span class="token operator">/</span>><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">class</span> <span class="token variable">Foo</span> <span class="token keyword">extends</span> <span class="token variable">Bar</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
