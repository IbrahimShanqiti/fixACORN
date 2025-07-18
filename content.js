function fix() {
  const balance = document.querySelector('.acct-balance .highlight');
  if (balance) {
    balance.style.color = 'black';
  }
}

const observer = new MutationObserver(() => {
  fix();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

document.addEventListener('DOMContentLoaded', fix);
