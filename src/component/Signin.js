import React,{useState} from 'react'
import {Grid,Box,Button,TextField,makeStyles,Link} from '@material-ui/core'
const usestyles=makeStyles(()=>({
    frmbdy:{
        backgroundColor:"#F2F2F2",
        boxShadow:"0px 4px 8px rgb(0 0 0 / 20%)",
        borderRadius:"10px"
    },
    frm:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"50px"
        
        
    },
    contnr:{
        backgroundColor:"#F2F2F2",
        height:"100%"
    },
    btn: {
        color: "grey",
        backgroundColor:"#1d1d1f",
        '&:hover': {
          backgroundColor: "#333333"
        },
        '&:focus': {
          backgroundColor: "#333333",
    
        }
    },
    action:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"0px 50px 50px 50px"
    }
    
}));
export default function Signin(props) {
    const apply=usestyles();
   const [user,setuser]=useState({
       username: "",
       pswd: "",
   });
   
   const handleChange = (event) => {
    setuser({...user,[event.target.name]:event.target.value});
  };
    console.log(user)
    return (
        <>
        <Grid container justify='center' className={apply.contnr} alignItems='center'>
            <Grid className={apply.frmbdy} item xs={6} sm={4}>
                <Box component="div" className={apply.frm}>
                    
                    <TextField name="username"   variant='outlined' label="Email" helperText="example@some.com" value={user.username} onChange={handleChange} />
                    <br/>
                    <TextField type='password' name="pswd" variant='outlined'  label="Password"  value={user.pswd} onChange={handleChange} />

                    
                </Box>
                <Box className={apply.action} >
                    <Button className={apply.btn} >Sign-in</Button>
                    <br/>
                    <Link href="#" >Forget Password ?</Link>
                    <br/>
                    <Link href="#" >Create an account</Link>
                </Box>
            </Grid>
        </Grid>

            
        </>
    )
}
