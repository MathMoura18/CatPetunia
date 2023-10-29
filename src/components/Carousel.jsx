function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>
            Sempre amei gatos, e o que o pessoal Casa do Vira Lata fez foi
            intensificar meu amor. Recomendo à todos que conheço.
          </p>
          <p class="text-author">
            <strong>Ana Julia</strong>
          </p>{" "}
        </div>
        <div class="carousel-item">
          <p>
            Sempre amei gatos, e o que o pessoal Casa do Vira Lata fez foi
            intensificar meu amor. Recomendo à todos que conheço.
          </p>
          <p class="text-author">
            <strong>Ana Julia</strong>
          </p>{" "}
        </div>
        <div class="carousel-item">
          <p>
            Sempre amei gatos, e o que o pessoal Casa do Vira Lata fez foi
            intensificar meu amor. Recomendo à todos que conheço.
          </p>
          <p class="text-author">
            <strong>Ana Julia</strong>
          </p>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
