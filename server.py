import os
import os.path
import random
import sys
import logging
import time
import tornado.websocket
import tornado.web
import tornado.ioloop
from datetime import date, datetime
from perspective import Table, PerspectiveManager, PerspectiveTornadoHandler

class StaticHandler(tornado.web.StaticFileHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

class MainHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self):
        self.write("Access the dashboard at: ")

def make_app():
    TABLE = None
    VIEW = None
    CHANGELOG_TABLE = None
    CHANGELOG_VIEW = None

    here = os.path.abspath(os.path.dirname(__file__))

    def write_changelog(port_id, row):
        CHANGELOG_TABLE.update(row)

    with open(os.path.join(here, "superstore.arrow"), "rb") as arrow:
        TABLE = Table(arrow.read(), index="Row ID")
        VIEW = TABLE.view()

        CHANGELOG_TABLE = Table(TABLE.schema())
        CHANGELOG_VIEW = CHANGELOG_TABLE.view()

        VIEW.on_update(write_changelog, mode="row")
    
    MANAGER = PerspectiveManager()
    MANAGER.host_table("data_source", TABLE)
    MANAGER.host_view("data_view", VIEW)
    MANAGER.host_table("changelog_table", CHANGELOG_TABLE)
    MANAGER.host_view("changelog_view", CHANGELOG_VIEW)

    return tornado.web.Application([
        (r"/", MainHandler),
        # create a websocket endpoint that the client Javascript can access
        (r"/static/(.*)", StaticHandler, {"path": os.path.join(here, "static")}),
        (r"/ws", PerspectiveTornadoHandler, {"manager": MANAGER, "check_origin": True})
    ])

if __name__ == "__main__":
    app = make_app()
    port = int(os.environ.get("PORT", 5000))
    app.listen(port)
    logging.critical("Listening on Port {0}".format(port))
    loop = tornado.ioloop.IOLoop.current()
    loop.start()
