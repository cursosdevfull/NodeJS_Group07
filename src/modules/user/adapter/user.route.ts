import express from "express";
import RoleOperation from "../../role/infraestructure/role.operation";
import UserUseCase from "../application/user.usecase";
import UserOperation from "../infraestructure/user.operation";
import UserController from "./user.controller";

const operation = new UserOperation();
const operationRole = new RoleOperation();
const useCase = new UserUseCase(operation, operationRole);
const controller = new UserController(useCase);
const route = express.Router();

route.get("/", controller.list.bind(controller));
route.get("/:id", controller.listOne.bind(controller));
route.get("/page/:page", controller.listByPage.bind(controller));
route.post("/", controller.insert.bind(controller));
route.put("/:id", controller.update.bind(controller));
route.delete("/:id", controller.remove.bind(controller));

export { route };
