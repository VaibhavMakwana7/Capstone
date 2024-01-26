import json
import requests as rq
import pandas as pd    

f = open('place.json')
 
# returns JSON object as 
# a dictionary
data = json.load(f)
df = pd.json_normalize(data['results'])