import { useState } from "react";
import { randomId } from "@mantine/hooks";
import { Pagination } from "@mantine/core";
import Styles from "./PaginationCom.module.css";
function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

export default function PaginationCom() {
  const [activePage, setPage] = useState(1);

  return (
    <div className={Styles.parent}>
      <Pagination
        total={data.length}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </div>
  );
}
