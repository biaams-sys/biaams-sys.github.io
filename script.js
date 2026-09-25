document.querySelectorAll('[data-scroll]').forEach(function (item) {
  item.addEventListener('click', function () {
    var section = document.getElementById(item.dataset.scroll);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
