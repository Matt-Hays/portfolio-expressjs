import { Router } from 'express';

export default interface Controller {
	getPath(): string;
	getRouter(): Router;
}
