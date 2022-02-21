<script>
  //   import { onMount, onDestroy } from "svelte";
  import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  //   export let feedback = [];
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade>
    <FeedbackItem item={fb} />
  </div>
{/each}
