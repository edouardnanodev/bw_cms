"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::errors",
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
