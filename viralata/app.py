#!/usr/bin/env python
# coding: utf-8

from flask import Flask
from flask.ext.cors import CORS
from flask.ext.restplus import apidoc
from flask.ext.mail import Mail

from extensions import db, sv
from views import api
from auths import init_social_models


# App
app = Flask(__name__)
# TODO: usar "path.join" aqui e em todos os outros lugares (onde há '/'?)
app.config.from_pyfile('../settings/common.py', silent=False)
app.config.from_pyfile('../settings/local_settings.py', silent=False)
CORS(app, resources={r"*": {"origins": "*"}})

# DB
db.init_app(app)

# Signer/Verifier
sv.config(priv_key_path="settings/key",
          priv_key_password=app.config['PRIVATE_KEY_PASSWORD'])

# API
api.init_app(app)
app.register_blueprint(apidoc.apidoc)
api.app = app

# Social
init_social_models(app)

# Mail
api.mail = Mail(app)
