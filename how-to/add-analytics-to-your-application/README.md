# Add Analytics to your Application

This application you are about to build and run, is a simple example of leveraging OpenFin's [System API](https://developer.openfin.co/docs/javascript/stable/System.html), along with ElasticSearch and Kibana, to show you how you can setup your own live metrics for your OpenFin enhanced applications. This is not a best practices guide, merely to show what's possible. 

This example assumes you have already [set up your development environment](https://developers.openfin.co/of-docs/docs/set-up-your-dev-environment).

## Getting Started

There are 2 steps to this process. One, getting Kibana and Elastic search installed, please see the [Elastic Search readme](ElasticSearch.md) file for the details on that. Secondly, see the [OpenFin Test Application readme](OpenFin.md) for details on running the test application. The test application will send CPU and Memory usage to ElasticSearch and we can use Kibana to create a dashboard to visualise this in realtime.