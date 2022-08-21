import { Application, RequestHandler } from 'express';
import { Server as HttpServer } from 'http';
import Controller from '../../controller/Controller';
import Server from '../Server';

export default class ServerMap implements Server {
	private readonly _app: Application;
	private readonly _port: Number;

	constructor(app: Application, port: Number, options: Array<RequestHandler>) {
		this._app = app;
		this._port = port;
		this.configure(options);

		const controllers: Array<Controller> = [];

		this.registerControllers(controllers);
	}

	/**
	 * Execute the server.
	 * @returns HttpServer
	 */
	run(): HttpServer {
		return this._app.listen(this._port, () => {
			console.log(`Application is running at port ${this._port}`);
		});
	}

	private configure(options: Array<RequestHandler>) {
		options.forEach((option) => {
			this._app.use(option);
		});
	}

	private registerControllers(controllers: Array<Controller>) {
		controllers.forEach((controller) => {
			this._app.use(controller.getPath(), controller.getRouter());
		});
	}
}
