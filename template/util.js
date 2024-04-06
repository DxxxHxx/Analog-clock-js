export const createHand = (handType) => {
  const div = document.createElement("div");
  div.className = "hand";
  div.classList.add(handType);

  return div;
};

const createTime = (index) => {
  const div = document.createElement("div");
  div.innerHTML = "|";
  div.className = "time";
  div.classList.add(`time${index}`);

  return div;
};

export const createAllTime = () => {
  const arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push(createTime(i));
  }
  return arr;
};

export const mutilpleAppendChild = (targetDOM, childList) => {
  if (!Array.isArray(childList)) return;

  childList.forEach((child) => {
    targetDOM.appendChild(child);
  });
};
