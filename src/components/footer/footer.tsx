import Logo from '../logo/logo';
import React from 'react';

export default function Footer(): React.FunctionComponent {
  return (
    <footer className="page-footer">
      <Logo color={'dark'} />
      <div className="copyright">
        <p>© 2023 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
