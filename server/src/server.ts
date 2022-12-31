import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import { UserService } from './user/user.service';
const server = express();
class Server {
  constructor(private readonly userService?: UserService) {}
  sendToken() {
    server.post('/refresh_token', async (req, res) => {
      const token = req.cookies.jid;
      if (!token) {
        return res.send({ ok: false, accesToken: '' });
      }
      let payload: any = null;
      try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
      } catch (err) {
        console.error(err);
      }
    });
    //return this.userService.createAccessToken({ user });
  }
  startServer() {
    server.listen(8000, () => {
      console.log('express started');
    });
  }
}
const serve = new Server();
serve.sendToken();
serve.startServer();
