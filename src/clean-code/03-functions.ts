(() => {

  function getMovieInfoById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }


  interface CreateMovieOptions {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({
    cast,
    description,
    rating,
    title }: CreateMovieOptions): void {

    console.log({ cast, description, rating, title });

  }



  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;

  }


})();




