import express from "express" ;
import sum from "./sum.js" ;


const app = express() ;

const port = 3000 ; 

app.listen( port ,  () => {
console.log(`Server is running on port ${port}`) ;
})

app.get( "/" , (req,res) =>{
    res.send("hello shobhit  ");
})

app.get("/sum/:a/:b" , (req,res) =>{

    let {a,b } = req.params ;
    a= parseInt(a);
    b=parseInt(b) ;
    res.json({
        sum : sum(a,b)
    })
})