import { Button } from "../components/Button";

export const Authentication = () => {
  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <div className="rounded-sm py-8 px-8 gap-4 items-center flex flex-col bg-neutral-900 border-[0.5px] border-amber-400 border-solid max-w-[350px]">
        <div className="flex items-center justify-center flex-col p-4">
          <img src="/ClusVect.svg" className="w-8" />
          <p className="p-4 font-bold">CLUSTAR</p>
        </div>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${
            import.meta.env.VITE_CLIENT_ID
          }&redirect_uri=http://localhost:5173`}
        >
          <Button title="Authorize with GitHub" />
        </a>

        <small className="text-neutral-400">
          All authentication is handled by GitHub. <br /> We will never store
          any of your personal private details.
        </small>
      </div>
    </section>
  );
};
