document.addEventListener('DOMContentLoaded', function () {
  var now = new Date();

  document.querySelectorAll('.copyright-year').forEach(function (el) {
    el.textContent = now.getFullYear();
  });

  // Feast is celebrated every year on the same fixed dates (20-29 September).
  // Once this year's feast has passed, start showing next year's date instead.
  var feastEndsThisYear = new Date(now.getFullYear(), 8, 29); // September = month index 8
  var feastYear = now > feastEndsThisYear ? now.getFullYear() + 1 : now.getFullYear();

  document.querySelectorAll('.feast-year').forEach(function (el) {
    el.textContent = feastYear;
  });
});
