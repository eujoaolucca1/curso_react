import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router";

function TaskPages() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");
  return (
    <div className="w-screen h-screen bg-gray-700 justify-center flex text-white">
      <div className="w-[500px]">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 cursor-pointer"
          >
            <ChevronLeftIcon className="text-white" />
          </button>
          <h1 className="font-bold text-center">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-lg mt-4 w-[500px]">
          <h2 className="text-xl font-bold text-slate-700">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPages;
