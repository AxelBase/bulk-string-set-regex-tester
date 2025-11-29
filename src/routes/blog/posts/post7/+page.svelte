<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Mastering the “Invert Results” Toggle | AxelBase Blog</title>
  <meta name="description" content="Learn advanced filtering techniques using the Invert toggle: find non-matches, clean data, validate exclusions, and debug faster." />
  <meta property="og:title" content="Mastering the “Invert Results” Toggle | AxelBase Blog" />
  <meta property="og:description" content="Learn advanced filtering techniques using the Invert toggle: find non-matches, clean data, validate exclusions, and debug faster." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Mastering the “Invert Results” Toggle</p>
  </div>

  <article class="prose">
    <h1>Mastering the “Invert Results” Toggle</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>One checkbox. Total control. The “Invert Results” toggle is the most underrated feature in our Bulk String-Set Regex Tester—and one of the most powerful.</p>

    <h2>Find What Doesn’t Match</h2>
    <p>You wrote a regex to catch all valid URLs. 99.9% match. Who are the 0.1% that don’t? Click “Invert” → now only the failures are green. Copy them. Fix them. Done.</p>

    <h3>Validate Exclusions</h3>
    <p>Need to ensure certain patterns are absent (e.g., no <code>http://</code> in a list of HTTPS URLs)? Write a positive regex for the bad pattern → Invert → any matches now appear as “Match”. Zero means you’re clean.</p>

    <h3>Negative Lookahead Debugging</h3>
    <p>Your negative lookahead isn’t working? Test the positive version first → Invert → now you’re directly testing what should be excluded. Instant clarity.</p>

    <h3>Data Cleaning Workflow</h3>
    <p>Want to remove everything that matches a pattern (e.g., old tracking codes)?</p>
    <ol>
      <li>Paste your list</li>
      <li>Write the bad pattern</li>
      <li>Click “Invert Results”</li>
      <li>Click “Copy Matching” → get only the clean lines</li>
    </ol>

    <h2>Under the Hood</h2>
    <p>Invert doesn’t re-run the regex. It simply flips the boolean on each result and recalculates counters. It’s instant—even with 50,000 lines.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Does Invert affect performance?</summary>
      <p>No. It’s a simple array transformation—under 1ms.</p>
    </details>
    <details>
      <summary>Can I chain multiple inverts?</summary>
      <p>Toggle on/off as needed. State is preserved.</p>
    </details>
    <details>
      <summary>Best use case you’ve seen?</summary>
      <p>A user found 7 malformed JSON strings in a 20,000-line log using Invert in 8 seconds.</p>
    </details>

    <p class="italic-note">Sometimes the answer isn’t what matches—it’s what doesn’t.</p>
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
  .prose ol { padding-left: 1.8rem; }
  .prose ol li { margin-bottom: 0.5rem; }
  .prose details { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: #e9ecef; }
  .prose summary { cursor: pointer; font-weight: 600; color: #2c3e50; list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: #0d6efd; font-weight: bold; display: inline-block; transition: transform 0.2s ease; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid #0d6efd; color: #6c757d; }
  .prose .italic-note { font-style: italic; color: #6c757d; text-align: center; margin-top: 3rem; }
</style>