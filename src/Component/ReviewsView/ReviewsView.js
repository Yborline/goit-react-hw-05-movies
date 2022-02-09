import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import * as ReviewsFetch from "../../services/api";

function Reviews() {
  const [reviews, setReviews] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    ReviewsFetch.fetchReviews(id).then((data) => {
      setReviews(data.results);
    });
  }, [id]);

  console.log(reviews);

  return (
    <>
      <Outlet />
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <span>Reviews not found</span>
        )}
      </ul>
    </>
  );
}
<Outlet />;

export default Reviews;
