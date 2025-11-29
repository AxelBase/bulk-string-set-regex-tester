<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Why Another Regex Tester?', description: 'Discover why we built a fully client-side, privacy-first bulk regex tester when so many exist online.' },
    { href: '/blog/posts/post2', title: 'JavaScript Regex Limits You Didn’t Know About', description: 'Look-behind assertions, Unicode property escapes, and why your regex works in Python but fails in the browser.' },
    { href: '/blog/posts/post3', title: 'Testing 10,000 Lines in <100ms', description: 'How we achieved near-instant feedback using debouncing, native RegExp.test(), and Svelte reactivity.' },
    { href: '/blog/posts/post4', title: 'The Truth About Regex Flags in JavaScript', description: 'Deep dive into g, i, m, s, u, y — what they actually do, browser support, and common pitfalls.' },
    { href: '/blog/posts/post5', title: 'Highlighting Matches Without InnerHTML Risks', description: 'Safe, fast, XSS-proof match highlighting using replace() and <mark> tags.' },
    { href: '/blog/posts/post6', title: 'Copy Only Matches – A Power User Feature', description: 'How the “Copy Matching / Non-Matching” buttons work and why developers love them.' },
    { href: '/blog/posts/post7', title: 'Mastering the “Invert Results” Toggle', description: 'Learn advanced filtering techniques: find non-matches, clean data, validate exclusions, and debug regex logic faster.' }
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Regex Insights</title>
  <meta name="description" content="Technical deep dives, performance tips, and best practices for the Bulk String-Set Regex Tester." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5 pb-4 border-bottom">
    <h1 class="display-5 fw-bold">Blog: Regex Insights</h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Technical articles, performance deep dives, and JavaScript regex wisdom from the team behind the <strong>Bulk String-Set Regex Tester</strong>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 text-decoration-none shadow-sm hover-shadow">
        <div class="card-body d-flex flex-column">
          <h2 class="h5 fw-bold text-primary mb-3">{post.title}</h2>
          <p class="text-muted small flex-grow-1">{post.description}</p>
          <span class="read-more mt-3 text-primary fw-semibold">
            Read Article
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index { max-width: 1200px; margin: 0 auto; }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #e0e0e0;
  }
  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }
  .hover-shadow { transition: box-shadow 0.2s; }
  .read-more { align-self: flex-start; }
</style>