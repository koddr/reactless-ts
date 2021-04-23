import { useParams } from 'react-router-dom';
import { Logo, BottomMenu } from '__/Indexes/components';

export const Greetings = () => {
  let { name }: any = useParams();

  return (
    <>
      <div className="container prose mx-auto py-4 text-center max-w-lg">
        <Logo />
        <h1>👋 Greetings, {name}!</h1>
        <p>
          Yep, with <strong>full backward compatibility</strong> to all of React.js ecosystem, but
          without its overhead!
        </p>
        <BottomMenu />
      </div>
    </>
  );
};
