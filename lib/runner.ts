const bs = require('./')

bs.create();

bs.init({
    proxy: "https://www.google.com",
    port: 9000,
    ui: {
        port: 9001
    }
})