import { useParams } from "react-router";

const MovieDetails = () => {
  const params = useParams();
  const id = params.id;
    console.log(params)
  return (
    <div>
      <h1>Detalji Filma</h1>
      <h2>Id filma je: {id}</h2>
    </div>
  );
};

export default MovieDetails;
