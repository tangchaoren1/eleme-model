import Base from '../base/base';
import { homeLogin } from '../models/home';
class home extends Base {
    constructor () {
        super();
    }
    /**
     * 首页登录接口
     */
    async homeLogin (req, res) {
        console.log(req.body, 'node pramas')
        try {
            let response = await homeLogin();
            res.send({
                code: 200,
                success: true,
                data: response,
                message:'ok'
            })
        } catch(err) {
            res.send({
                code: 0,
                success: false,
                message:'系统错误'
            })
        }
    }
}

export default new home;