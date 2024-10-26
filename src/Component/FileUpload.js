import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./fileUploadform.css";
import Box from "@mui/material/Box";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = () => {
  const [po, setPo] = useState([]);
  const [fileUploadedMsg, setFileUploadedMsg] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [poreceptiondate, setporeceptiondate] = useState(null);

  useEffect(() => {
    fetchPoDetails();
  }, []);

  const fetchPoDetails = () => {
    fetch("PoDetails.json")
      .then((res) => res.json())
      .then((data) => {
        setPo(data[0]);
        console.log("podetails", data[0]);
        console.log("podetails", po);
      });
  };

  return (
    <div className="fileupload">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => {
            setFileUploadedMsg(event.target.files[0].name);
            setFileUploaded(true);
          }}
          multiple
        />
      </Button>
      <br />
      <br />
      <h4 style={{ color: "blue" }}>{fileUploadedMsg}</h4>

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
              value={fileUploaded ? po?.porefno : "Enter Po Ref no"}
              defaultValue="Po ref no"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Customer order no"
              value={fileUploaded ? po?.custorderno : "Enter Customer order no"}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Eco term"
              value={fileUploaded ? po?.ecoterm : "Enter Ecoterm"}
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
              label="Payment term"
              value={fileUploaded ? po?.paymentterm : "Enter Payment term"}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Order type"
              value={fileUploaded ? po?.ordertype : "Enter Order type"}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="PO Date"
              value={fileUploaded ? po?.podate : "Enter PO Date"}
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
              label="PO Reception Date"
              value={
                fileUploaded ? po?.poreceptiondate : "Enter PO Reception Date"
              }
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>
        </Box>
      </div>
      <div>
        ={" "}
        <Button variant="contained" disabled>
          Back
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button variant="contained" disabled={fileUploaded ? false : true}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
