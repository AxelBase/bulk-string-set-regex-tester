<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Bulk String-Set Regex Tester</title>
  <meta name="description" content="Your regex input never leaves your browser. 100% client-side, zero tracking, zero logs — complete privacy guaranteed." />
  <meta property="og:title" content="Privacy Policy | Bulk String-Set Regex Tester" />
  <meta property="og:description" content="Your regex input never leaves your browser. 100% client-side, zero tracking, zero logs — complete privacy guaranteed." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 29, 2025</p>

    <p>Welcome to the <strong>Bulk String-Set Regex Tester</strong> — a completely **client-side**, open-source web tool built by AxelBase. We take your privacy extremely seriously.</p>

    <h2>1. We Collect Absolutely Nothing</h2>
    <p><strong>Your regex patterns and input strings never leave your browser.</strong> This tool runs 100% locally using JavaScript. There is no backend, no database, no server logs, and no data transmission of any kind.</p>

    <p>We do **not** collect, store, or process:</p>
    <ul>
      <li>Personal information (name, email, IP address)</li>
      <li>Regex patterns or test strings you enter</li>
      <li>Browser fingerprints or device information</li>
      <li>Analytics, cookies, pixels, or tracking scripts</li>
    </ul>

    <h2>2. How the Tool Actually Works</h2>
    <p>All regex testing, highlighting, copying, and inversion happens **entirely in your browser memory**. When you close or refresh the page, everything is gone forever. We have no access to your data — ever.</p>

    <h2>3. No Third-Party Services</h2>
    <p>We do not use Google Analytics, Meta Pixel, Cloudflare insights, or any advertising/tracking services. The only external resources are Bootstrap CSS/JS from the official CDN (no tracking) and your browser’s native APIs (clipboard, RegExp engine).</p>

    <h2>4. Local Storage & Session Data</h2>
    <p>The tool uses <strong>no persistent localStorage or IndexedDB</strong>. Any temporary data exists only in RAM during your session and is automatically cleared when you leave.</p>

    <h2>5. Security & Sensitive Data</h2>
    <p>Because nothing is transmitted, this tool is safe for testing:</p>
    <ul>
      <li>API keys and tokens</li>
      <li>Passwords and credentials</li>
      <li>Server logs and database dumps</li>
      <li>Customer data and PII</li>
    </ul>

    <h2>6. Children's Privacy</h2>
    <p>Our service does not target children under 13. Since no data is collected, we comply with COPPA and GDPR-K by design.</p>

    <h2>7. Changes to This Policy</h2>
    <p>If we ever change this policy (extremely unlikely), the new version will be posted here with an updated effective date.</p>

    <h2>8. Contact</h2>
    <p>Questions? Open an issue on our <a href="https://github.com/axelbase/bulk-string-set-regex-tester" target="_blank" rel="noopener">GitHub repository</a>.</p>.

    <p class="italic-note"><strong>Your data belongs to you — always.</strong><br>That’s not marketing. That’s architecture.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #6c757d; }
  .breadcrumbs a { color: #0d6efd; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #6c757d; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #dee2e6; padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: #2c3e50; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f8f9fa; padding-bottom: 0.5rem; }
  .prose ul { list-style-type: 'Checkmark '; padding-left: 1.5rem; }
  .prose ul li::marker { color: #0d6efd; }
  .prose .italic-note { font-style: italic; color: #495057; text-align: center; margin-top: 3.5rem; font-size: 1.1rem; }
</style>