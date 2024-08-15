import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "."

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    os.chdir(DIRECTORY)  # Change to the PassiveJS directory
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving PassiveJS at http://localhost:{PORT}")
        httpd.serve_forever()
