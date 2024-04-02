import express, {Express, NextFunction, Request, Response} from "express";
import {json} from "body-parser";
import {Worker} from "./src/Worker";
import {Message} from "./src/generated/Message";

const app: Express = express();
const port = process.env.PORT || 9091;
const worker = new Worker();

app.use(json());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await worker.get());
    } catch (error) {
        next(error);
    }
});

app.post("/:action", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await worker.execute(req.params.action, req.body));
    } catch (error) {
        next(error);
    }
});

app.put("/:action", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await worker.put(req.params.action, req.body));
    } catch (error) {
        next(error);
    }
});

app.delete("/:action", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await worker.delete(req.params.action));
    } catch (error) {
        next(error);
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const message: Message = {
        success: false,
        message: err.message,
        trace: err.stack
    };

    res.status(500).send(message);
});

app.listen(port, () => {
    console.log(`Fusio Worker started on port ${port}`);
});
