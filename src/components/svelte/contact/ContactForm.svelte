<script>
    import { enhance } from '$app/forms';

    let formSubmitted = $state(false)
</script>

{#if !formSubmitted}
    <form class="lg:max-w-[70%] xl:max-w-[50%]" method="POST" use:enhance={() => {
        formSubmitted = true
    }}
    >
        <div class="flex flex-col gap-3">
            <p class="prose">Your personal data</p>
            <div class="flex flex-row flex-wrap gap-1 md:gap-2 lg:gap-3">
                <input required name="name" type="text" placeholder="Your name" class="input input-bordered w-full lg:max-w-[49%] my-1" />
                <input required name="email" type="text" placeholder="Your email address" class="input input-bordered w-full lg:max-w-[49%] my-1" />
            </div>
            <p class="prose">Content</p>
            <select required name="reason" class="select select-bordered w-full">
                <option disabled selected>Reason for Contact</option>
                <option>Open Source Collaboration</option>
                <option>Personal</option>
                <option>Other</option>
            </select>
            <textarea required name="message" class="textarea textarea-bordered" placeholder="Your message"></textarea>
            <button type="submit" class="btn btn-neutral">Send Message</button>
        </div>
    </form>
{:else}
    <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Form has been submitted successfully.</span>
    </div>
{/if}