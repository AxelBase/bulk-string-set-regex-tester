<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Why Another Regex Tester? | AxelBase Blog</title>
  <meta name="description" content="Learn why we built a privacy-first, client-side Bulk String-Set Regex Tester that runs entirely in your browser." />
  <meta property="og:title" content="Why Another Regex Tester? | AxelBase Blog" />
  <meta property="og:description" content="Learn why we built a privacy-first, client-side Bulk String-Set Regex Tester that runs entirely in your browser." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Why Another Regex Tester?</p>
  </div>

  <article class="prose">
    <h1>Why Another Regex Tester?</h1>
    <p class="post-meta">Published: November 1, 2025</p>

    <p>In a world with countless regex testers, why did we create the Bulk String-Set Regex Tester? The answer lies in three words: <strong>privacy, speed, and simplicity</strong>.</p>

    <h2>Privacy First</h2>
    <p>Most online regex tools send your input strings to a server for processing. If you’re testing sensitive data—like email lists, API keys, or server logs—that’s a risk. Our tool is 100% client-side, built with SvelteKit and deployed as a static site on GitHub Pages. Your data never leaves your browser, ensuring maximum privacy.</p>

    <h3>Speed That Scales</h3>
    <p>Testing thousands of strings shouldn’t slow you down. Using native JavaScript’s <code>RegExp.test()</code> and a 300ms debounce, our tool processes 10,000 lines in under 100ms on modern hardware. Svelte’s reactivity ensures the UI updates instantly as you type, with zero lag.</p>

    <h3>Simplicity for All</h3>
    <p>Whether you’re a regex novice or a seasoned developer, our interface is intuitive. Enter your pattern, toggle flags (g, i, m, s, u, y), paste your strings, and see results in real-time. Features like “Copy Matching” and “Invert Results” make complex tasks effortless.</p>

    <h2>Why It Matters</h2>
    <p>Developers need tools that respect their data and time. By combining privacy, performance, and a clean Bootstrap 5 design, we’ve built a regex tester that feels like an extension of your workflow. No accounts, no cookies, no tracking—just a tool that works.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is it really 100% client-side?</summary>
      <p>Yes. All processing happens in your browser using JavaScript. No network requests are made after the initial page load.</p>
    </details>
    <details>
      <summary>Can it handle large datasets?</summary>
      <p>Absolutely. It’s optimized for 10,000+ lines with minimal memory usage.</p>
    </details>
    <details>
      <summary>How do I report a bug?</summary>
      <p>File an issue on our <a href="https://github.com/YourUsername/bulk-string-set-regex-tester" target="_blank" rel="noopener">GitHub repo</a>.</p>
    </details>

    <p class="italic-note">Built for developers, by developers. Try it now.</p>
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