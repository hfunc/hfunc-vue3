import {resolve} from "path";

const abPath = (path: string) => {
    return resolve(__dirname, path)
}

export {
    abPath
}