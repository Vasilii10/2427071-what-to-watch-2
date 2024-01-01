import React, {FormEvent, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../enums/app-route.ts';
import {setActiveGenre, setFilmsByGenre} from '../../store/films-process/films-process.slice.ts';
import {useAppDispatch} from '../../hooks/store.ts';

type GenreItemProps = {
  name: string;
  isActive: boolean;
}

function GenreItem({name, isActive}: GenreItemProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (event: FormEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(setActiveGenre(name));
      dispatch(setFilmsByGenre());
    },
    [dispatch, name]
  );

  const computedClassName = `catalog__genres-item catalog__genres-item${
    isActive ? '--active' : ''}`;

  return (
    <li className={computedClassName}>
      <Link
        to={AppRoute.Main}
        className="catalog__genres-link"
        onClick={handleClick}
      >
        {name}
      </Link>
    </li>
  );
}

const GenreItemMemo = React.memo(GenreItem);

export default GenreItemMemo;
