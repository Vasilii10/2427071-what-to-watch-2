import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import MovieCardPoster from '../../components/movie-card-poster/movie-card-poster';
import './add-review.css';

function AddReview(): React.JSX.Element {
  const RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const RATING_DEFAULT = 8;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films:id" className="breadcrumbs__link">
                  The Grand Budapest Hotel
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/films/:id/review" className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <MovieCardPoster size={'small'} />
      </div>
      <div className="add-review">
        <form action="src/pages/add-review/add-review#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {RATINGS.map((rating) => (
                <Fragment key={rating}>
                  <input
                    className="rating__input"
                    id={`star-${rating}`}
                    type="radio"
                    name="rating"
                    value={rating}
                    defaultChecked={rating === RATING_DEFAULT}
                  />
                  <label className="rating__label" htmlFor={`star-${rating}`}>
                    Rating {rating}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              defaultValue={''}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
