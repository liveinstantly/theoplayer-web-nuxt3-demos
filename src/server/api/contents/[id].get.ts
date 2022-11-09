import fs from "fs";
import path from "path";

const contentJsonBase = path.resolve(process.cwd() + "/src/content/player/demos/contents");

export default defineEventHandler((event) => {
    try {
        const id = event.context.params.id;
        const json = path.resolve(contentJsonBase + "/" + id + ".json");
        const contents = JSON.parse(fs.readFileSync(json, 'utf-8'));
        return contents;
    } catch {
        throw createError({
            statusCode: 404,
            statusMessage: "The specified resource is not found."
        });
    }
});
