"use strict";

let chatButton = document.querySelector(".chat-widget");
chatButton.addEventListener("click", () =>
  chatButton.classList.add("chat-widget_active")
);

let botsAnswers = {
  1: "Это слишком мизерный вопрос, чтобы разбираться с этим. Решите сами.",
  2: "Сожалею, но я сейчас пью кофе, и не могу ответить на Ваш вопрос. Хотя нет, не сожалею.",
  3: "Мне только что позвонила бабушка, но я спрошу её мнения по этому поводу.",
  4: "Занят.",
  5: "Возможно, но мне это не интересно.",
  6: "Это не ко мне!",
};

function getBotsAnswer() {
  let max = Object.keys(botsAnswers).length;
  let rand = Math.floor(1 + Math.random() * (max + 1 - 1));
  console.log(rand);
  return `${botsAnswers[rand]}`;
}

function getCurrentFormattedTime() {
  const addLeadingZero = (time) => (time < 10 ? `0${time}` : `${time}`);
  const hours = addLeadingZero(new Date().getHours());
  const minutes = addLeadingZero(new Date().getMinutes());

  return `${hours}:${minutes}`;
}

let inputArea = document.getElementById("chat-widget__input");
let messages = document.getElementById("chat-widget__messages");
inputArea.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    if (inputArea.value) {
      messages.innerHTML += `<div class="message message_client">
      <div class="message__time">${getCurrentFormattedTime()}</div>
      <div class="message__text">${inputArea.value}</div>
      </div>`;
      inputArea.value = "";
      messages.innerHTML += `
    <div class="message">
      <div class="message__time">${getCurrentFormattedTime()}</div>
      <div class="message__text">
        ${getBotsAnswer()}
      </div>
    </div>`;
      document.querySelector(
        ".chat-widget__messages-container"
      ).scrollTop = document.querySelector(
        ".chat-widget__messages-container"
      ).scrollHeight;
    }
  }
});
