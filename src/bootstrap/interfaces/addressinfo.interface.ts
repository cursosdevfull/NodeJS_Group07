import { AddressInfo } from 'net';

export default interface IAddress extends AddressInfo {
  port: number;
}
