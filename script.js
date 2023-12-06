$(() => {
  $(".navbar a, footer a").on("click", function (event) {
    event.preventDefault();
    const hash = this.hash;
    $('body,html').animate(
      {scrollTop: $(hash).offset().top},
      1000,
      () => window.location.hash = hash
    );
  });
});
