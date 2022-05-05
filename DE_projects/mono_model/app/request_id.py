import requests
import json

url = "https://api.withmono.com/account/auth"


def account_id(code_id, sec_key):
    payload = json.dumps({
        "code": code_id
        })
    headers = {
        'Content-Type': 'application/json',
        'mono-sec-key': sec_key
        }
    response = requests.request("POST", url, headers=headers, data=payload)
    _id = response.text
    return _id
