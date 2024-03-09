const Mesh = require("@ionited/mesh");
const app = new Mesh.App();

app
	.get('/', (req, res) => res.send("Hello, Bench!"))
	.listen(8000);