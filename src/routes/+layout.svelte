<script lang="ts">
  import '../app.css'
  import Navbar from '$lib/components/Navbar.svelte';

  const { children } = $props();
</script>

<div class="layout">
  <Navbar />

  <main class="content">
    {@render children()}
  </main>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    padding: 2rem;
  }
</style>