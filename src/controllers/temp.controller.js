// 요청이 오면 그에 대한 응답 전달
import { status } from '../../config/response.status.js';
import { CheckFlag, getUserAll, getTempData } from '../providers/temp.provider.js';
import { response } from '../../config/response.js';
import {createUser, updateUser, deleteUser} from "../services/temp.service.js"

export const tempTest = (req, res, next) => {
    console.log("/temp/test");
    res.send(response(status.SUCCESS, getTempData()));
};

export const tempUser = async (req, res, next) => {
    console.log("/temp/user");
    try {
        // getUserAll 함수를 호출하여 result를 얻어옴
        const result = await getUserAll();
        // response 함수를 사용하여 응답 객체를 생성하고, 그 안에 result를 추가
        const responseBody = response(status.SUCCESS, result);

        // 응답 보내기
        res.send(responseBody);
    } catch (error) {
        console.error(error);
        // 에러가 발생했을 경우 에러 응답을 보낼 수 있도록 처리
        res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
    }
}

export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}