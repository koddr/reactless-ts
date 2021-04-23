import { Logo, BottomMenu } from '__/Indexes/components';

export const NoMatch = () => {
  return (
    <>
      <div className="container prose mx-auto py-4 text-center max-w-lg">
        <Logo />
        <h1>😕 Oops...</h1>
        <p>Sorry, but this page is not found!</p>
        <BottomMenu />
      </div>
    </>
  );
};
