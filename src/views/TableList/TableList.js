import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import axios from 'axios'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);


export default function TableList() {
  const classes = useStyles();
const [data, setData]  = useState([]);
  const loadData = () => {
    axios.get('https://z61x4bkwld.execute-api.ap-south-1.amazonaws.com/default/CMS-function')
      .then(async function (response) {
        let result = [];
        await response.data.forEach(element => {
          result.push([element.ImageURL, element.Name, element.Email, element.ContactNumber, element.Status])
        });
        setData(result)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Image","Name", "Email", "ContactNumber", "Status"]}
              tableData={data}
            />
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
