import { createContext, ReactNode } from "react";


export interface TableContextInterface {
  rowValues: Record<string, string | number | boolean | undefined>;
}

export const TableRowContext = createContext<TableContextInterface>({ rowValues: {} });

function TableRowContextProvider(
  { rowValues, children }: TableContextInterface & { children: ReactNode }
): JSX.Element {

  return (
    <TableRowContext.Provider value={{ rowValues }}>
      { children }
    </TableRowContext.Provider>
  );
}


export default TableRowContextProvider;
