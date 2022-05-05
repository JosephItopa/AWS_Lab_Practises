import requests

from app.request_id import account_id

from flask import Flask, jsonify, request
 
# instantiate flask object
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def get_input():

   # load packets
   transaction_payload = request.get_json(force = True)

   code_id = transaction_payload['code_id']

   sec_key = transaction_payload['sec_key']

   res_key = json.loads(account_id(code_id, sec_key))

   _id = res_key["id"]

   url = "https://api.withmono.com/accounts/_id/statement?period=last6months"
   
   payload = {}
   
   headers = {
  
  'mono-sec-key': sec_key
   
   }

   response = requests.request("GET", url, headers = headers, data = payload)

   return response.text