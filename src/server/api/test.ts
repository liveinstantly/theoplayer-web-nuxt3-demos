import { send } from "h3";

export default defineEventHandler(async (event) => {
    const id = "theo-0001";

    const blob: Blob = await $fetch(`https://theoplayer.demo.liveinstantly.cloud/contents/${id}.json`, {
        method: "get",
        responseType: "blob"
    });

    await send(event, Buffer.from(Buffer.from(await blob.arrayBuffer())), blob.type);
});
