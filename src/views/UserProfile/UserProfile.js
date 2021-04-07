import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [image, setImage] = useState('')
  var formdata = new FormData();
  
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const onMobileChange = (event) => {
    setMobile(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const onImageChange = (event) => {
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }

  const onSubmitClick = (event) => {
    formdata.append("Name",name)
    formdata.append("Image", image);
    formdata.append("Email", email);
    formdata.append("Password", password);
    formdata.append("Contactnumber", mobile);
    formdata.append("Status", status);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://z61x4bkwld.execute-api.ap-south-1.amazonaws.com/default/CMS-function", requestOptions)
    .then((response) => {
      console.log(response)
    });
  }



  const classes = useStyles();
  return (
    <div>
      <FormControl
        fullWidth
      >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Add User</h4>
                <p className={classes.cardCategoryWhite}>All fields are required</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-full-width"
                      onBlur={onNameChange}
                      required
                      label="Full Name"
                      style={{ margin: 8 }}
                      placeholder="Full Name"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-full-width"
                      label="Email"
                      onBlur={onEmailChange}
                      style={{ margin: 8 }}
                      placeholder="Email"
                      fullWidth
                      type="email"
                      required
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"

                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-full-width"
                      label="Mobile Number"
                      onBlur={onMobileChange}
                      style={{ margin: 8 }}
                      placeholder="Mobile Number"
                      fullWidth
                      required
                      type="mobile"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-full-width"
                      label="Password"
                      style={{ margin: 8 }}
                      onBlur={onPasswordChange}
                      placeholder="Password"
                      fullWidth
                      required
                      type={"Password"}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  </GridItem>
                  <GridItem xs={4} sm={4} md={4}>

                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      style={{ margin: 8 }}
                      onChange={onStatusChange}
                      label="Status"
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={0}>Deactive</MenuItem>

                    </Select>
                  </GridItem>

                  <Button variant="contained" color="primary"
                    style={{ margin: 8 }}
                    onChange={onImageChange}>
                    <input type="file" multiple accept="image/*" />
                      IMAGE UPLOAD
                    </Button>

                </GridContainer>
                <Button variant="contained" color="primary"
                  size="large"
                  fullWidth
                  style={{ margin: 8 }}
                  onClick={(event) => { onSubmitClick(event) }}>
                  SUBMIT
                    </Button>
              </CardBody>

            </Card>
          </GridItem>
        </GridContainer>
      </FormControl>
    </div>
  );
}
