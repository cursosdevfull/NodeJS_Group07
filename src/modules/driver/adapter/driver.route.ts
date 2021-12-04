import express from "express";
import DriverUseCase from "../application/driver.usecase";
import DriverOperation from "../infraestructure/driver.operation";
import DriverController from "./driver.controller";

const operation = new DriverOperation();
const useCase = new DriverUseCase(operation);
const controller = new DriverController(useCase);
const route = express.Router();

route.get("/", controller.list.bind(controller));
route.get("/:id", controller.listOne.bind(controller));
route.get("/page/:page", controller.listByPage.bind(controller));
route.post("/", controller.insert.bind(controller));
route.put("/:id", controller.update.bind(controller));
route.delete("/:id", controller.remove.bind(controller));

export { route };
