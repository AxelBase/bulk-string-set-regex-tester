<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | Bulk String-Set Regex Tester</title>
  <meta name="description" content="Terms of use for the free, open-source, client-side Bulk String-Set Regex Tester." />
  <meta property="og:title" content="Terms & Conditions | Bulk String-Set Regex Tester" />
  <meta property="og:description" content="Terms of use for the free, open-source, client-side Bulk String-Set Regex Tester." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 29, 2025</p>

    <p>By using the <strong>Bulk String-Set Regex Tester</strong> ("the Tool"), you agree to these Terms & Conditions.</p>

    <h2>1. Nature of Service</h2>
    <p>The Tool is a **free, open-source**, client-side web application that performs regex testing entirely in your browser. No data is sent to any server.</p>

    <h2>2. License to Use</h2>
    <p>You are granted a **non-exclusive, royalty-free, worldwide license** to use the Tool for personal or commercial purposes. You may:</p>
    <ul>
      <li>Test unlimited strings and patterns</li>
      <li>Use it offline (after first load)</li>
      <li>Fork, modify, and redistribute under the MIT License</li>
    </ul>

    <h2>3. Prohibited Uses</h2>
    <p>You may not:</p>
    <ul>
      <li>Use the Tool for illegal purposes</li>
      <li>Attempt to reverse-engineer or extract non-public code</li>
      <li>Remove or alter the footer credit without permission</li>
      <li>Resell access to the Tool as a hosted service</li>
    </ul>

    <h2>4. No Warranty</h2>
    <p>The Tool is provided **"AS IS"** without warranty of any kind. We do not guarantee:</p>
    <ul>
      <li>100% regex compatibility with non-browser engines</li>
      <li>Performance on very old browsers</li>
      <li>That results will match server-side regex libraries</li>
    </ul>
    <p>Always verify critical matches in your target environment.</p>

    <h2>5. Limitation of Liability</h2>
    <p>We are **not liable** for any damages arising from use or inability to use the Tool, including data loss, incorrect regex results, or business interruption.</p>

    <h2>6. Intellectual Property</h2>
    <p>The source code is licensed under the **MIT License**. The name “Bulk String-Set Regex Tester” and logo are property of AxelBase.</p>

    <h2>7. Termination</h2>
    <p>We may discontinue the Tool or hosted version at any time without notice.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the laws of **Switzerland**.</p>

    <h2>9. Changes</h2>
    <p>We may update these terms. Continued use after changes constitutes acceptance.</p>

    <p class="italic-note"><strong>Simple, fair, and transparent</strong> — just like the tool itself.</p>
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
  .prose ul { list-style-type: 'Prohibited '; padding-left: 1.5rem; }
  .prose ul li::marker { color: #dc3545; }
  .prose .italic-note { font-style: italic; color: #495057; text-align: center; margin-top: 3.5rem; font-size: 1.1rem; }
</style>