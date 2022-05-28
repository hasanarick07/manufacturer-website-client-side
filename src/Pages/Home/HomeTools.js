import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import HomeTool from "./HomeTool";

const HomeTools = () => {
  const [newTools, setNewTools] = useState([]);

  const { data: tools, isLoading } = useQuery("manufacturerTools", () =>
    fetch("https://enigmatic-fortress-05419.herokuapp.com/tools").then(res =>
      res.json()
    )
  );
  useEffect(() => {
    const newTool = tools?.reverse();
    // console.log(newTool);
    setNewTools(newTool);
  }, [tools]);
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="font-bold text-4xl my-5">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
        {newTools?.slice(0, 6)?.map(tool => (
          <HomeTool key={tool._id} tool={tool} />
        ))}
      </div>
      <button
        onClick={() => navigate("/tools")}
        class="btn btn-wide btn-primary my-7"
      >
        Explore More Tools
      </button>
    </div>
  );
};

export default HomeTools;
