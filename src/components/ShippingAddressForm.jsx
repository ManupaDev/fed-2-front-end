import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

function ShippingAddressForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const fname = formData.get("fname");
    if (fname.length < 4) {
      setErrors({
        ...errors,
        fname: "First Name should be at least 4 char long",
      });
      return;
    }
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.fname; // Remove fname error
      return newErrors;
    });

    const lname = formData.get("lname");
    if (lname.length < 4) {
      setErrors({
        ...errors,
        lname: "Last Name should be at least 4 char long",
      });
      return;
    }
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.lname; // Remove lname error
      return newErrors;
    });
    console.log(fname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>First Name</Label>
        <Input name="fname" className={errors.fname ? "border-red-500" : ""} />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input name="lname" className={errors.lname ? "border-red-500" : ""} />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export default ShippingAddressForm;
