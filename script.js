function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active-tab');
  });
  document.getElementById(tabId).classList.add('active-tab');

  document.querySelectorAll('.navbar li').forEach(li => {
    li.classList.remove('active');
  });
  event.target.classList.add('active');
}
