"use strict";

import * as restify from "restify";

import ComponentController from "./controller/ComponentController";
import ProjectController from "./controller/ProjectController";
import TeamController from "./controller/TeamController";
import UserController from "./controller/UserController";

export default function Router(server: restify.Server) {

    // USERS
    server.get("/users", UserController.readUsers);
    server.post("/users", UserController.createUser);
    server.get("/users/:id", UserController.readUser);
    server.patch("/users/:id", UserController.updateUser);
    server.del("/users/:id", UserController.deleteUser);

    // ORGANIZATIONS
    // TODO: implement routing
    // server.get("/organizations", OrganizationController.readOrganizations);
    // server.post("/organizations", OrganizationController.createOrganization);
    // server.get("/organizations/:id", OrganizationController.readOrganization);
    // server.patch("/organizations/:id", OrganizationController.updateOrganization);
    // server.del("/organizations/:id", OrganizationController.deleteOrganization);

    // TEAMS
    server.get("/teams", TeamController.readTeams);
    server.post("/teams", TeamController.createTeam);
    server.get("/teams/:id", TeamController.readTeam);
    server.patch("/teams/:id", TeamController.updateTeam);
    server.del("/teams/:id", TeamController.deleteTeam);

    // PROJECTS
    server.get("/projects", ProjectController.readProjects);
    server.post("/projects", ProjectController.createProject);
    server.get("/projects/:id", ProjectController.readProject);
    server.patch("/projects/:id", ProjectController.updateProject);
    server.del("/projects/:id", ProjectController.deleteProject);

    // COMPONENTS
    server.get("/components", ComponentController.readComponents);
    server.post("/components", ComponentController.createComponent);
    server.get("/components/:id", ComponentController.readComponent);
    server.patch("/components/:id", ComponentController.updateComponent);
    server.del("/components/:id", ComponentController.deleteComponent);

}
