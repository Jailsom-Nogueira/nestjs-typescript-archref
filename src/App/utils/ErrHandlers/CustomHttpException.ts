import { HttpException, HttpStatus } from "@nestjs/common";
import { AxiosError } from 'axios';

// For http requests
// export default class CustomHttpException extends HttpException {
//     constructor(err: AxiosError) {
//         super(
//             {
//                 code: err.response?.data['code'] || err.code || 'Error',
//                 message: err.response?.data['message'] || 'Unknown message',
//                 details: err.response?.data['details'] || [],
//             },
//             err.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
//         )
//     }
// }

// For local requests if u´re using response mocks
export default class CustomHttpException extends HttpException {
    constructor(err: AxiosError) {
        super(
            {
                code: err['code'] || err.code || 'Error',
                message: err['message'] || 'Unknown message',
                details: err['details'] || [],
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
        )
    }
}