import { Box } from "@mantine/core";
import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export default function Stars() {
  const stars = (
    <Box display={"flex"} style={{ gap: "5px" }} c={"yellow"} mt={10} mb={3}>
      <IconStarHalfFilled style={{ width: "20px", height: "20px" }} />
      <IconStarFilled style={{ width: "20px", height: "20px" }} />
      <IconStarFilled style={{ width: "20px", height: "20px" }} />
      <IconStarFilled style={{ width: "20px", height: "20px" }} />
      <IconStarFilled style={{ width: "20px", height: "20px" }} />
    </Box>
  );

  return <div>{stars}</div>;
}
