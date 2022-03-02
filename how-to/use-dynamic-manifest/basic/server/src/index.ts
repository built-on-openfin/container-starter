import *  as express from "express";
import * as path from "path";
const app = express();
//app.use(express.static(path.join(__dirname, '../../public')));
const port = 8080;

app.get('/', (req, res) => {
   const env = req.query.env;
   if(env === 'dev'){
        res.json({
        "runtime": {
            "arguments": "--v=1 --inspect",
            "version": "stable"
        },
        "platform": {
            "uuid": "how-to-use-dynamic-manifest",
            "autoShow": true,
            "icon":"http://localhost:8080/favicon.ico",
            "preloadScripts": [
            ],
            "defaultWindowOptions": {
                "preloadScripts": [
                
                ]
            },
            "defaultViewOptions": {
                "preloadScripts": [
                
                ]
            }
        },
        "snapshot": {
            "windows": [
            {
                "layout": {
                "content": [
                    {
                    "type": "stack",
                    "id": "no-drop-target",
                    "content": [
                        {
                        "type": "component",
                        "componentName": "view",
                        "componentState": {
                            "processAffinity": "ps_1",
                             "url": "http://localhost:8080/html/app-dev.html"
                        }
                        }
                    ]
                    }
                ]
                }
            }
            ]
        }
        });
   }else{
    res.json({
        "runtime": {
            "arguments": "--v=1 --inspect",
            "version": "stable"
        },
        "platform": {
            "uuid": "how-to-use-dynamic-manifest",
            "autoShow": true,
            "icon":"http://localhost:8080/favicon.ico",
            "preloadScripts": [
            ],
            "defaultWindowOptions": {
                "preloadScripts": [
                
                ]
            },
            "defaultViewOptions": {
                "preloadScripts": [
                
                ]
            }
        },
        "snapshot": {
            "windows": [
            {
                "layout": {
                "content": [
                    {
                    "type": "stack",
                    "id": "no-drop-target",
                    "content": [
                        {
                        "type": "component",
                        "componentName": "view",
                        "componentState": {
                            "processAffinity": "ps_1",
                            "url": "http://localhost:8080/html/app-staging.html"
                        }
                        }
                    ]
                    }
                ]
                }
            }
            ]
        }
        });
   }
})

app.get('/html/app-dev.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../../public/html/app-dev.html'));
});

app.get('/html/app-staging.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../../public/html/app-staging.html'));
});

app.listen(port, () => {
    console.log("server is listening on port", port);
});