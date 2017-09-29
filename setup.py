#!/usr/bin/env python
# coding: utf-8

from setuptools import setup

setup(
    name="tagarela",
    version='0.1',
    description='Microservice for comments.',
    author='Andrés M. R. Martano',
    author_email='andres@inventati.org',
    url='https://gitlab.com/cuidandodomeubairro/tagarela',
    packages=["tagarela"],
    install_requires=[
        # Main deps:
        # 'Flask',
        # 'Flask-Script',
        # 'Flask-Restplus',
        # 'Flask-CORS',
        # 'Flask-Mail',
        # 'Flask-SQLAlchemy',
        # 'bleach',
        # 'sqlalchemy-utils',
        # 'arrow',
        # 'itsdangerous',
        # 'viralata',
        # 'viratoken',
        # 'psycopg2',  # for Postgres support
        'aniso8601==1.0.0',
        'arrow==0.7.0',
        'bleach==1.4.2',
        'blinker==1.4',
        'cffi==1.2.1',
        'cryptography==1.0.1',
        'decorator==4.0.4',
        'enum34==1.0.4',
        'Flask==0.10.1',
        'Flask-Cors==2.1.0',
        'Flask-Mail==0.9.1',
        'Flask-RESTful==0.3.4',
        'flask-restplus==0.7.2',
        'Flask-Script==2.0.5',
        'Flask-SQLAlchemy==2.0',
        'functools32==3.2.3-2',
        'html5lib==1.0b8',
        'idna==2.0',
        'ipaddress==1.0.14',
        'ipython==4.0.0',
        'ipython-genutils==0.1.0',
        'itsdangerous==0.24',
        'Jinja2==2.6',
        'jsonschema==2.5.1',
        'MarkupSafe==0.11',
        'oauthlib==1.0.3',
        'passlib==1.6.5',
        'path.py==8.1.2',
        'pexpect==4.0.1',
        'pickleshare==0.5',
        'psycopg2==2.6.1',
        'ptyprocess==0.5',
        'pyasn1==0.1.8',
        'pycparser==2.14',
        'PyJWT==1.4.0',
        'python-dateutil==2.4.2',
        'python-openid==2.2.5',
        'python-social-auth==0.2.12',
        'pytz==2015.4',
        'requests==2.7.0',
        'requests-oauthlib==0.5.0',
        'simplegeneric==0.8.1',
        'six==1.7.3',
        'SQLAlchemy==1.0.8',
        'SQLAlchemy-Utils==0.31.0',
        'traitlets==4.0.0',
        'Werkzeug==0.10.4',
        'wheel==0.24.0',
        'viratoken',
        'viralata',
    ],
    keywords=['comments', 'microservice'],
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU Affero General Public License v3 or later (AGPLv3+)",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 3",
        "Environment :: Web Environment",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content :: Message Boards",
    ]
)
