const dice = document.getElementById('dice');
const adviceNum = document.getElementById('advice');
const quote = document.getElementById('quote');

dice.addEventListener('click', () => {
  const url = `https://api.adviceslip.com/advice`;

  axios
    .get(url)
    .then((response) => {
      if (response.status !== 200) return;
      quote.innerHTML = `&ldquo;${response.data.slip.advice}&rdquo;`;
      adviceNum.textContent = response.data.slip.id;
    })
    .catch((err) => {
      alert(`Something went wrong (${err.message}). Try again!`);
    });
});
