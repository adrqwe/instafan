import smtplib

from email.message import EmailMessage
from string import Template
from pathlib import Path
from decouple import config


def sendEmail(to: str, subject: str, name: str, code: str):
    try:
        html = Template(Path("index.html").read_text(encoding="utf8"))
        email = EmailMessage()
        email["from"] = "Instafan Project"
        email["to"] = to
        email["subject"] = subject

        email.set_content(html.substitute({"name": name, "code": code}), "html")

        with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.login(config("EMAILLOGIN"), config("EMAILPASSWORD"))
            smtp.send_message(email)

        return {"status": 200}
    except:
        return {"status": 500}
