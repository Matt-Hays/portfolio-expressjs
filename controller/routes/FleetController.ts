import { Router, Request, Response, RequestHandler } from 'express';
import { HttpMethod } from '../../utils/HttpMethod';
import JsonResponse from '../../utils/JsonResponse';
import Controller from '../Controller';

export default class FleetController implements Controller {
	private readonly _path: string;
	private readonly _router: Router;

	constructor(path: string) {
		this._path = path;
		this._router = Router();

		// Map methods to routes.
		this.addRouteHandler(HttpMethod.GET, '/', this.getAll.bind(this));
		this.addRouteHandler(HttpMethod.POST, '/', this.create.bind(this));
		this.addRouteHandler(HttpMethod.GET, '/:id', this.get.bind(this));
		this.addRouteHandler(HttpMethod.PUT, '/:id', this.update.bind(this));
		this.addRouteHandler(HttpMethod.DELETE, '/:id', this.delete.bind(this));
	}

	getPath(): string {
		return this._path;
	}

	getRouter(): Router {
		return this._router;
	}

	addRouteHandler(type: HttpMethod, path: string, routeHandler: RequestHandler): void {
		switch (type) {
			case HttpMethod.GET:
				this._router.get(path, routeHandler);
				break;
			case HttpMethod.POST:
				this._router.post(path, routeHandler);
				break;
			case HttpMethod.PUT:
				this._router.put(path, routeHandler);
				break;
			case HttpMethod.DELETE:
				this._router.delete(path, routeHandler);
				break;
			default:
				throw new Error('Undefined HttpMethod');
		}
	}

	async getAll(req: Request, res: Response): Promise<void> {
		// Call to the Service Layer
		// Respond with an HttpResponse
		try {
			JsonResponse.success(req, res, null, null);
		} catch (err) {
			JsonResponse.failure(req, res, err instanceof Error ? err.message : null, null);
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			JsonResponse.success(req, res, null, null);
		} catch (err) {
			JsonResponse.failure(req, res, err instanceof Error ? err.message : null, null);
		}
	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			JsonResponse.success(req, res, null, null);
		} catch (err) {
			JsonResponse.failure(req, res, err instanceof Error ? err.message : null, null);
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			JsonResponse.success(req, res, null, null);
		} catch (err) {
			JsonResponse.failure(req, res, err instanceof Error ? err.message : null, null);
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			JsonResponse.success(req, res, null, null);
		} catch (err) {
			JsonResponse.failure(req, res, err instanceof Error ? err.message : null, null);
		}
	}
}
