const handleClick = () => {
  const createEl = document.createElement("s");
  createEl.innerText = "clicked";
  createEl.id = "dynamic";
  document.body.appendChild(createEl);
};

const remeClick = () => {
  const removeTag = document.getElementById("dynaic");

  document.body.removeChild(removeTag);
};
