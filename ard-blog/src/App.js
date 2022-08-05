import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Divider, Stack } from "@mui/material";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Box>
      <Topbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
