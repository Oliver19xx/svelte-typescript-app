<script>
  import { createEventDispatcher } from "svelte/internal";
  import { v4 as uuidv4 } from "uuid";
  import { FeedbackStore } from "../stores";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let rating = 10;
  let min = 10;
  let btnDisabled = true;
  let message = null;
  const dispatch = createEventDispatcher();
  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };
  const handleRating = (e) => {
    rating = e.detail;
  };
  const handleSubmit = () => {
    if (text.trim().length < min) return;

    const newFeedback = {
      id: uuidv4(),
      text,
      rating: +rating,
    };

    FeedbackStore.update((currentFeedback) => [
      newFeedback,
      ...currentFeedback,
    ]);
    text = "";
    rating = 10;
  };
</script>

<Card>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleRating} />
    <div class="input-group">
      <input
        type="text"
        bind:value={text}
        on:input={handleInput}
        placeholder="Tell us something that keeps you coming back"
      />
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
