import { Link } from 'react-router-dom';

export const BottomMenu = () => {
  return (
    <>
      <p className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/hi/Friends">Greetings page</Link>
      </p>
    </>
  );
};
