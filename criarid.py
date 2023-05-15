import json

f = open("emprego-cientifico.json")
contratos = json.load(f)
f.close()


for index, c in enumerate(contratos):
    c['id'] = "c" + str(index)



f = open("emprego-cientifico.json", "w")
json.dump(contratos, f)

print("adicionados " + str(index+1) + " registos")