import { send } from "h3";

export default defineEventHandler(async (event) => {
    const host = process.env.URL;
    const id = event.context.params.id;

    const blob: Blob = await $fetch(`${host}/contents/${id}.json`, {
        method: "get",
        responseType: "blob"
    });

    await send(event, Buffer.from(Buffer.from(await blob.arrayBuffer())), blob.type);
});
