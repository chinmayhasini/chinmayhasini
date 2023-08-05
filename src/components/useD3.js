import React, { useEffect } from 'react';
import * as d3 from 'd3';

const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();

    useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
      }, [renderChartFn, dependencies]);
    return ref;
}
export default useD3;