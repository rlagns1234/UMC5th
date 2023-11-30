// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { tempResponseDTO, userResponseDTO, flagResponseDTO } from "../dtos/temp.response.dto.js";
import { getConnection  } from '../../config/db.connect.js';

export const getTempData = () => {
    return tempResponseDTO("This is TEST! >.0");
}

export const getUserAll = async () => {
    try {
        const connection = await getConnection();
        return new Promise((resolve, reject) => {
            // 비동기 작업 수행 후 데이터를 resolve로 반환
            // 또는 에러가 발생하면 reject를 사용하여 에러 처리
            connection.query("SELECT * FROM user", function(err, rows, fields) {
                resolve(userResponseDTO(rows))
            });
        });
        
        connection.release(); // 커넥션을 반드시 반환
    } catch (error) {
        throw error;
    }
}

export function CheckFlag(flag){
    if(flag == 1)
        throw new BaseError(status.BAD_REQUEST);
    else{
        return flagResponseDTO(flag);
    }
}