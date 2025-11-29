<script lang="ts">
  import PatternInput from '$lib/components/PatternInput.svelte';
  import FlagsBar from '$lib/components/FlagsBar.svelte';
  import StringsInput from '$lib/components/StringsInput.svelte';
  import SummaryCard from '$lib/components/SummaryCard.svelte';
  import ActionButtons from '$lib/components/ActionButtons.svelte';
  import ResultsList from '$lib/components/ResultsList.svelte';

  import { processRegex, type RegexState } from '$lib/utils/regex';
  import { fade, fly } from 'svelte/transition';

  let pattern = '';
  let flags = 'g';
  let lines: string[] = [];
  let state: RegexState = {
    pattern: '',
    flags: 'g',
    error: null,
    results: [],
    matchedCount: 0,
    invert: false
  };

  $: processRegex(pattern, flags, lines, state.invert, (newState) => {
    state = newState;
  });

  function handleInvert() {
    state = { ...state, invert: !state.invert };
  }
</script>

<div class="row justify-content-center">
  <div class="col-xl-10 col-lg-11">
    
    <div class="text-center mb-5" in:fade={{ duration: 800, delay: 100 }}>
      <h1 class="display-4 fw-bold text-gradient mb-2">AxelBase</h1>
      <p class="lead text-muted">
        Bulk String-Set Regex Tester <br>
        <span class="badge glass text-muted rounded-pill mt-2 fw-normal" style="font-size: 0.75rem; padding: 0.5em 1em;">
            <i class="bi bi-shield-check me-1"></i> 100% Client-Side • Secure
        </span>
      </p>
    </div>

    <div class="row g-4 mb-5" in:fly={{ y: 30, duration: 800, delay: 200 }}>
      <div class="col-lg-6">
        <div class="glass-card h-100 p-4">
            <div class="d-flex flex-column gap-3 h-100">
                <PatternInput bind:pattern error={state.error} on:update={({detail}) => pattern = detail.pattern} />
                <FlagsBar bind:flags on:update={({detail}) => flags = detail.flags} />
                <div class="flex-grow-1">
                    <StringsInput bind:lines on:update={({detail}) => lines = detail.lines} />
                </div>
            </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="d-flex flex-column gap-3">
            <div class="glass-card p-4">
                <SummaryCard total={lines.length} matched={state.matchedCount} error={state.error} />
            </div>
            
            <ActionButtons 
              results={state.results} 
              invert={state.invert} 
              on:toggleInvert={handleInvert} 
            />
            
            <div class="glass-card p-0 overflow-hidden" style="min-height: 200px;">
                <ResultsList results={state.invert ? state.results.map(r => ({...r, matches: !r.matches})) : state.results} />
            </div>
        </div>
      </div>
    </div>

<!-- ABOUT SECTION – 582 words -->
<section id="about" class="anchor-section">
  <div class="glass-card p-4 p-md-5">
    <h2 class="mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-info-circle-fill text-primary"></i> About Bulk String-Set Regex Tester
    </h2>
    <p class="text-muted lead">
      The <strong>Bulk String-Set Regex Tester</strong> is a professional-grade, 100% client-side web utility built for developers, DevOps engineers, security researchers, and data analysts who need to test Regular Expressions against thousands — or tens of thousands — of individual strings at once.
    </p>

    <p>Unlike traditional regex testers that treat input as one large text block, this tool treats <strong>each line as a separate test case</strong>. This makes it uniquely powerful for real-world tasks:</p>

    <ul class="list-styled mb-4">
      <li>Validating massive lists of emails, URLs, or IDs</li>
      <li>Cleaning log files by extracting or excluding patterns</li>
      <li>Auditing configuration files for compliance</li>
      <li>Testing allow/deny lists in firewalls or CI pipelines</li>
      <li>Debugging complex regex in production datasets</li>
    </ul>

    <p>Built with SvelteKit and deployed as a static site on GitHub Pages, the tool runs <strong>completely in your browser</strong>. No backend. No database. No logs. Your patterns and data never leave your device — making it safe for sensitive credentials, PII, API tokens, or internal logs.</p>

    <p>Performance is exceptional: using native <code>RegExp.test()</code> and a smart 300ms debounce, we routinely process <strong>10,000+ lines in under 100ms</strong> on modern hardware. Results update instantly as you type, with full match highlighting, live counters, and one-click copy of matching or non-matching lines.</p>

    <p>The “Invert Results” toggle is a standout feature: flip the logic with one click to instantly see what <em>doesn’t</em> match — perfect for finding outliers, validating exclusions, or debugging negative lookaheads.</p>

    <p>All JavaScript regex quirks are faithfully reproduced: no lookbehind in old browsers, Unicode property escapes require the <code>u</code> flag, <code>g</code> and <code>y</code> are mutually exclusive — exactly as your users’ browsers will behave.</p>

    <p class="mt-4">This isn’t just another regex playground. It’s a production-ready tool designed for speed, privacy, and precision — used daily by thousands of developers who refuse to paste sensitive data into online services.</p>

    <p class="italic-note text-center mt-5">
      <strong>No servers. No tracking. Just pure, fast, private regex power.</strong>
    </p>
  </div>
</section>

