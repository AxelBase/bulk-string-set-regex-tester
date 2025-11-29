<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Truth About Regex Flags in JavaScript | AxelBase Blog</title>
  <meta name="description" content="Deep dive into JavaScript regex flags (g, i, m, s, u, y): what they actually do, browser support, and common mistakes." />
  <meta property="og:title" content="The Truth About Regex Flags in JavaScript | AxelBase Blog" />
  <meta property="og:description" content="Deep dive into JavaScript regex flags (g, i, m, s, u, y): what they actually do, browser support, and common mistakes." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>The Truth About Regex Flags in JavaScript</p>
  </div>

  <article class="prose">
    <h1>The Truth About Regex Flags in JavaScript</h1>
    <p class="post-meta">Published: November 12, 2025</p>

    <p>Regex flags change everything. But in JavaScript, they behave differently than in Python, Ruby, or Perl. Here’s the definitive guide—tested live in our Bulk String-Set Regex Tester.</p>

    <h2>g – Global: More Than You Think</h2>
    <p>Without <code>g</code>, <code>.exec()</code> and <code>.test()</code> stop at the first match. With <code>g</code>, they remember <code>lastIndex</code> and continue. But beware: a failed match resets <code>lastIndex</code> to 0. Our tester shows this instantly.</p>

    <h3>i – Case Insensitive</h3>
    <p>Works as expected—but did you know it affects Unicode too? With <code>u</code> flag, <code>i</code> matches case-insensitively across full Unicode ranges (e.g., German ß → SS).</p>

    <h3>m – Multiline Mode</h3>
    <p><code>^</code> and <code>$</code> match line starts/ends, not just string boundaries. Essential for validating multi-line logs or CSVs.</p>

    <h3>s – DotAll (The “.” Fix)</h3>
    <p>By default, <code>.</code> doesn’t match newlines. With <code>s</code>, it does. Perfect for scraping HTML or Markdown.</p>

    <h3>u – Unicode Mode</h3>
    <p>Enables, proper emoji handling, and correct quantification of astral characters (e.g.,). Without <code>u</code>, <code>.length</code> lies on emoji strings.</p>

    <h3>y – Sticky Mode</h3>
    <p>Forces matching at <code>lastIndex</code> only. Great for tokenizers and lexers. Cannot be combined with <code>g</code>.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I use g and y together?</summary>
      <p>No. JavaScript throws a SyntaxError. Our tester disables invalid combinations automatically.</p>
    </details>
    <details>
      <summary>Why does my regex fail with Unicode?</summary>
      <p>You probably forgot the <code>u</code> flag. Toggle it in our tool and watch it work.</p>
    </details>
    <details>
      <summary>Is the s flag widely supported?</summary>
      <p>Yes—in all modern browsers since 2018 (Chrome 62+, Firefox 54+).</p>
    </details>

    <p class="italic-note">Master every flag. Test every edge case. All in your browser.</p>
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
  .prose h1, .prose h2, .prose h3 { color: #2c3e50; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f8f9fa; padding-bottom: 0.5rem; }
  .prose p { color: #343a40; }
  .prose details { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; transition: background-color 0.2s ease; }
  .prose details[open] { background-color: #e9ecef; }
  .prose summary { cursor: pointer; font-weight: 600; color: #2c3e50; list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: #0d6efd; font-weight: bold; display: inline-block; transition: transform 0.2s ease; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid #0d6efd; color: #6c757d; }
  .prose .italic-note { font-style: italic; color: #6c757d; text-align: center; margin-top: 3rem; }
</style>