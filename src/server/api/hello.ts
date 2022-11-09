import path from "path";

export default defineEventHandler((event) => {
    const pwd = path.resolve(process.cwd());

    return {
        api: "works",
        location: pwd,
    }
});
