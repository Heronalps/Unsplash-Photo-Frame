var image = document.getElementById("img");

function fetchImage() {
  fetch(`https://api.unsplash.com/photos/random?client_id=`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      image.src = data.urls.full; // Access the image URL from the API response
    })
    .catch((error) => console.error("Error fetching the image:", error));
}

fetchImage();

setInterval(() => {
  fetchImage();
}, 3600 * 1000);
