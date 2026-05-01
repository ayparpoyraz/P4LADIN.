<script lang="ts">
  import { page } from '$app/state';
  import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-svelte';

  const links = [
    { href: '/home', label: 'Anasayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { 
      href: '/products',
      label: 'Ürünler',
      dropdown : [
        { href: '/products/topwear', label: "Üst Giyim" },
        { href: '/products/bottomwear', label: "Alt Giyim" },
        { href: '/products/outerwear', label: "Dış Giyim" },
        { href: '/products/accessory', label: "Aksesuar" },
      ]
    }
  ];

  let {
    size = 22, // Biraz daha dengeli bir boyut
    strokeWidth = 1.5, // Daha lüks bir görünüm için incelttim
    color = "currentColor"
  } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Roboto+Condensed:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<nav class="navbar">
  <a href="/" class="logo">
    <span class="logo-text">P4LADIN.</span>
  </a>

  <ul class="nav-links">  
    {#each links as link}
      <li class="nav-item" class:has-dropdown={link.dropdown}>
        <a href={link.href} class:active={page.url.pathname.startsWith(link.href)}>
          {link.label}
          {#if link.dropdown}
            <ChevronDown size={14} strokeWidth={2.5} class="chevron-icon" />
          {/if}
        </a>

        {#if link.dropdown}
          <div class="dropdown-container">
            <ul class="dropdown-menu">
              {#each link.dropdown as sub}
                <li>
                  <a href={sub.href}>{sub.label}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </li>
    {/each}
  </ul>

  <div class="nav-actions">
    <button class="action-btn" aria-label="Arama">
      <Search size={size} strokeWidth={strokeWidth} />
    </button>
    
    <a href="/Profile" class="action-btn" aria-label="Profil">
      <User size={size} strokeWidth={strokeWidth} />
    </a>

    <button class="action-btn" aria-label="Favoriler">
      <Heart size={size} strokeWidth={strokeWidth} />
    </button>

    <button class="action-btn cart-btn" aria-label="Sepet">
      <ShoppingBag size={size} strokeWidth={strokeWidth} />
      <span class="cart-badge">0</span>
    </button>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    height: 80px;
    background: #0a0a0a;
    border-bottom: 1px solid #c9a84c;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }

  .logo-text {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 5px;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    height: 100%;
  }

  .nav-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-links a {
    padding: 10px 15px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    color: #aaa;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav-links a:hover, .nav-links a.active {
    color: #c9a84c;
  }

  .chevron-icon {
    transition: transform 0.3s ease;
  }

  /* Dropdown Stilleri */
  .dropdown-container {
    position: absolute;
    top: 80px; /* Navbar yüksekliği ile aynı */
    left: 50%;
    transform: translateX(-50%) translateY(15px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding-top: 10px; /* Navbar ile menü arasında görünmez bir köprü */
  }

  .dropdown-menu {
    background: #0f0f0f;
    border: 1px solid #c9a84c;
    min-width: 220px;
    list-style: none;
    padding: 10px 0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  }

  .dropdown-menu li a {
    padding: 12px 25px;
    font-size: 0.9rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    width: 100%;
    display: block;
    transition: all 0.2s ease;
  }

  .dropdown-menu li a:hover {
    background: #1a1a1a;
    color: #fff;
    padding-left: 30px; 
  }


  .nav-item:hover .dropdown-container {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  .nav-item:hover .chevron-icon {
    transform: rotate(180deg);
    color: #c9a84c;
  }

  
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  .action-btn {
    background: none;
    border: none;
    color: #aaa;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
  }

  .action-btn:hover {
    color: #c9a84c;
    transform: scale(1.1);
  }

  .cart-btn {
    position: relative;
  }

  .cart-badge {
    position: absolute;
    top: -5px;
    right: -8px;
    background: #c9a84c;
    color: #000;
    font-size: 0.7rem;
    font-weight: 700;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>