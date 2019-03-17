module.exports= {
        cacheId:"api-sw-precache",
        clientsClaim:true,
        directoryIndex:'index.html',
        runtimeCaching: [{
            urlPattern: /http:\/\/localhost:1337\/blogposts\//,
            handler: 'networkFirst',
            options: {
              cache: {
                name: 'runtimeAPICache'
              }
            }
          }]
    }
