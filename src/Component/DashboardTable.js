// DashboardTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const orderData = [
  {
    customer: "VODAFONE",
    productRef: "HALF_CARD_TRIP",
    oiNumber: "OI216454",
    quantity: 2000,
    shipmentDate: "22/01/25",
    status: "Pending",
  },
  {
    customer: "FREE",
    productRef: "CARD_ENP_CHIP",
    oiNumber: "OI4459872",
    quantity: 2000,
    shipmentDate: "22/01/25",
    status: "Error",
  },
  // More sample data...
];

const getStatusChip = (status) => {
  switch (status) {
    case "Pending":
      return <Chip label="In pending" color="warning" />;
    case "Error":
      return <Chip label="Error" color="error" />;
    case "DP Failed":
      return <Chip label="DP failed" color="default" />;
    default:
      return <Chip label="Unknown" />;
  }
};

const DashboardTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Product Ref</TableCell>
            <TableCell>OI Number</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Shipment Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.productRef}</TableCell>
              <TableCell>{order.oiNumber}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.shipmentDate}</TableCell>
              <TableCell>{getStatusChip(order.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
