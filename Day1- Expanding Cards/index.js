const divis = Array.from(document.getElementsByClassName('division'));
divis.forEach((division) => {
  division.addEventListener('click', () => {
    division.style.flex = '5';
    division.querySelector('h1').style.display = 'block';
    divis.forEach((otherDiv) => {
      if (otherDiv !== division) {
        otherDiv.style.flex = '0.5';
        otherDiv.querySelector('h1').style.display = 'none';
      }
    });
  });
});
