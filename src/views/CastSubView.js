import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as movieApiService from "../services/api";
import Spiner from "../Component/Spinner/Spinner";
import { toast } from "react-toastify";

const noImgSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";

function Cast() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    movieApiService
      .fetchCast(id)
      .then((data) => {
        setData([...data.cast]);
      })
      .catch((er) => {
        toast.error(er);
      })
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <>
      {loading && <Spiner />}
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : noImgSrc
              }
              alt={el.name}
              width={150}
              height={200}
            />
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Cast;
