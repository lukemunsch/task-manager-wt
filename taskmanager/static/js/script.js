document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // date picker code
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
     done: "Select"
    }
  });

  // select list input
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // collapsible content
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);

});