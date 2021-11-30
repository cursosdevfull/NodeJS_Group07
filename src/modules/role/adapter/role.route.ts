import express from "express";
import RoleUseCase from "../application/role.usecase";
import RoleOperation from "../infraestructure/role.operation";
import RoleController from "./role.controller";

const operation = new RoleOperation();
const useCase = new RoleUseCase(operation);
const controller = new RoleController(useCase);
const route = express.Router();

route.get("/", controller.list.bind(controller));
route.get("/:id", controller.listOne.bind(controller));
route.get("/page/:page", controller.listByPage.bind(controller));
route.post("/", controller.insert.bind(controller));
route.put("/:id", controller.update.bind(controller));
route.delete("/:id", controller.remove.bind(controller));

export { route };
