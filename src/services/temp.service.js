// Read 외 로직 처리
import { getTempData, CheckFlag } from '../providers/temp.provider.js';
import { userResponseDTO, tempResponseDTO, flagResponseDTO } from '../dtos/temp.response.dto.js';
import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { getConnection  } from '../../config/db.connect.js';

export const createUser = async (name, age) => {
    // 신규 사용자 생성 로직
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM user");
        connection.release(); // 커넥션을 반드시 반환
        return result;
    } catch (error) {
        throw error;
    }
    // ...

    return "User created successfully";
};

export const updateUser = (userId, newData) => {
    // 사용자 업데이트 로직
    // ...

    return "User updated successfully";
};

export const deleteUser = (userId) => {
    // 사용자 삭제 로직
    // ...

    return "User deleted successfully";
};