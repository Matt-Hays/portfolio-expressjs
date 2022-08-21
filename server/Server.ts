import { Server as HttpServer } from 'http';

export default interface Server {
	run(): HttpServer;
}
