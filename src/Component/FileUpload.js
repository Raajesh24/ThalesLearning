// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./fileUploadform.css";
import Box from "@mui/material/Box";
import axios from "axios";
// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const btn = {
  backgroundColor: "#2c2ca7",

  border: "none",
  color: "white",
  padding: "10px 22px",
  textAlign: "center",
  textDecoration: "none",
  display: "inlineBlock",
  fontSize: "16px",
};

const FileUpload = () => {
  const [extractedData, setExtractedData] = useState(false);
  const [file, setFile] = useState(null);
  const [ponumber, setPonumber] = useState("");
  const [podate, setPodate] = useState("");
  const [amount, setAmount] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [shipping, setShipping] = useState("");

  // useEffect(() => {
  //   fetchPoDetails();
  // }, [po]);

  // const fetchPoDetails = () => {
  //   fetch("PoDetails.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPo(data[0]);
  //     });
  // };

  const fileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "https://spring-boot-app-fvgvcmchhgcvayhr.southindia-01.azurewebsites.net/api/extract",
        // "http://localhost:3000/api/files/extract",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setExtractedData(response.data);
      console.log(response.data.documents[0].fields);
      setPonumber(response.data.documents[0].fields.PONumber.value);
      setPodate(response.data.documents[0].fields.Date.value);
      setSubtotal(response.data.documents[0].fields.SubTotal.value);
      setTax(response.data.documents[0].fields.Tax.value);
      console.log(response.data.documents[0].fields.Tax.value);
      setShipping(response.data.documents[0].fields.Shipping.value);

      setAmount(response.data.documents[0].fields.SubTotal.value);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="fileupload">
      {/* <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(e) => {
            fileChange(e);
          }}
          multiple
        />
      </Button> */}
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={fileChange}
      />
      <button style={btn} onClick={handleUpload}>
        PO Extract
      </button>
      <br />
      <br />
      {extractedData && (
        <div style={{ color: "palegreen" }}>
          <pre style={{ color: "#B03052" }}>File uploaded Successfully</pre>
        </div>
      )}
      {/* <h4 style={{ color: "blue" }}>{fileUploadedMsg}</h4> */}

      <div className="fileUploadform">
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-read-only-input"
              label="PO ref no"
              value={ponumber}
              // defaultValue="Po ref no"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="PO Date"
              value={podate}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Total Amount"
              value={amount}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>
          <div>
            <TextField
              id="outlined-read-only-input"
              label="Sub Total"
              value={subtotal}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Tax"
              value={tax}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Shipping Cost"
              value={shipping}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>
          {/* <div>
            <TextField
              id="outlined-read-only-input"
              label="PO Reception Date"
              value={""}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div> */}
        </Box>
      </div>
      <div>
        ={" "}
        <Button variant="contained" disabled>
          Back
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button variant="contained" disabled>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
