export class BaseResponse<T> {
    public data: T | null
    public message: string
    public status_code: number
    public success: boolean
    public errors?: Record<string, never>[]

    constructor(data: T, message: string, status_code: number, success: boolean) {
        this.data = data
        this.message = message
        this.status_code = status_code
        this.success = success
    }
}

export class BasePaginatedResponse<T> extends BaseResponse<T> {
    total: number

    page: number

    per_page: number

    total_page: number

    static paginateSuccessResponse<T>(
        data: T,
        total: number,
        page: number,
        per_page: number,
        total_page: number,
        message = 'Success'
    ): BasePaginatedResponse<T> {
        return {
            data,
            message,
            success: true,
            status_code: 200,
            total,
            page,
            per_page,
            total_page,
        }
    }

    static paginateErrorResponse<T>(
        message = 'Error',
        status_code = 500,
        errors?: Record<string, never>[]
    ): BasePaginatedResponse<T> {
        return {
            data: null,
            message,
            success: false,
            status_code,
            errors,
            total: 0,
            page: 0,
            per_page: 0,
            total_page: 0,
        }
    }
}
