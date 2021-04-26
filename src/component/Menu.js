
import React,{useState} from 'react';
import {Grid,Button,makeStyles,Typography,IconButton } from '@material-ui/core';
import {ShoppingBasket,LocalMall} from '@material-ui/icons';
const design=makeStyles(()=>({
   menudes:{
        paddingBottom: "8px"
    },
    btn:{
        width:"100%",
        color:"grey",
        '&:hover':{
          backgroundColor: "#EDEDED"
        },
        '&:focus':{
          backgroundColor: "#EDEDED",
          
        }

}})
);
const productsec=["Electronics","Mobiles","Laptops & PC","Groccery","Fashion","Appliances"];
export default function Menu() {
    const des=design();
    return (
        <>
            <Grid direction="column" spacing={4}  style={{height:"100%",width:"20%",backgroundColor:"#F8F8F8",paddingTop:"40px"}} item>
                {productsec.map((items)=>{
                    return(
                        <Grid className={des.menudes} style={{width:"100%"}} item>
                            <Button variant="text" size="large" aria-label="text primary button group" className={des.btn}>{items}</Button>
                        </Grid>
                    )
                })}
            </Grid>
            
        </>
    )
}
