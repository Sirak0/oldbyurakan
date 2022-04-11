import express from "express";
import session from "express-session";
import orderData from "./models/Order.js";
import priceData from "./models/Price.js";


const app = express()

// midlewares 

app.use(express.static("../frontend/build"))

app.use(session({
    admin:{login:"oldByurakan"},
    secret:process.env.SECRET,
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}))

app.get("/*", (req,res,next) => {
    console.log(req.url);
    next()
})

app.post("/*", (req,res,next) => {
    console.log(req.url);
    next()
})

app.get("/", (req,res) => {
    console.log("server running");
    res.send("server running!")
})

app.post("/book", (req,res) => {
    var order = orderData(req.body)
    order.save()
    res.send("Հաջող ամրագրում")
})

app.post("/countPrice" , (req,res) => {
    console.log(req.body)
    var count = req.body
    if(count.days < 1){
        res.send("Սխալ օրերի քանակ")
    }
    else{
    }
     priceData.find({type:req.body.type}, function(err,docs){
        if(err){
            console.error(err);
        }
        else{
            console.log(docs[0].price);
            var dayPricing = parseInt(docs[0].price)
            var price = count.days * dayPricing
            res.send(price + "դրամ")
        }
   })
})

app.get("/type::type", (req,res) => {
    priceData.find({type:req.params.type},function(err,docs){
        if(err){
            console.error(err);
        }
        else if(docs){
            res.send(docs[0].price)
        }
    })
})


export default app