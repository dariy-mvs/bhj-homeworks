class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timeElement = container.querySelector(".status__time");
    this.wordLength;
    this.wordTimer;
    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer() {
    this.wordTimer = setInterval(() => {
    if (+this.timeElement.textContent > 0) {
      this.timeElement.textContent = +this.timeElement.textContent - 1;
    } else {
      this.fail();
    }
  }, 1000)};

  registerEvents() {
    document.addEventListener("keydown", (event) => {
      if (
        event.code === "MetaLeft" ||
        event.code === "MetaRight" ||
        event.code === "ShiftLeft" ||
        event.code === "ShiftRight" ||
        event.code === "CapsLock" ||
        event.code === "Tab"
      ) {
        return;
      } else if (event.code === "Space") {
        if (this.currentSymbol.textContent === " ") {
          this.success();
        } else {
          this.fail();
        }
      } else if (event.key.toLowerCase() === this.currentSymbol.innerHTML) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
      return;
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
      return;
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.wordLength = word.length;
    this.renderWord(word);
    this.timeElement.textContent = this.wordLength;
    clearInterval(this.wordTimer);
    this.timer();
  }

  getWord() {
    const words = [
        "bob и я",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
