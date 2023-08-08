import { useRef, useEffect } from "react";

import SankeyFun from "./SankeyFun";

function CallSankey({ data }) {
  var svgRef = useRef(null);

  useEffect(() => {
    SankeyFun(
      { links: data, svgRef },
      {
        height: 500,
        width: 1500,
        nodeGroup: (d) => d.id.split(/\W/)[0] // take first word for color
      }
    );
  }, [data]);

  return (
    <div className="sankey-chart">
      <svg ref={svgRef} />
    </div>
  );
}

export default CallSankey;
