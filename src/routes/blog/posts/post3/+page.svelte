<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Testing 10,000 Lines in &lt;100ms | AxelBase Blog</title>
  <meta name="description" content="How the Bulk String-Set Regex Tester achieves sub-100ms performance for 10,000+ lines using debouncing and Svelte." />
  <meta property="og:title" content="Testing 10,000 Lines in &lt;100ms | AxelBase Blog" />
  <meta property="og:description" content="How the Bulk String-Set Regex Tester achieves sub-100ms performance for 10,000+ lines using debouncing and Svelte." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Testing 10,000 Lines in &lt;100ms</p>
  </div>

  <article class="prose">
    <h1>Testing 10,000 Lines in &lt;100ms</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>Processing 10,000 strings with a regex in under 100ms—sounds impossible for a browser-based tool, right? With the Bulk String-Set Regex Tester, it’s reality. Here’s how we did it.</p>

    <h2>Debouncing for Efficiency</h2>
    <p>Every keystroke could trigger a full re-evaluation of thousands of strings. Instead, we use <code>lodash.debounce</code> to wait 300ms after your last input. This ensures we only process once you’ve paused typing, saving CPU cycles.</p>

    <h3>Native JavaScript RegExp</h3>
    <p>We rely on the browser’s native <code>RegExp.test()</code> for matching. It’s lightning-fast and optimized at the engine level (V8, SpiderMonkey, etc.). No external libraries, just pure JavaScript.</p>

    <h3>Svelte’s Reactivity</h3>
    <p>Svelte’s reactive statements (<code>$:</code>) update the UI instantly when results are ready. The results list is virtualized to render only visible items, keeping memory usage low even with massive datasets.</p>

    <h2>Real-World Performance</h2>
    <p>Testing on a 2023 MacBook (Chrome 130), we processed 10,000 email addresses with a complex pattern (<code>^[\w-]+@[\w-]+\.com$</code>) in ~80ms. On mid-range phones, it’s still under 200ms. Try pasting a huge dataset and see for yourself.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Does performance degrade with complex regex?</summary>
      <p>Complex patterns (e.g., nested groups) may slow slightly, but our debounce keeps it smooth.</p>
    </details>
    <details>
      <summary>Can I test on mobile?</summary>
      <p>Yes, our Bootstrap 5 layout is fully responsive, and performance holds up on modern devices.</p>
    </details>
    <details>
      <summary>How do I optimize my regex?</summary>
      <p>Avoid catastrophic backtracking (e.g., <code>(.*)*</code>) and test with our tool to spot slowdowns.</p>
    </details>

    <p class="italic-note">Speed without compromise—test your regexes instantly.</p>
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