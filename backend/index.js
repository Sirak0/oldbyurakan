import app from "./app.js";
import normalizePort from "normalize-port";
import adminBro from "admin-bro";
import bodyParser from "body-parser";
import adminBroExpress from '@admin-bro/express';
import adminBrooMongoose from "@admin-bro/mongoose";
import mongoose from "./database/database.js";
import companyData from "./models/Company.js";
import orderData from "./models/Order.js";
import priceData from "./models/Price.js";



adminBro.registerAdapter(adminBrooMongoose)

const port = normalizePort(process.env.PORT || 1624)

const run = async () => {
    
    const AdminBro = new adminBro({
        databases:[mongoose],
        rootPath:"/admin",
        resources:[
            {resource:priceData,
                options:{
                    properties:{
                        _id:{isVisible:false}
                    }
            }
            },
            {resource:orderData,
                options:{
                    properties:{
                        _id:{isVisible:false}
                    }
            }
            }
        ],
        branding:{
            companyName:"Old Byurakan"
        }
    })
   

    //  router = adminBroExpress.buildRouter(AdminBro, router)
    const router = adminBroExpress.buildAuthenticatedRouter(AdminBro,{
        cookieName:process.env.ADMIN_COOKIE_NAME,
        cookiePassword:process.env.ADMIN_COOKIE_PASS,
        authenticate: async (login,password) => {
            const company = await companyData.find({login})
            
            if(login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD){
                return company
            }
            else{
                return null;
            }
        }
    },null,{
        secret:process.env.SECRET,
        resave:true,
        saveUninitialized:false,
    })
    // const router = adminBroExpress.buildRouter(AdminBro)
    app.use(AdminBro.options.rootPath, router)
    app.use("/",router)
    app.use(bodyParser.json())
}

run()

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
