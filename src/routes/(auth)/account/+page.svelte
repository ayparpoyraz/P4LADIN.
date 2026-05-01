<script lang="ts">
  import { enhance } from "$app/forms";
  import { Mail, Eye, EyeOff, Lock, UserPlus } from "lucide-svelte";

//States
  let email         = $state("");
  let password      = $state("");
  let confirm       = $state("");
  let showPassword  = $state(false);
  let showConfirm   = $state(false);
  let activeTab     = $state<"login" | "register">("login");
  let loading       = $state(false);

  let { form } = $props();

  const togglePassword = () => (showPassword = !showPassword);
  const toggleConfirm  = () => (showConfirm  = !showConfirm);

  const switchTab = (tab: "login" | "register") => {
    activeTab = tab;
    email = ""; password = ""; confirm = "";
  };
</script>

<div class="min-h-screen flex w-full font-sans">

  <!-- SOL: FORM -->
  <div class="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
    <div class="w-full max-w-[360px]">

      <!-- Tabs -->
      <div class="flex gap-8 text-lg font-semibold mb-10">
        <button
          type="button"
          class={activeTab === "login"
            ? "border-b-2 border-black pb-1 transition-all"
            : "text-gray-400 hover:text-gray-600 transition-colors"}
          onclick={() => switchTab("login")}
        >
          Üye Girişi
        </button>
        <button
          type="button"
          class={activeTab === "register"
            ? "border-b-2 border-black pb-1 transition-all"
            : "text-gray-400 hover:text-gray-600 transition-colors"}
          onclick={() => switchTab("register")}
        >
          Üye Ol
        </button>
      </div>


      <!--Log-->
      {#if form?.error}
        <div class="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
          {form.error}
        </div>
      {/if}
      {#if form?.success}
        <div class="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-600 text-sm rounded">
          {form.message}
        </div>
      {/if}

      <form
        method="POST"
        action={activeTab === "login" ? "?/login" : "?/register"}
        class="space-y-6"
        use:enhance={() => {
          loading = true;
          return async ({ update }) => {
            await update();
            loading = false;
          };
        }}
      >

        <!-- Email -->
        <div class="flex flex-col">
          <label class="flex items-center gap-2 text-sm text-gray-500 mb-1" for="email">
            <Mail size={16} /> Email
          </label>
          <input
            id="email"
            name="email"
            bind:value={email}
            type="email"
            placeholder="E-posta adresiniz"
            required
            class="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-colors bg-transparent"
          />
        </div>

        <!--Şifre-->
        <div class="flex flex-col">
          <label class="flex items-center gap-2 text-sm text-gray-500 mb-1" for="password">
            <Lock size={16} /> Şifre
          </label>
          <div class="relative flex items-center">
            <input
              id="password"
              name="password"
              bind:value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Şifreniz"
              required
              class="w-full border-b border-gray-200 py-2 pr-10 outline-none focus:border-black transition-colors bg-transparent"
            />
            <button
              type="button"
              class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-10"
              onclick={togglePassword}
            >
              {#if showPassword}<Eye size={18} />{:else}<EyeOff size={18} />{/if}
            </button>
          </div>
        </div>

        {#if activeTab === "register"}
          <div class="flex flex-col">
            <label class="flex items-center gap-2 text-sm text-gray-500 mb-1" for="confirm">
              <Lock size={16} /> Şifre Tekrar
            </label>
            <div class="relative flex items-center">
              <input
                id="confirm"
                name="confirm"
                bind:value={confirm}
                type={showConfirm ? "text" : "password"}
                placeholder="Şifrenizi tekrar girin"
                required
                class="w-full border-b border-gray-200 py-2 pr-10 outline-none focus:border-black transition-colors bg-transparent"
              />
              <button
                type="button"
                class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-10"
                onclick={toggleConfirm}
              >
                {#if showConfirm}<EyeOff size={18} />{:else}<Eye size={18} />{/if}
              </button>
            </div>
          </div>
        {/if}

        <!-- Submit -->
        <button
          type="submit"
          disabled={loading}
          class="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {#if loading}
            <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          {/if}
          {activeTab === "login" ? "Üye Girişi" : "Kayıt Ol"}
        </button>

        







        
        {#if activeTab === "login"}
          <button
            type="button"
            class="text-sm text-gray-500 mt-3 cursor-pointer hover:text-black transition-colors border-none bg-transparent p-0"
          >
            Parolamı Unuttum
          </button>
        {/if}

      </form>
    </div>
  </div>

  <!--A Unique Structure -->
  <div class="w-1/2 relative hidden md:block">
    <img
      src="/fashion.jpg"
      alt="fashion"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 flex items-center justify-center bg-black/20">
      <h1 class="text-white text-5xl font-bold text-center px-4 leading-tight">
        A unique structure.
      </h1>
    </div>
  </div>

</div>