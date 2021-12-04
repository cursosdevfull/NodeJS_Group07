import { Driver } from "../../../entities/driver.entity";
import OperationBase from "../../shared/infraestructure/base.operation";
import DriverModel from "../domain/driver.model";

export default class DriverOperation extends OperationBase<DriverModel> {
  constructor() {
    super(Driver);
  }
}
