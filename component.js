function Render() {
  this.movie = {
    posterPath: 'https://ak1.picdn.net/shutterstock/videos/23800711/thumb/1.jpg'
  };
}
Render.prototype.init = movie => {
  this.movie = {
    title: movie.title,
    overview: movie.overview,
    posterPath: function() {
      if (movie.poster_path == null) {
        return 'https://st2.depositphotos.com/8511412/11363/v/950/depositphotos_113638050-stock-illustration-loading-icon-loading-icon-vector.jpg';
      } else {
        return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      }
    },
    releaseDate: movie.release_date,
    voteCount: movie.vote_average
  };

  return this.movie;
};

Render.prototype.card = movie => {
  output = `<div class="col-lg-6">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary"><i class='fas fa-star'></i>  ${
          movie.voteCount
        }</strong>
        <h3 class="mb-0">${movie.title}</h3>
        <div class="mb-1 text-muted">${movie.releaseDate}</div>
        <p class="card-text mb-auto">${movie.overview.substring(0, 150)}</p>
        <a href="#" class="stretched-link">Continue reading</a>
      </div>
      <div class="col-auto d-none d-lg-block clip">
        <img src="${movie.posterPath()}" class="img-fluid w-150">
      </div>
    </div>
  </div>`;

  return output;
};

Render.prototype.topCard = movie => {
  var output = `   <div class="top-rated mt-">
        <div class="img">
          <img
            src="${movie.posterPath()}"
            alt=""
            
          />
        </div>
        <div class="name bg-lig">
          <p>${movie.title}</p>
          <small><i class="fas fa-star"></i>${movie.voteCount}</small>
        </div>
      </div>`;
  return output;
};
