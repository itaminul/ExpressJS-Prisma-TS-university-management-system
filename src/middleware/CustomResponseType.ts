interface CustomResponse {
  success: boolean;
  statusCode: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export default CustomResponse;