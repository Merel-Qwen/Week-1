const myMovie = {
  title: " The Lord of the Rings",
  duration: 185,
  stars: [" Elijah", "Ian", "Viggo"]
};

const printMovie = function(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  let starsString = "Stars: ";
  for (let i = 0; i < movie.stars.length; i++) {
    starsString += movie.stars[i];
    if (i != movie.stars.length - 1) {
      starsString += ", ";
    }
  }
  console.log(starsString);
};

printMovie(myMovie);
