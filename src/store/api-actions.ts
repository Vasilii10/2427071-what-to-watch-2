import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {IFilm, IFilmPromo, IFilmPromoInfo} from '../types/film-types.ts';
import {redirectToRoute} from './action.ts';
import {AddUserReview, IReview, UserReview} from '../types/review-types.ts';
import {AppRoute} from '../enums/app-route.ts';
import {AuthData, UserData} from '../types/auth.ts';
import { FavoriteStatus } from '../enums/favorite-status.ts';

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  '/login',
  async ({email, password}, { dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(
      AppRoute.Login,
      {
        email,
        password,
      }
    );

    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  '/logout',
  async (_arg, { extra: api}) => {
    await api.delete(AppRoute.Logout);
  },
);

export const checkAuthStatusAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<UserData>(AppRoute.Login);
    return data;
  },
);

export const fetchFilmsAction = createAsyncThunk<IFilm[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  '/films',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<IFilm[]>(AppRoute.Films);

    return data;
  },
);

export const fetchFilmByIdAction = createAsyncThunk<
  IFilmPromoInfo,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    '/films/id',
    async (id: string, { extra: api}) => {

      const { data } = await api.get<IFilmPromoInfo>(`${AppRoute.Films}/${id}`);

      return data;
    },
  );

export const fetchSimilarFilmsAction = createAsyncThunk<
  IFilm[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    '/films/id/similar',
    async (id: string, { extra: api}) => {

      const { data } = await api.get<IFilm[]>(`${AppRoute.Films}/${id}/similar`);

      return data;

    },
  );

export const fetchFavoriteFilmsAction = createAsyncThunk<
  IFilm[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    '/favorite',
    async (_arg, { extra: api}) => {

      const {data} = await api.get<IFilm[]>('/favorite');
      return data;

    }
  );

export const fetchFilmPromoAction = createAsyncThunk<
  IFilmPromo,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    '/promo',
    async (_arg, { extra: api}) => {
      const { data } = await api.get<IFilmPromo>('/promo');
      return data;
    },
  );

export const fetchFilmReviewsAction = createAsyncThunk<
  IReview[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    '/comments/id',
    async (id, {extra: api}) => {

      const { data } = await api.get<IReview[]>(`/comments/${id}`);

      return data;
    },
  );


export const addCommentAction = createAsyncThunk<void, AddUserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'addCommentAction',
  async ({filmId, comment, rating}, {extra: api}) => {
    await api.post<UserReview>(`comments/${filmId}`, {comment, rating});
  },
);

// TODO add tests
export const changeFavoriteStatusAction = createAsyncThunk<
  void,
  {filmId: string; status: FavoriteStatus},
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'favorite/status',
    async ({filmId, status}, { extra: api}) => {
      await api.post(`/favorite/${filmId}/${status}`);
    },
  );
