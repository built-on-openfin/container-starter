# OpenFin test app to post cpu and memory usage to ElasticSearch


## Getting Started

1. Install dependencies.

```bash
$ npm install
```

2. Build the project.

```bash
$ npm run build
```

3. Start the test server in a new window.

```bash
$ start npm run start
```

3. Start the test app make sure that you have Kibana and ElasticSearch running before running this command.

```bash
$ openfin -l -c .\public\manifest.fin.json
```

If everything worked correctly, you should see the following. Click the calculate button which will tie up the renderer thread, this will cause a CPU spike to be registered in the Kibana window in near realtime... 

<img src="./assets/Example.JPG" width="70%"/>
