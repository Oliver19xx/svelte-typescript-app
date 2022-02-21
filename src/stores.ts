import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae molestias obcaecati consectetur excepturi provident? Nam repellat, accusamus expedita dolorum ipsum dolore omnis voluptatibus facilis exercitationem quia deserunt non harum quaerat?",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae molestias obcaecati consectetur excepturi provident? Nam repellat, accusamus expedita dolorum ipsum dolore omnis voluptatibus facilis exercitationem quia deserunt non harum quaerat?",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae molestias obcaecati consectetur excepturi provident? Nam repellat, accusamus expedita dolorum ipsum dolore omnis voluptatibus facilis exercitationem quia deserunt non harum quaerat?",
  },
]);
