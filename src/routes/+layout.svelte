<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427'; 
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // --- Click Outside Directive ---
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- Dark Mode Logic ---
  function toggleTheme() {
    const body = document.body;
    const current = body.getAttribute('data-bs-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-bs-theme', next);
  }
</script>

<link rel="stylesheet" href="{base}/bootstrap.min.css" />

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
       style="pointer-events: auto; max-width: 1200px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none" aria-label="Home">
        <div class="logo-wrapper">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
        </div>
        <span class="fw-bold fs-5 tracking-tight brand-text">AxelBase</span>
      </a>

      <div class="position-relative ms-2 ms-md-3" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn btn-coffee d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <svg class="coffee-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown glass" transition:slide={{ duration: 200 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="donation-link"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
        
        <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
          <li class="nav-item"><a class="nav-link-custom" href="{base}/">Home</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="{base}/#about">About</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
          <li class="nav-item ms-1"><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
        </ul>

        <button 
          class="btn btn-theme-toggle" 
          on:click={toggleTheme} 
          aria-label="Toggle Dark Mode"
        >
          <i class="bi bi-moon-stars-fill theme-icon"></i>
        </button>

        <button 
            class="navbar-toggler d-lg-none border-0 bg-transparent p-0 ms-2" 
            type="button" 
            on:click={toggleSidebar}
            aria-label="Toggle sidebar menu" 
        >
            <i class="bi bi-grid-fill fs-2" style="color: var(--axel-blue);"></i>
        </button>
      </div>

  </nav>
</header>

<main class="container-fluid py-4" in:fade={{ duration: 300 }}>
  <slot />
</main>

<footer class="fixed-bottom p-3" style="pointer-events: none; z-index: 1030;">
    <div class="container glass rounded-pill px-4 py-2 d-flex flex-column flex-sm-row justify-content-between align-items-center shadow-sm small text-muted"
         style="pointer-events: auto; max-width: 900px;">
        <span>&copy; {new Date().getFullYear()} AxelBase Regex Tester</span>
        <div class="d-flex gap-3">
            <a href="{base}/privacy" class="footer-link">Privacy</a>
            <a href="{base}/terms" class="footer-link">Terms</a>
        </div>
    </div>
</footer>

<style>
  /* Brand */
  .brand-text { color: var(--color-text-main); }
  .navbar-brand-logo { height: 32px; width: auto; transition: transform 0.3s ease; }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }

  /* Nav Links */
  .nav-link-custom { 
    position: relative; 
    padding: 0.5rem 0.8rem; 
    color: var(--color-text-muted); 
    font-weight: 600; 
    font-size: 0.95rem;
    transition: color 0.3s; 
  }
  .nav-link-custom::after { 
    content: ''; 
    position: absolute; 
    width: 0; 
    height: 3px; 
    bottom: 2px; 
    left: 50%; 
    background-color: var(--axel-blue); 
    transition: all 0.3s ease-in-out; 
    transform: translateX(-50%); 
    border-radius: 2px; 
  }
  
  /* Dark mode adjustments for links */
  :global([data-bs-theme="dark"]) .nav-link-custom::after { background-color: var(--color-accent); }
  :global([data-bs-theme="dark"]) .nav-link-custom:hover { color: var(--color-text-main); }
  
  .nav-link-custom:hover { color: var(--axel-blue); }
  .nav-link-custom:hover::after { width: 60%; }

  /* Coffee Button */
  .btn-coffee { 
    background: linear-gradient(135deg, #FFDD00, #FBB034); 
    color: #3d3d3d; 
    font-weight: 700; 
    border: none; 
    padding: 0.4rem 1.2rem; 
    box-shadow: 0 4px 10px rgba(251, 176, 52, 0.3); 
    font-size: 0.9rem; 
  }
  .btn-coffee:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 6px 15px rgba(251, 176, 52, 0.5) !important; 
  }
  .coffee-icon { width: 18px; height: 18px; }

  /* Dropdown */
  .bmac-dropdown { 
    position: absolute; 
    top: 120%; 
    left: 50%; 
    transform: translateX(-50%); 
    min-width: 90px; 
    padding: 0.5rem; 
    border-radius: 16px; 
    z-index: 1050; 
    display: flex; 
    flex-direction: column; 
    gap: 4px;
  }
  .donation-link { 
    display: block; 
    padding: 6px; 
    text-align: center; 
    border-radius: 10px; 
    font-weight: bold; 
    color: var(--axel-blue); 
    background: rgba(255,255,255,0.4); 
    transition: all 0.2s; 
  }
  .donation-link:hover { background: #fff; transform: scale(1.05); }

  /* Theme Toggle */
  .btn-theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-main);
    background: rgba(255,255,255,0.1);
  }
  .btn-theme-toggle:hover { background: rgba(255,255,255,0.2); }
  
  .theme-icon { transition: transform 0.5s ease; }
  :global([data-bs-theme="dark"]) .theme-icon { transform: rotate(360deg); color: #FFDD00; }

  /* Footer */
  .footer-link { color: var(--color-text-muted); transition: color 0.2s; }
  .footer-link:hover { color: var(--axel-blue); text-decoration: underline; }
  :global([data-bs-theme="dark"]) .footer-link:hover { color: var(--color-accent); }
</style>