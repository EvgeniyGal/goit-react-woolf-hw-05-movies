import useFetchMovieData from 'components/Hooks/useFetchMovieData';
import Reviews from 'components/Reviews/Reviews';
import { getReviewsData } from 'servicies/tmdb-api';

function ReviewsPage() {
  const reviewsData = useFetchMovieData(getReviewsData);

  return reviewsData && <Reviews reviewsData={reviewsData} />;
}

export default ReviewsPage;
