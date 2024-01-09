import smtplib

from email.message import EmailMessage
from string import Template
from pathlib import Path
from types import SimpleNamespace
from decouple import config

from app.mail.model.model import Mail


def sendEmail(to: str, subject: str, name: str, code: str) -> Mail.SendMail:
    try:
        html = Template(Path("./app/mail/index.html").read_text(encoding="utf8"))
        email = EmailMessage()
        email["from"] = "Instafan Project"
        email["to"] = to
        email["subject"] = subject

        email.set_content(html.substitute({"name": name, "code": code}), "html")

        with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.login(config("EMAIL_LOGIN"), config("EMAIL_PASSWORD"))
            smtp.send_message(email)
            return SimpleNamespace(**{"status": 200})

    except smtplib.SMTPResponseException:
        return SimpleNamespace(**{"status": 500})
