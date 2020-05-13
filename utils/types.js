// @flow

export type User = {
  id: number,
  name: string,
  username: string
};

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type WrappableComponent =
  | Class<React$Component<any, any, any>>
  | ((props: any) => ?React$Element<any>);
