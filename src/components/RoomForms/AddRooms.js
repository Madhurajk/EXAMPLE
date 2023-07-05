import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import Header from "../Header";
import { Formik } from "formik";
import * as yup from "yup";


const AddRooms = () => {

    const handleFormSubmit = (values) => {
    };
    const initialValues = {
        title: "",
        image: "",
        capacity: "",
        condescription: "",
        bookFor: "",
        pricePerDay: "",
        status:""
      };

    return (
        <Box m="20px">
          <Header title="ADD USER" subtitle="Create a new profile for all uses" />
    
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    name="Title"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Image"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.image}
                    name="Image"
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Capacity"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.capacity}
                    name="Capacity"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="Description"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <label value ="Book for">
                <input value= "Multiple Days" type="checkbox" onChange = {handleChange} />
                <input value= "Half-Day" type="checkbox" onChange = {handleChange} />
                <input value= "Hours" type="checkbox" onChange = {handleChange} />
                </label>

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Price per day"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pricePerDay}
                    name="Price per day"
                    sx={{ gridColumn: "span 4" }}
                  />

                 <label>Status :</label>
                 <select id="status">
                 <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Save
                  </Button>
                    </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="clear" color="secondary" variant="contained">
                    Clear
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      );
    };
    
    const checkoutSchema = yup.object().shape({
      title: yup.string().required("required"),
      image: yup.string().required("required"),
    });
    
    export default AddRooms;