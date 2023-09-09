import { Link } from "react-router-dom";
import { useUserStarredRepos } from "../data/useUser";
import { Loader } from "./Loader";
import numFormatter from "../utils/numFormatter";

export const Sidebar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [starred, _error, isLoading] = useUserStarredRepos();
  console.log(starred);

  return (
    <nav className="flex flex-col h-screen">
      <div className="flex justify-center gap-4  py-5 mx-2">
        <img src="/ClusVect.svg" className="w-4" />
        <p className="font-bold">Clustar</p>
      </div>
      <div className="w-full h-[1px] bg-slate-800"></div>
      <div className="flex flex-col overflow-hidden">
        <p className="my-4 text-lg font-semibold text-center text-amber-400 ">
          Repositories
        </p>
        <div className="w-full h-[1px] mb-4 bg-slate-800"></div>
        <div className="flex items-center justify-between mx-2">
          <select>
            <option>TypeScript</option>
          </select>
        </div>
        <div className="w-full h-[1px] my-2 mt-4 bg-slate-800"></div>
        {isLoading && <Loader text="Fetching repositories..." />}
        {starred && (
          <ul className="mx-2 overflow-y-auto ">
            {starred?.map((repo) => {
              return (
                <Link
                  key={repo.url}
                  to={`/repo/${repo?.owner?.login}/${repo?.name}`}
                >
                  <li className="flex items-center gap-2 p-2 mb-2 mr-2 transition-colors rounded-sm hover:bg-slate-800 group bg-slate-900">
                    <img
                      src={repo?.owner?.avatar_url}
                      className="w-8 rounded-sm"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400 line-clamp-2 group-hover:text-white">
                        <span className="font-bold text-amber-400">
                          {repo.name}
                        </span>{" "}
                        <span className="font-normal">
                          - {repo.description}
                        </span>
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="flex items-center gap-1 text-sm font-bold">
                          <svg
                            data-v-6ce840f0=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 text-slate-400"
                          >
                            <polygon
                              data-v-6ce840f0=""
                              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            ></polygon>
                          </svg>
                          {numFormatter(repo?.stargazers_count, 1)}
                        </p>
                        <p className="flex items-center gap-1 text-sm font-bold">
                          <svg
                            data-v-6ce840f0=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 text-slate-400"
                          >
                            <circle
                              data-v-6ce840f0=""
                              cx="18"
                              cy="18"
                              r="3"
                            ></circle>
                            <circle
                              data-v-6ce840f0=""
                              cx="6"
                              cy="6"
                              r="3"
                            ></circle>
                            <path
                              data-v-6ce840f0=""
                              d="M13 6h3a2 2 0 0 1 2 2v7"
                            ></path>
                            <line
                              data-v-6ce840f0=""
                              x1="6"
                              y1="9"
                              x2="6"
                              y2="21"
                            ></line>
                          </svg>
                          {numFormatter(repo?.forks, 1)}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};
