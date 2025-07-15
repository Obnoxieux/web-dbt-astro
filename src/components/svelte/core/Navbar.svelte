<script lang="ts">
  import NavbarLinks from "./NavbarLinks.svelte";
</script>

<nav class="w-full navbar bg-base-100 lg:justify-center my-5 lg:mt-5">
    <div class="flex-none lg:hidden">
        <label for="drawer" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </label>
    </div>
    <div class="hidden lg:block">
        <ul class="menu menu-horizontal gap-5">
            <NavbarLinks/>
        </ul>
    </div>
</nav>