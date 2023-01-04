const accordion = document.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>;

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling as HTMLElement;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
  }
  });
}