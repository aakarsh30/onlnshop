
import React, { useState } from 'react';
import { Grid, Button, makeStyles,Box } from '@material-ui/core';

const design = makeStyles(() => ({
    menudes: {
        paddingBottom: "8px"
    },
    btn: {
        width: "100%",
        color: "grey",
        '&:hover': {
            backgroundColor: "#EDEDED"
        },
        '&:focus': {
            backgroundColor: "#EDEDED",

        }

    }
})
);
const productsec = ["Electronics", "Mobiles", "Laptops & PC", "Groccery", "Fashion", "Appliances"];
export default function Menu() {
    const des = design();
    return (
        <>
            <Grid xs={12} sm={6} md={3} direction='column-reverse'  style={{ height: "100%",backgroundColor: "#F8F8F8", paddingTop: "40px" }} item>
                {productsec.map((items) => {
                    return (
                        <Box className={des.menudes} style={{ width: "100%" }} >
                            <Button variant="text" size="large" aria-label="text primary button group" className={des.btn}>{items}</Button>
                        </Box>
                    )
                })}
            </Grid>

        </>
    )
}
