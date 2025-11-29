<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Highlighting Matches Without InnerHTML Risks | AxelBase Blog</title>
  <meta name="description" content="How we safely highlight regex matches using String.replace() and &lt;mark&gt; tags—no XSS, no DOM injection, pure performance." />
  <meta property="og:title" content="Highlighting Matches Without InnerHTML Risks | AxelBase Blog" />
  <meta property="og:description" content="How we safely highlight regex matches using String.replace() and &lt;mark&gt; tags—no XSS, no DOM injection, pure performance." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Highlighting Matches Without InnerHTML Risks</p>
  </div>

  <article class="prose">
    <h1>Highlighting Matches Without InnerHTML Risks</h1>
    <p class="post-meta">Published: November 15, 2025</p>

    <p>Every regex tester highlights matches. But most use <code>innerHTML</code>—a massive security and performance risk. We don’t.</p>

    <h2>The Problem with innerHTML</h2>
    <p>If your input contains <code>&lt;script&gt;</code> or malformed HTML, <code>innerHTML</code> can execute it (XSS) or crash the page. It’s also slow on large datasets.</p>

    <h3>Our Solution: Pure String.replace()</h3>
    <p>We use <code>String.prototype.replace(regex, '&lt;mark&gt;$&lt;/mark&gt;')</code>. It’s:</p>
    <ul>
      <li>100% XSS-safe (no DOM parsing)</li>
      <li>Lightning fast (native C++ engine)</li>
      <li>Works perfectly with <code>global</code> flag</li>
      <li>Preserves original string structure</li>
    </ul>

    <h3>Then We Use Binding Safely</h3>
    <p>Svelte’s is safe to control the output. Since we only insert <code>&lt;mark&gt;</code> tags, there’s zero risk.</p>

    <h2>Real-World Example</h2>
    <p>Paste 5,000 lines containing <code>&lt;script&gt;alert('xss')&lt;/script&gt;</code>. Other testers crash or execute. Ours? Just highlights normally. No popups. No danger.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why not use a library like mark.js?</summary>
      <p>Extra bundle size, DOM manipulation, slower performance. We prefer zero dependencies.</p>
    </details>
    <details>
      <summary>Can I customize the highlight color?</summary>
      <p>Yes—modify the <code>&lt;mark&gt;</code> CSS in <code>app.css</code>.</p>
    </details>
    <details>
      <summary>Does it work with overlapping matches?</summary>
      <p>No regex engine supports overlapping matches natively. Our approach is standard-compliant.</p>
    </details>

    <p class="italic-note">Fast. Safe. Beautiful. That’s how highlighting should be.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #6c757d; }
  .breadcrumbs a { color: #0d6efd; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #6c757d; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #dee2e6; padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: #2c3e50; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f8f9fa; padding-bottom: 0.5rem; }
  .prose p { color: #343a40; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: #343a40; }
  .prose ul li::marker { color: #0d6efd; }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose details { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: #e9ecef; }
  .prose summary { cursor: pointer; font-weight: 600; color: #2c3e50; list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: #0d6efd; font-weight: bold; display: inline-block; transition: transform 0.2s ease; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid #0d6efd; color: #6c757d; }
  .prose .italic-note { font-style: italic; color: #6c757d; text-align: center; margin-top: 3rem; }
</style>