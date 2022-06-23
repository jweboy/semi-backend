type PageList<T> = {
  items: Array<T>;
  total: number;
};

type BaseResponse<T> = {
  data: T | null;
  code: number;
  msg?: string;
};

type ResponseByPagination<T> = BaseResponse<PageList<T>>;
type Response<T> = BaseResponse<T>;

type Database = {
  connect: DataSource;
};
