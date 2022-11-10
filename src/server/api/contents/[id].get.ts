import fs from "fs";
import path from "path";

const contentJsonBase = path.resolve(process.cwd() + "/src/content/player/demos/contents");

export default defineEventHandler((event) => {
    const id = event.context.params.id;
    const json = path.resolve(contentJsonBase + "/" + id + ".json");
    try {
        const contents = JSON.parse(fs.readFileSync(json, 'utf-8'));
        return contents;
    } catch (e) {
        throw createError({
            statusCode: 404,
            statusMessage: `The specified resource is not found: ${json}: ${e}: ${JSON.stringify(process.env)}`,
        });
    }
});
