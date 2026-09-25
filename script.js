document.querySelectorAll('[data-scroll]').forEach(function (item) {
  item.addEventListener('click', function () {
    var section = document.getElementById(item.dataset.scroll);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const crosswordButton = document.getElementById("check-crossword");

if (crosswordButton) {
  crosswordButton.addEventListener("click", () => {
    const cells = document.querySelectorAll("#inspiracoes .cross-cell:not(.black)");
    let correct = 0;
    let filled = 0;

    cells.forEach((cell) => {
      const input = cell.querySelector("input");

      if (!input) return;

      const answer = input.dataset.answer;
      const value = input.value.trim().toUpperCase();

      cell.classList.remove("correct", "wrong");

      if (value !== "") {
        filled++;

        if (value === answer) {
          cell.classList.add("correct");
          correct++;
        } else {
          cell.classList.add("wrong");
        }
      }
    });

    const result = document.getElementById("crossword-result");

    if (filled === 0) {
      result.textContent = "Preencha a cruzadinha primeiro ✦";
      return;
    }

    if (correct === cells.length) {
      result.textContent = "ACERTOU TUDO! ✦ Você descobriu todas as referências.";
    } else {
      result.textContent = `${correct} de ${cells.length} letras corretas. Tente novamente!`;
    }
  });
}