import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoadSankeyData from "./LoadSankeyData";
import CallSankey from "./CallSankey";

const SankeyChart = () => {
  const [completeData, loadData] = useState([]);

  const [filteredData, filterData] = useState([]);

  const [minMax, setMinMax] = useState([]);

  const [value1, setValue1] = useState([]);

  LoadSankeyData(loadData, filterData, setMinMax, setValue1);

  useEffect(() => {
    filterData(
      completeData.filter((d) => d.value >= value1[0] && d.value <= value1[1])
    );
  }, [value1, completeData]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid item xs={12}>
          {filteredData.length > 0 && <CallSankey data={filteredData} />}
        </Grid>
      </Box>
    </Container>
  );
}

export default SankeyChart;
