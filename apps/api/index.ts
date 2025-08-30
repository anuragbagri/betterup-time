import express from 'express';
import v1Routes from "./routes/V1/index";

const app = express();
app.use("api/V1" , v1Routes);

app.listen(process.env.PORT || 3000);



