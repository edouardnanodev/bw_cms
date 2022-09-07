"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    {
        name: "strapi::body",
        config: {
            formLimit: "400mb",
            jsonLimit: "400mb",
            textLimit: "400mb",
            formidable: {
                maxFileSize: 400 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
            },
        },
    },
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
