import UseCaseBase from "../../shared/application/base.usecase";
import DriverModel from "../domain/driver.model";
import DriverRepository from "./driver.repository";

export default class DriverUseCase extends UseCaseBase<
  DriverModel,
  DriverRepository
> {
  constructor(operation: DriverRepository) {
    super(operation);
  }
}
