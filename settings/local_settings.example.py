SQLALCHEMY_DATABASE_URI = 'postgresql://{user}:{password}@localhost/{database}'


# ----------------------------- #
# Report to email functionality #
# ----------------------------- #

__username__ = '{email_username}@gmail.com'
SECRET_KEY = '{secret-key}'

# This is the address where this service is hosted. It will be used in the
# links sent to admin e-mail to delete reported tokens.
HOSTED_ADDRESS = 'http://{address}:{port}'

# These are used to send e-mails to the admin when a comment is reported.
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 465
MAIL_USE_SSL = True
MAIL_USERNAME = __username__
MAIL_PASSWORD = '{email_password}'
SENDER_NAME = __username__

# Admins e-mails. They will receive links to delete te reported comments.
ADMIN_EMAILS = [__username__]
