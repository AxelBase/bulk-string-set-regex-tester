<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Copy Only Matches – A Power User Feature | AxelBase Blog</title>
  <meta name="description" content="Learn how the “Copy Matching” and “Copy Non-Matching” buttons save hours when cleaning data, validating logs, or extracting patterns." />
  <meta property="og:title" content="Copy Only Matches – A Power User Feature | AxelBase Blog" />
  <meta property="og:description" content="Learn how the “Copy Matching” and “Copy Non-Matching” buttons save hours when cleaning data, validating logs, or extracting patterns." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Copy Only Matches – A Power User Feature</p>
  </div>

  <article class="prose">
    <h1>Copy Only Matches – A Power User Feature</h1>
    <p class="post-meta">Published: November 18, 2025</p>

    <p>Every developer has done it: run a regex, find the matches, then manually copy them. No more. Our “Copy Matching” and “Copy Non-Matching” buttons are pure productivity.</p>

    <h2>Use Case: Extract Valid Emails</h2>
    <p>Paste 10,000 mixed emails → pattern <code>^[^\s@]+@[^\s@]+\.[^\s@]+$</code> → click “Copy Matching” → paste into your CRM. Done in 3 seconds.</p>

    <h3>Use Case: Find Invalid Log Entries</h3>
    <p>Pattern for valid logs → click “Copy Non-Matching” → instantly get the anomalies for investigation.</p>

    <h3>Use Case: Data Cleaning</h3>
    <p>Need to remove everything that matches a bad pattern (e.g., old URLs)? Invert → Copy Matching → delete. Clean dataset instantly.</p>

    <h2>How It Works</h2>
    <p>We filter the internal results array client-side, then use <code>navigator.clipboard.writeText()</code> with a secure fallback. Zero server roundtrips. Zero formatting loss.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Does it preserve line order?</summary>
      <p>Yes—exactly as they appeared in your input.</p>
    </details>
    <details>
      <summary>What if I have 50,000 lines?</summary>
      <p>Still works. Clipboard API handles large text efficiently.</p>
    </details>
    <details>
      <summary>Can I copy both at once?</summary>
      <p>Not yet—but you can open two tabs and copy separately.</p>
    </details>

    <p class="italic-note">Stop selecting. Start copying. Power tools for power users.</p>
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