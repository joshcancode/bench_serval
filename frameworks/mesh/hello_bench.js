import { App } from '@ionited/mesh';

const app = new App();

app
	.get('/', (req, res) => res.send("Hello, Bench!"))
	.listen(8000);