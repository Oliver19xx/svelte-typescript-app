<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">
  <h1>
    My fist <img
      src="https://svelte.dev/svelte-logo-horizontal.svg"
      alt="Svelte Logo"
    /> App
  </h1>
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
  h1 {
    text-align: center;
  }
  h1 img {
    height: 1em;
    background: white;
    display: inline-block;
    vertical-align: middle;
  }
</style>
