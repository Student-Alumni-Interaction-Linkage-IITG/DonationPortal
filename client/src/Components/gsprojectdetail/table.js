import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import tabledata from "./tabledata.js";

const columns = [
  {
    name: "Sl. no. ",
    selector: "Slno",
    sortable: true
  },
  {
    name: "Name",
    selector: "Name",
    sortable: true
  },
  {
    name: "Amount Donated",
    selector: "Amt",
    sortable: true,
    right: true
  }
];

const conditionalRowStyles = [
  {
    when: row => true,
    style: {
      backgroundColor: "#D9ECF0",
      // color:'white',
      userSelect: "none"
    },
    // when: row => row.toggleSelected,
    // style: {
    //   backgroundColor: "teal",
    //   userSelect: "none"
    // }
  }
];

function DatatablePage() {
  const [data, setData] = React.useState(tabledata);

  const handleRowClicked = row => {
    const updatedData = data.map(item => {
      if (row.id !== item.id) {
        return item;
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected
      };
    });

    setData(updatedData);
  };

  return (
    // <div className="App">
      <DataTable
        // title="Movies"
        columns={columns}
        data={data}
        defaultSortField="Slno"
        
        onRowClicked={handleRowClicked}
        conditionalRowStyles={conditionalRowStyles}
      />
    // </div>
  );
}


export default DatatablePage;