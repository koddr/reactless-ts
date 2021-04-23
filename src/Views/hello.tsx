import { Logo } from '__/Indexes/components';

export const Hello = () => {
  return (
    <>
      <div className="container prose mx-auto py-4">
        <Logo />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque repudiandae
          fuga tempora qui, totam quo repellendus, saepe architecto sapiente repellat culpa aliquam
          assumenda at. Laudantium similique impedit minus incidunt.
        </p>
      </div>
    </>
  );
};
