const rowGrowcast = document.getElementById("row-growcast");
const rowWebinar = document.getElementById("row-webinar");
const rowUxUi = document.getElementById("row-ux-ui");
const rowDiversos = document.getElementById("row-diversos");
const modalMovie = new bootstrap.Modal("#modal-movie", {});
const bodyMovie = document.getElementById("body-movie");

function addCard(item) {
  const dataString = JSON.stringify(item);
  const htmlCard = `
  <div class="col-12 col-sm-6 col-md-4">
  <div class="card show-body">
    <img src="https://img.youtube.com/vi/${item.link}/sddefault.jpg" class="card-img-top" alt="thumb video" />
    <div class="card-body">
      <h5 class="card-title text-white">${item.title}</h5>
      <button onclick='openModalMovie(${dataString})' class='btn btn-primary'>Assistir</button>
    </div>
  </div>
</div>`;

  if (item.category === "growcast") {
    rowGrowcast.innerHTML += htmlCard;
  } else if (item.category === "webinar") {
    rowWebinar.innerHTML += htmlCard;
  } else if (item.category === "ux-ui") {
    rowUxUi.innerHTML += htmlCard;
  } else if (item.category === "geral") {
    rowDiversos.innerHTML += htmlCard;
  }
}

movies.forEach((item) => {
  addCard(item);
});

function openModalMovie(item) {
  bodyMovie.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${item.link}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>
  `;
  modalMovie.show();
}
