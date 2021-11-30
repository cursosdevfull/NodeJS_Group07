export default interface IBootstrap {
  initialize(): Promise<boolean | Error>;
}
