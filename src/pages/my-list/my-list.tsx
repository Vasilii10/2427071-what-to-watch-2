import React from 'react';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import Card from '../../components/card/card';

function MyList(): React.JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {Array.from({length: 9}, (_, index) => (
            <Card key={index}/>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
