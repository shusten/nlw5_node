import { Router } from "express";
import { SettingsController } from "./database/controllers/SettingsController";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://logalhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 *      JSON
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };