import { Logo, BottomMenu } from '__/Indexes/components';

export const Welcome = () => {
  return (
    <>
      <div className="container prose mx-auto py-4 text-center max-w-lg">
        <Logo />
        <h1>✨ Welcome to Reactless.ts!</h1>
        <p>
          A handy production-ready template for <strong>rapidly</strong> frontend development that
          you've often dreamed of. Included awesome <strong>Preact</strong> framework with
          TypeScript, <strong>Tailwind CSS</strong> & <strong>Headless UI</strong> visual
          frameworks, and configured next generation frontend tooling called <strong>Vite</strong>.
        </p>
        <BottomMenu />
      </div>
    </>
  );
};
