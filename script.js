function randomPrompt() {
  const i = Math.floor(Math.random() * prompts.length);
  return prompts[i];
}

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("prompt").textContent = randomPrompt();
});

