import React from 'react';
import { reviewsInfo } from '../../mocks/reviews.ts';
import { IReview } from '../../types/review-types.ts';

type ReviewsProps = {
  reviews: IReview[];
};

type ReviewProps = {
  review: IReview;
};

function Review({ review }: ReviewProps): React.JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime="Дата отзыва">
            {review.date.toString()}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
export default function FilmReviews({
  reviews = reviewsInfo,
}: ReviewsProps): React.JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2, reviews.length).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
