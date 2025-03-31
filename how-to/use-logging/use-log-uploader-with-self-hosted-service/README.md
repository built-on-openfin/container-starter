# How to use the LogUploader app with your own self hosted REST service

## How it Works

### Client

1. Please refer to our online documentation for how to setup the log uploader app to send the log. [File](https://developers.openfin.co/of-docs/docs/log-uploader)
2. The manifest file for the log uploader will have the uri for the REST service.
3. A minimum of v40.x of the runtime is required to run the log uploader.
4. You will have a shortcut on the desktop that will start the log uploader process.
5. The shortcut definition is as follows: %LOCALAPPDATA%\Openfin\OpenfinRVM.exe --config=<http or https link to the location of the manifest file>

### Server

1. You will host your own REST api service that will expose one endpoint - /api/upload
2. You can use either a local repository or a remote (eg. S3) service to save the uploaded files
3. Ensure that the service is always running in order for the user to upload the logs
4. Perform any other processing as your requirements dictate

### Further information

For more information please refer to the included video for an in-depth demonstration of this process.
