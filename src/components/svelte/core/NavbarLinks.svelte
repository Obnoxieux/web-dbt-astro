<script lang="ts">
    function closeDrawer() {
        const drawer = document.getElementById("drawer") as HTMLInputElement
        if (drawer) {
            drawer.checked = false
        }
    }
</script>

<li><a onclick={closeDrawer} class="text-xl" href="/">Home</a></li>
<li><a onclick={closeDrawer} class="text-xl" href="/tech">Tech Stack</a></li>
<li><a onclick={closeDrawer} class="text-xl" href="/projects">Projects</a></li>
<li><a onclick={closeDrawer} class="text-xl" href="/apps">Apps</a></li>
<li><a onclick={closeDrawer} class="text-xl" href="/personal">Personal</a></li>
<li><a onclick={closeDrawer} class="text-xl" href="/contact">Contact</a></li>