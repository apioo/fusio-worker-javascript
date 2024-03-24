import express, {Express, NextFunction, Request, Response} from "express";
import {json} from "body-parser";
import {Worker} from "./src/Worker";
import {Message} from "./src/generated/Message";

const app: Express = express();
const port = process.env.PORT || 9091;
const worker = new Worker();

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const message: Message = {
        success: false,
        message: err.message,
        trace: err.stack
    };

    res.status(500).send(message);
};

app.use(json());
app.use(errorHandler);

app.get("/", async (req: Request, res: Response) => {
    const about = await worker.get();

    res.send(about);
});

app.post("/:action", async (req: Request, res: Response) => {
    const respone = await worker.execute(req.params.action, req.body);

    res.send(respone);
});

app.put("/:action", (req: Request, res: Response) => {
    const response = worker.put(req.params.action, req.body);

    res.send(response);
});

app.delete("/:action", (req: Request, res: Response) => {
    const response = worker.delete(req.params.action);

    res.send(response);
});

app.listen(port, () => {
    console.log(`Fusio Worker started on port ${port}`);
});
