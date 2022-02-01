import { FormField, TextInput, Box, Button } from "grommet";
import { useState } from "react";
// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { saveAs } from "file-saver";
// import { ComponentToPrint } from "./ComponentToPrint";
import "./Myform.css";

function Myform() {
  const [name, setName] = useState("Jhon Wick");
  const [likes, setLikes] = useState("Taking revenge for dogs");
  // const componentRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // handlePrint();
    axios
      .post("http://pdf-generator-react.herokuapp.com/create-pdf", {
        name,
        likes,
      })
      .then(() =>
        axios.get("http://pdf-generator-react.herokuapp.com/fetch-pdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "sample.pdf");
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  };
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const handleReset = () => {
    setName("");
    setLikes("");
  };
  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <FormField name="name" htmlFor="name" label="Name">
          <TextInput
            className="input-name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField name="likes" htmlFor="likes" label="What do you like to do">
          <TextInput
            className="input-likes"
            id="likes"
            name="likes"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </FormField>
        <Box direction="row" gap="medium" margin={{ top: "3rem" }}>
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </form>

      {/* <div style={{ display: "none" }} className="">
        <ComponentToPrint likes={likes} name={name} ref={componentRef} />
      </div> */}
    </div>
  );
}

export default Myform;
