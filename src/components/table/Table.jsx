import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://techno.uz/image/cache/catalog/333-700x500.jpg",
      costumer: "John Smith",
      date: "1 March",
      amount: 155,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Lenovo Legion 5",
      img: "https://www.powerplanetonline.com/cdnassets/lenovo_legion_5_amd_ryzen_5_rtx_3060_16gb_ddr4_512gb_ssd_wifi_6_windows_10_home_fullhd_82ju009wpb_portatil_15_6_02_l.jpg",
      costumer: "Brain Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 3,
      product: "MacBook",
      img: "https://www.apple.com/v/macbook-pro-13/j/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
      costumer: "Nate Smith",
      date: "15 May",
      amount: 55,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 4,
      product: "Acer Nitro 5",
      img: "https://techno.uz/image/cache/catalog/333-700x500.jpg",
      costumer: "John Smith",
      date: "1 March",
      amount: 155,
      method: "Cash on delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className="image"/>
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.costumer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
