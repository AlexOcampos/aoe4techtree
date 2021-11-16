import json

with open('./data/data_20211101.json') as json_file:
    data = json.load(json_file)
    for p in data['stats']:
        if 'ab' in p:
            #print(f'"{p["id"]}_AB_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_AB_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_AB_customName": "{p["customName"]}",')

        if 'ch' in p:
            #print(f'"{p["id"]}_CH_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_CH_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_CH_customName": "{p["customName"]}",')
        if 'hr' in p:
            #print(f'"{p["id"]}_HR_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_HR_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_HR_customName": "{p["customName"]}",')
        if 'en' in p:
            #print(f'"{p["id"]}_EN_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_EN_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_EN_customName": "{p["customName"]}",')
        if 'de' in p:
            #print(f'"{p["id"]}_DE_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_DE_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_DE_customName": "{p["customName"]}",')
        if 'fr' in p:
            #print(f'"{p["id"]}_FR_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_FR_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_FR_customName": "{p["customName"]}",')
        if 'mo' in p:
            #print(f'"{p["id"]}_MO_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_MO_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_MO_customName": "{p["customName"]}",')
        if 'ru' in p:
            #print(f'"{p["id"]}_RU_itemClassification": "{p["itemClassification"]}",')
            #print(f'"{p["id"]}_RU_itemDescription": "{p["itemDescription"]}",')
            print(f'"{p["id"]}_RU_customName": "{p["customName"]}",')
