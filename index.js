import express from 'express';
import * as path from 'path';
import router from './router.js';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();
app.use(express.static('vision/build'));
app.use(cors())
app.use('/api', router);

app.use(express.static(path.join(__dirname , "/vision/build"))) 

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "vision", "build", "index.html"))
});

const port = process.env.PORT || 8000
console.log("server started");
app.listen(port);