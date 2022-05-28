import React from "react";
import { useQuery } from "react-query";
import HomeTool from "../Home/HomeTool";
import Loading from "../Shared/Loading";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("manufacturerTools", () =>
    fetch("https://enigmatic-fortress-05419.herokuapp.com/tools").then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(tools);
  return (
    <div>
      <h1 className="font-bold text-4xl my-5">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {tools.map(tool => (
          <HomeTool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
