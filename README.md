# 📝 Meu Currículo

Currículo desenvolvido em Angular para aplicar os conhecimentos com algo real e servir como parte do meu portifólio

Nesta versão os dados estão sendo consumidos através de um arquivo de mock (src/app/shared/mocks/resumes.mock.ts)

## Instalação local
```bash
# Rodar o projeto localmente
npm install
npm start

# Acessar aplicação local
http://localhost:4200/
```

## Deploy

Compilar o projeto para gerar a pasta de distribuição 

```bash
# Fazer o build para gerar a pasta dist
npm run build

# Copiar o conteúdo de dist/my-resume para o repositório de deploy
rm ..\danielvazmartins.github.io\*.js
cp -r -Force .\dist\my-resume\* ..\danielvazmartins.github.io\
```
Tomar cuidado para não apagar ou sobescrever os arquivos "CNAME" e "README.md" do repositório de destino
Fazer commit e push do projeto atualizado

### 🌎 Acesse a versão online
https://danielvazmartins.com.br/

## 🛠 Ferramentas utilizadas
Angular, TypeScript, HTML, SASS

[![My Skills](https://skillicons.dev/icons?i=angular,typescript,html,sass)](https://skillicons.dev)