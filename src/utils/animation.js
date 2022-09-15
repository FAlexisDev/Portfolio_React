import Typewriter from "typewriter-effect/dist/core";

export const typewriter = (name) =>
    new Typewriter(name, {
        loop: false,
    });
