# Manual Docker installation

1. Install Docker, follow the instructions here https://docs.docker.com/get-docker/ for your operating system.
2. Install elasticsearch image as per instructions below.

    a. See https://hub.docker.com/_/elasticsearch or follow the next basic steps...

    b. From a command line or from docker desktop UI. Run in the following command to dowload elasticsearch, change the version tag to suit your needs.

    ```bash
        > docker pull docker.elastic.co/kibana/kibana:8.0.0-alpha1
    ``` 
		
    d. Create a docker network to be shared between elasticsearch and kibana with the following command.

     ```bash		
        > docker network create openfin-network
     ``` 
		
    f. Then run the image up from Docker Desktop application. Ensure to set the network you created earlier, or  run the following command line, changing where appropriate. Note; the cors allow origin from the local app to be able to post to the elastic search rest endpoint.
    
    ```bash		
        > docker run -d --name elasticsearch --net openfin-network -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "http.cors.allow-origin=/https?:\/\/localhost(:[0-9]+)?/" -e "http.cors.enabled=true" docker.elastic.co/elasticsearch/elasticsearch:8.0.0-alpha1
    ```
3. Now install kibana image as per the instructions here

	a. See https://hub.docker.com/_/kibana or follow the next basic steps...
	
    b. From command line or from docker desktop UI. Run in the following command to download kibana, change the version tag to suit your needs.

    ```bash	
        > docker pull docker.elastic.co/kibana/kibana:8.0.0-alpha1
    ``` 
	
    d. Then run the image up from Docker desktop, ensure to set the network you created earlier, or  run the following command line, changing where appropriate…

    ```bash	
        > docker run -d --name kibana --net openfin-network -p 5601:5601 docker.elastic.co/kibana/kibana:8.0.0-alpha1
    ```

4. Navigate to http://localhost:5601/app/kibana_overview#/ and ensure that kibana is running and served up correctly.

