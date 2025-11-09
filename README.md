# resumo-ibg

Aplicação web Angular (CLI v8) para exibir/resumir informações IBG. O projeto segue Angular 8 com TypeScript 3.4 e usa npm como gerenciador de pacotes.

Este README consolida como instalar, rodar, testar e dar manutenção no projeto.

## Visão geral (stack)
- Linguagem: TypeScript
- Framework: Angular 8 (CLI ~8.0.1)
- Build: Angular DevKit / Webpack (via CLI)
- Testes unitários: Jasmine + Karma (Chrome/ChromeHeadless)
- Testes E2E: Protractor (legado)
- Gerenciador de pacotes: npm

## Requisitos
- Node.js 10/12 (projeto foi criado nessas versões)
  - Em Node >= 17/18/20, é necessário `NODE_OPTIONS=--openssl-legacy-provider` para testes (veja seção Testes).
- npm (compatível com sua versão do Node)
- Google Chrome instalado (para Karma/ChromeHeadless)

## Configuração de ambiente
- Arquivos de ambiente: `src/environments/environment.ts` e `src/environments/environment.prod.ts`.
- Variáveis relevantes:
  - `environment.apiUrl`: endpoint base da API (atualmente: `http://201.16.169.4:8006/api-resumo-ibg`).
- Como alterar:
  - Desenvolvimento: edite `src/environments/environment.ts`.
  - Produção: edite `src/environments/environment.prod.ts` (usado quando `--prod` no build).

## Instalação
```bash
npm ci
# ou, se o lockfile não estiver compatível:
npm install
```

## Executar em desenvolvimento
- URL: http://localhost:4200
- Comando:
```bash
npm start
# equivalente a: npx ng serve
```
A aplicação recarrega automaticamente ao salvar arquivos fonte.

## Build de produção
```bash
npm run build
# artefatos em: dist/resumo-ibg
# para produção: npx ng build --prod
```

## Scripts disponíveis
Conforme `package.json`:
- `npm start` → `ng serve`
- `npm run build` → `ng build`
- `npm test` → `ng test`
- `npm run lint` → `ng lint`
- `npm run e2e` → `ng e2e`

## Testes (unitários)
O projeto usa Jasmine + Karma com Chrome Headless.

Em Node moderno (>= 17), configure a flag de compatibilidade OpenSSL:
```bash
NODE_OPTIONS=--openssl-legacy-provider npx ng test --watch=false --browsers=ChromeHeadless
```
Alternativas:
- PowerShell (Windows):
```powershell
$env:NODE_OPTIONS='--openssl-legacy-provider'; npx ng test --watch=false --browsers=ChromeHeadless
```

Execução padrão interativa (abre navegador e fica em watch):
```bash
npm test
```

Relatórios de cobertura são gerados em `coverage/resumo-ibg` (via `karma-coverage-istanbul-reporter`).

Dicas para testes de componentes neste projeto:
- Muitos templates usam elementos customizados (por ex.: `app-barra-nagevacao`, `app-menu-lateral`). Ao testar sem renderização completa, use `schemas: [NO_ERRORS_SCHEMA]`.
- `AppComponent` depende de `AmbienteService` e do roteador. Em testes, use `RouterTestingModule` e faça mock de `AmbienteService` para evitar efeitos colaterais.
- Para serviços com `HttpClient`, use `HttpClientTestingModule` + `HttpTestingController`.

## Testes E2E
Protractor está configurado em `e2e/` (legado/deprecated). Para rodar:
```bash
npm run e2e
```
Sugestão: considerar migração futura para Cypress/Playwright.

## Lint
```bash
npm run lint
```

## Estrutura do projeto
Raiz do repositório (principais arquivos/diretórios):
```
README.md
angular.json
browserslist
e2e/
karma.conf.js
node_modules/
package.json
package-lock.json
src/
tsconfig.json
tsconfig.app.json
tsconfig.spec.json
tslint.json
```
Entrypoints e configurações relevantes (ver `angular.json`):
- Main: `src/main.ts`
- Polyfills: `src/polyfills.ts`
- Index HTML: `src/index.html`
- Styles globais: `src/styles.css` + Bootstrap (`node_modules/bootstrap/dist/css/bootstrap.css`)
- Output de build: `dist/resumo-ibg`

## Variáveis de ambiente (resumo)
- `environment.apiUrl`: URL base da API. Ajuste conforme o ambiente.
- Em Node >= 17: use `NODE_OPTIONS=--openssl-legacy-provider` para executar testes.

## Licença
- TODO: adicionar o tipo de licença do projeto e arquivo `LICENSE` se aplicável.

## Notas e TODOs
- TODO: Documentar autenticação/fluxos de login e armazenamento de `usuario` em `localStorage` se necessário.
- TODO: Adicionar instruções de deploy (host de produção, CI/CD) caso existam.
- TODO: Atualizar endpoints da API conforme os ambientes disponíveis.

## Ajuda adicional (Angular CLI)
Para ajuda do Angular CLI, use `ng help` ou consulte o [README do Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md).
