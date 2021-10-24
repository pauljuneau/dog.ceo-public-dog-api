getRandomDogImage();

async function getRandomDogImage() {
    let dogApiHttpResponse = await fetch("https://dog.ceo/api/breeds/image/random", {
        method : 'GET'
      });
    let dogApiResponse = await dogApiHttpResponse.json();
    document.getElementById("demo").src = dogApiResponse.message;
}