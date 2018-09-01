import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';

let app  = new express();

/**
 * 处理跨域
 */
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	if (req.method == 'OPTIONS') {
	  	res.sendStatus(200);
	} else {
	    next();
	}
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);
let port = 3030;
const server = app.listen(port, () => {
	console.log(
		`成功监听端口：${port}`
	)
});
server.keepAliveTimeout = 60000 * 2;