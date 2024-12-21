const handleClick = () => {
  const createEl = document.createElement("h");
  createEl.innerText = "clicked";
  createEl.id = "dynamic";
  document.body.appendChild(createEl);
};

const remeClick = () => {
  const removeTag = document.getElementById("dynamc");

  document.body.removeChild(removeTag);
};
