import { useParams } from "react-router-dom";
import { useRepo } from "../data/useRepo";

export const Repository = () => {
  const params = useParams();
  const [repo] = useRepo({
    user: params?.owner as string,
    repo: params?.name as string,
  });
  console.log(params);
  console.log(repo);
  return (
    <section className="my-1">
      <div className="flex gap-4">
        <img
          src={repo?.owner?.avatar_url}
          className="w-16 h-16 aspect-square rounded-md"
        />
        <div className="flex flex-col">
          <a
            href={repo?.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-bold text-yellow-400"
          >
            {params?.owner}/{params?.name}
          </a>
          <p>{repo?.description}</p>
        </div>
      </div>
    </section>
  );
};
