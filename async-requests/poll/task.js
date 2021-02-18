"use strict";

let promise = fetch("https://netology-slow-rest.herokuapp.com/poll.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("poll__title").textContent = data.data.title;
    for (let i = 0; i < data.data.answers.length; i++) {
      document.getElementById(
        "poll__answers"
      ).innerHTML += `<button class="poll__answer"> ${data.data.answers[i]} </button>`;
    }

    for (let i of document.getElementsByClassName("poll__answer")) {
      i.onclick = () => {
        alert("Спасибо, Ваш голос засчитан!");
        fetch("https://netology-slow-rest.herokuapp.com/poll.php", {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
          body: `vote=${data.id}&answer=${data.data.answers[i]}`,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.stat);
            let countValue = data.stat.reduce((acc, el) => {
              return (acc += el.votes);
            }, 0);
            let answerString = data.stat.reduce((acc, el) => {
              return (acc += ` ${el.answer} - ${(
                (el.votes * 100) /
                countValue
              ).toFixed(2)}%`);
            }, "");
            document.getElementById("poll__answers").textContent = answerString;
          });
      };
    }
  });
