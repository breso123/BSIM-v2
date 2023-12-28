import TableRow from "../../../formItems/TableRow";

/* eslint-disable react/prop-types */
function TableRows9({ arr, idea, vals }) {
  return (
    <>
      {arr.map((el, i) => (
        <TableRow key={i} vals={vals} idea={idea} item={el} />
      ))}
    </>
  );
}

export default TableRows9;
