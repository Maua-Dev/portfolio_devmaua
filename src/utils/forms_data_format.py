import json
from numpy import disp
import pandas as pd
import numpy as np


dfgeral = pd.read_csv('fotos.csv') # é necessário o arquivo fotos.csv, que é a planilha das fotos dos membros

dffotos = dfgeral[['nome', 'foto']]

cols = dffotos['foto']
dffotos = dffotos.apply(lambda col: col.str.replace('https://drive.google.com/open?', 'https://drive.google.com/uc'))
dffotos = dffotos.apply(lambda col: col.str.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?id='))
dffotos = dffotos.apply(lambda col: col.str.replace('\/view?usp=share_link', ''))
dffotos = dffotos.apply(lambda col: col.str.replace('\/view?usp=share_link/', ''))
dffotos = dffotos.apply(lambda col: col.str.replace('\/view', ''))
dffotos = dffotos.apply(lambda col: col.str.replace('\?usp=share_link', ''))

dfatuais = pd.read_csv('atuais.csv') # é necessário o arquivo atuais.csv gerado pelo Office Forms
dfatuais = dfatuais.rename(columns={'Nome completo:': 'nome'})
dfatuais.drop(columns=['Name'], inplace=True)
dfatuais['nome'] = dfatuais['nome'].str.rstrip(' ')
dfatuais = dfatuais.replace('Daniel Briquez', 'Daniel Djinishian de Briquez')
dfatuais = dfatuais.replace('Konrad Souza Frederico', 'Konrad Souza Frederich')
dfatuais = dfatuais.replace('Rafael Rubio', 'Rafael Rubio Carnes')

dft = pd.merge(dffotos, dfatuais, how='right', on='nome')
dft = dft.fillna('')
jsonMembers = []
dfjson = dft
dfjson.drop(columns=['ID', 'Start time', 'Completion time', 'Email'], inplace=True)
dfjson.columns = ['name', 'foto', 'ra', 'nascimento', 'email', 'area', 'curso', 'ano', 'linkedinLink', 'githubLink']
m1 = dfjson.duplicated(['name'], keep=False)
m2 = dfjson['githubLink'].isna()
dfjson = dfjson[~(m1 & m2)]
dfjson = dfjson.replace('Não Tenho', np.nan)
dfjson = dfjson.replace('--------------------', np.nan)
dfjson = dfjson.fillna('')
for row in dfjson.iterrows():
    person = {}
    for i in range(len(dft.columns)):
        person[dfjson.columns[i]] = row[1][i]
    jsonMembers.append(person)

jsonMembers = sorted(jsonMembers, key=lambda d: d['name'])

devs, devOps, uxUi, comunicacao, rh, financeiro, diretoria, pos, todos, dataScience = [], [], [], [], [], [], [], [], [], []

for member in jsonMembers:
    if 'DEV' in member['area']:
        devs.append(member)
    if 'Data Science' in member['area']:
        dataScience.append(member)
    if 'Infra' in member['area']:
        devOps.append(member)
    if 'UX/UI' in member['area']:
        uxUi.append(member)
    if 'Comunicação' in member['area']:
        comunicacao.append(member)
    if 'RH' in member['area']:
        rh.append(member)
    if 'Financeiro' in member['area']:
        financeiro.append(member)
    if 'Diretoria' in member['area']:
        diretoria.append(member)
    if 'PO' in member['area']:
        pos.append(member)
    todos.append(member)

import json

jsonClassified = json.dumps({
    'Diretoria': diretoria,
    'Devs': devs, 
    'Infra': devOps, 
    'UX / UI': uxUi,
    'POs': pos,
    'Comunicação': comunicacao,
    'RH': rh,
    'Financeiro': financeiro,
    'Data Science': dataScience,
    "Todos": todos
  })
print(jsonClassified)