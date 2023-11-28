let images = document.querySelectorAll('assets/images');

document.body.addEventListener('mousemove', function (e) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  for (let i = 0; i < images.length; i++) {
    // Get image width and height
    const imageWidth = images[i].clientWidth;
    const imageHeight = images[i].clientHeight;

    // Get the percentage of mouse position
    let xPercentage = (e.pageX - width / 2) / (width / 2);
    let yPercentage = (e.pageY - height / 2) / (height / 2);

    // Get x and y translate values
    let x = imageWidth * xPercentage * 0.1;
    let y = imageHeight * yPercentage * 0.1;

    images[i].style.transform = `translate(${x}px, ${y}px)`;
  }
});