# OPFS Logs

This directory will be written to by our example node server. It will receive the log file that was written to by the provider. The provider gets messages from multiple views and itself and writes them to a log file in the origin private filesystem. The sample app then lets you get the contents of that log file to send to the server, write to this directory and clear.
