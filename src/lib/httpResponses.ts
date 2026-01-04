export function tester(status:number, res: any) {
  return res.status(status).json({message: 'hello'})
}


export function httpResponse(status: number, message: string, data: any, res: any) {

  return res.status(status).json({
    message,
    data,
  });
}

export function wpApiHttpRespone(status: number,data: any, res: any) {
  return res.status(status).json(data);
}