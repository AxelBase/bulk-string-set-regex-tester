<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | Bulk String-Set Regex Tester</title>
  <meta name="description" content="The page you're looking for doesn't exist. Return to the regex tester or explore our blog." />
  <meta name="robots" content="noindex" />
  <meta property="og:title" content="404 – Page Not Found | Bulk String-Set Regex Tester" />
  <meta property="og:description" content="The page you're looking for doesn't exist. Return to the regex tester or explore our blog." />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 post-layout">
  <div class="breadcrumbs mb-4">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p class="text-danger fw-bold">404 Not Found</p>
  </div>

  <article class="prose text-center">
    <h1 class="display-4 fw-bold text-primary mb-4">
      404 — Oops! This Page Took a Wrong Turn
    </h1>

    <p class="lead text-muted mb-5">
      The URL doesn't match any regex in our system.
    </p>

    <div class="bg-light border rounded-3 p-5 mb-5">
      <p class="fs-4 mb-4">Don't worry — your patterns are safe. Let's get you back on track:</p>
      
      <div class="d-grid gap-3 max-w-400 mx-auto">
        <a href="{base}/" class="btn btn-primary btn-lg">
          Back to Regex Tester
        </a>
        <a href="{base}/blog" class="btn btn-outline-secondary btn-lg">
          Read the Blog
        </a>
      </div>
    </div>

    <h2 class="h4 fw-semibold text-dark mb-3">Still lost?</h2>
    <p class="text-muted mb-4">
      You might have followed a broken link, or the page has been moved.<br>
      Try searching from the homepage or using the navigation above.
    </p>

    <h2 class="h5 fw-semibold mt-5 mb-3">Quick Links</h2>
    <ul class="list-unstyled d-flex flex-wrap justify-content-center gap-4 text-center">
      <li><a href="{base}/" class="text-decoration-none">Home</a></li>
      <li><a href="{base}/blog" class="text-decoration-none">Blog</a></li>
      <li><a href="{base}/privacy" class="text-decoration-none">Privacy Policy</a></li>
      <li><a href="{base}/terms" class="text-decoration-none">Terms</a></li>
    </ul>

    <p class="italic-note mt-5 text-muted">
      <strong>No route left behind.</strong><br>
      Even error pages should be fast, friendly, and on-brand.
    </p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
  .breadcrumbs {
    font-size: 0.95rem;
    color: #6c757d;
  }
  .breadcrumbs a {
    color: #0d6efd;
    text-decoration: none;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .max-w-400 {
    max-width: 400px;
  }
  .italic-note {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  @media (max-width: 576px) {
    .display-4 {
      font-size: 2.5rem;
    }
  }
</style>