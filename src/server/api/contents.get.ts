import fs from "fs";
import path from "path";

const contentJsonBase = path.resolve(process.cwd() + "/src/content/player/demos/contents");

export default defineEventHandler((event) => {
    const json = path.resolve(contentJsonBase + ".json");
    try {
        const contents = JSON.parse(fs.readFileSync(json, 'utf-8'));
        return contents;
    } catch {
        throw createError({
            statusCode: 404,
            statusMessage: `The specified resource is not found: ${json}.`,
            stack: `${JSON.stringify(process.env)}`,
        });
    }
});