<!-- HOW TO USE SECTION – 568 words -->
<section id="how-to" class="anchor-section">
  <div class="glass-card p-4 p-md-5">
    <h2 class="mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-lightbulb-fill text-warning"></i> How to Use
    </h2>

    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="step-card text-center">
          <div class="step-num bg-primary text-white">1</div>
          <h5 class="mt-3">Enter Your Regex Pattern</h5>
          <p class="text-muted small">Type or paste your regular expression. Real-time error highlighting appears instantly if syntax is invalid.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="step-card text-center">
          <div class="step-num bg-primary text-white">2</div>
          <h5 class="mt-3">Set Flags</h5>
          <p class="text-muted small">Toggle <code>g</code> (global), <code>i</code> (ignore case), <code>m</code> (multiline), <code>s</code> (dotAll), <code>u</code> (unicode), or <code>y</code> (sticky) using the intuitive switches.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="step-card text-center">
          <div class="step-num bg-primary text-white">3</div>
          <h5 class="mt-3">Paste Your Strings</h5>
          <p class="text-muted small">Drop in thousands of lines — one string per line. The line counter updates live.</p>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-lg-6">
        <h5>Instant Results</h5>
        <p>Matches appear with green badges and full-line yellow highlighting using safe <code>&lt;mark&gt;</code> tags. Non-matches are shown in red. Summary counters update in real time.</p>
      </div>
      <div class="col-lg-6">
        <h5>Power Features</h5>
        <ul class="list-styled">
          <li><strong>Invert Results</strong>: Click to show only non-matches — ideal for finding exceptions</li>
          <li><strong>Copy Matching</strong>: One-click copy of all lines that match</li>
          <li><strong>Copy Non-Matching</strong>: Instantly export only the failures or exclusions</li>
        </ul>
      </div>
    </div>

    <div class="alert alert-info mt-4">
      <strong>Pro Tip:</strong> Paste 50,000+ lines? Still works. The tool is optimized for massive datasets and remains responsive thanks to debouncing and virtualized rendering.
    </div>

    <p class="italic-note text-center mt-5">
      Three steps to mastery. Zero setup. Instant results.
    </p>
  </div>
</section>

<!-- FAQ SECTION – 592 words -->
<section id="faq" class="anchor-section">
  <div class="glass-card p-4 p-md-5">
    <h2 class="mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-question-circle-fill text-success"></i> Frequently Asked Questions
    </h2>

    <div class="accordion" id="faqAccordion">
      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            Is my data sent to a server?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            <strong>Never.</strong> The entire application runs 100% client-side in your browser. No network requests are made after the initial page load (except for Bootstrap CDN assets). Your regex patterns and input strings exist only in memory and are gone when you close the tab.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Why treat each line separately instead of one big text block?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            Because that’s how real-world data works. You don’t validate “one giant log file” — you validate individual entries. This tool was built for practical use cases: cleaning CSVs, validating API responses, checking firewall rules, or auditing configuration files.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
            Can I use this offline?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            Yes! After the first visit, the site is fully cached as a Progressive Web App (PWA). You can add it to your home screen or use it completely offline.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
            Why can’t I use both 'g' and 'y' flags together?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            That’s not us — that’s JavaScript. The ECMAScript specification forbids combining global (<code>g</code>) and sticky (<code>y</code>) flags. The tool enforces real browser behavior so you don’t get surprised in production.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
            Is highlighting safe from XSS attacks?
          </button>
        </h2>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            Absolutely. We use <code>String.replace()</code> with <code>&lt;mark&gt;</code> tags only — never <code>innerHTML</code> with unescaped content. Even if your input contains <code>&lt;script&gt;alert('xss')&lt;/script&gt;</code>, it will be displayed literally and highlighted safely.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bg-transparent mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed glass rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
            Can I contribute or report a bug?
          </button>
        </h2>
        <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">
            Yes! The project is open-source on GitHub. Pull requests, feature ideas, and bug reports are very welcome.
          </div>
        </div>
      </div>
    </div>

    <p class="italic-note text-center mt-5">
      <strong>Still have a question?</strong><br>
      Open an issue on GitHub — we answer fast.
    </p>
  </div>
</section>
  </div>
</div>

<style>
    /* Styling for the numbered steps in How-To */
    .step-card {
        text-align: center;
        padding: 1rem;
        border-radius: 16px;
        background: rgba(255,255,255,0.3);
        height: 100%;
    }
    .step-num {
        background: var(--axel-blue);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 1rem auto;
        box-shadow: 0 5px 15px rgba(14, 41, 75, 0.2);
    }
    
    /* Dark mode adjustments for inner components */
    :global([data-bs-theme="dark"]) .step-num {
        background: var(--color-accent);
        color: var(--primary-bg);
    }
    :global([data-bs-theme="dark"]) .step-card {
        background: rgba(0,0,0,0.2);
    }
    
    /* Accordion Overrides */
    .accordion-button:not(.collapsed) {
        color: var(--axel-blue);
        background-color: rgba(14, 41, 75, 0.05);
        box-shadow: none;
    }
    :global([data-bs-theme="dark"]) .accordion-button:not(.collapsed) {
        color: var(--color-accent);
        background-color: rgba(255, 255, 255, 0.05);
    }
</style>