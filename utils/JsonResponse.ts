import { Request, Response } from 'express';

export default abstract class JsonResponse {
	static success(req: Request, res: Response, message: string | null, data: JSON | null) {
		res.status(200).json({
			code: 200,
			message: message || 'success',
			data: data,
		});
	}
	static failure(req: Request, res: Response, message: string | null, data: JSON | null) {
		res.status(500).json({
			code: 500,
			message: message || 'Server error',
			data: data,
		});
	}
}
