const handleClick = () => {
  const createEl = document.createElement("h1");
  createEl.innerText = "clicked";
  createEl.id = "dynamic";
  document.body.appendChild(createEl);
};

const remeClick = () => {
  const removeTag = document.getElementById("dynamic");

  document.body.removeChild(removeTag);
};
