import logging
from pathlib import Path

import emails
from emails.template import JinjaTemplate

from core.config import settings


import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def send_email(
    email_to: str, subject_template: str = "", html_template: str = "", environment=None
) -> None:
    if environment is None:
        environment = {}
    assert settings.EMAILS_ENABLED, "no provided configuration for email variables"
    message = emails.Message(
        subject=JinjaTemplate(subject_template),
        html=JinjaTemplate(html_template),
        mail_from=(settings.EMAILS_FROM_NAME, settings.EMAILS_FROM_EMAIL),)
    smtp_options = {"host": settings.SMTP_HOST, "port": settings.SMTP_PORT}
    if settings.SMTP_TLS:
        smtp_options["tls"] = True
    if settings.SMTP_USER:
        smtp_options["user"] = settings.SMTP_USER
    if settings.SMTP_PASSWORD:
        smtp_options["password"] = settings.SMTP_PASSWORD
    response = message.send(to=email_to, render=environment, smtp={"host":"smtp.gmail.com", "port": 587})
    logging.info(f"send email result: {response}")


def send_test_email(email_to: str) -> None:
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - Test email"
    with open(Path(settings.EMAIL_TEMPLATES_DIR) / "test_email.html") as f:
        template_str = f.read()
    send_email(
        email_to=email_to,
        subject_template=subject,
        html_template=template_str,
        environment={"project_name": settings.PROJECT_NAME, "email": email_to},
    )


def send_reset_password_email(email_to: str, email: str, token: str) -> None:
    project_name = "LIMS SYSTEM"
    subject = f"{project_name} - Password recovery token for user {email}"
    with open(Path(settings.EMAIL_TEMPLATES_DIR) / "reset_password.html") as f:
        template_str = f.read()
    server_host = settings.SERVER_HOST
    link = f"{server_host}/reset-password?token={token}"
    exp_time = settings.EMAIL_RESET_TOKEN_EXPIRE_HOURS,
    html_message = template_str.replace('{{ project_name }}',str(project_name)).replace('{{ email }}',str(email),).replace('{{ reset_token }}',str(token),).replace('{{ valid_hours }}',str(exp_time),)
    send_email2(email_to,html_message)
    send_email(
        email_to=email_to,
        subject_template=subject,
        html_template=template_str,
        environment={
            "project_name": settings.PROJECT_NAME,
            "email": email_to,
            "valid_hours": settings.EMAIL_RESET_TOKEN_EXPIRE_HOURS,
            "reset_token": link,
        },
    )



def send_new_account_email(email_to: str, username: str, password: str) -> None:
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - New account for user {username}"
    with open(Path(settings.EMAIL_TEMPLATES_DIR) / "new_account.html") as f:
        template_str = f.read()
    link = settings.SERVER_HOST
    send_email(
        email_to=email_to,
        subject_template=subject,
        html_template=template_str,
        environment={
            "project_name": settings.PROJECT_NAME,
            "username": username,
            "password": password,
            "email": email_to,
            "link": link,
        },
    )

def send_email2(email_to: str, html_template: str = "") -> None:
    me = settings.SMTP_USER
    my_password = settings.SMTP_PASSWORD
    you = email_to

    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Alert"
    msg['From'] = me
    msg['To'] = you

    html=html_template
    part2 = MIMEText(html, 'html')

    msg.attach(part2)
    session = smtplib.SMTP_SSL('smtp.gmail.com',465)
    session.login(me, my_password)

    session.sendmail(me, you, msg.as_string())
    session.quit()