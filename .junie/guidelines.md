# Projeto: resumo-ibg — Guia de Desenvolvimento

Este documento consolida detalhes específicos deste projeto Angular (CLI v8) para acelerar desenvolvimento, build e testes.

## 1) Build e Configuração

- Versões-chave
  - Angular CLI: ~8.0
  - TypeScript: ~3.4
  - Node: o projeto foi criado para Node 10/12. Em versões modernas de Node (>=17/18/20), Webpack antigo requer a flag de compatibilidade OpenSSL (ver sessão de testes).
  - Gerenciador de pacotes: npm

- Instalação
  - Requisitos: Node + npm e Google Chrome instalados (para Karma/ChromeHeadless).
  - Instale dependências:
    ```bash
    npm ci
    # ou, se não houver package-lock sincronizado com sua versão de npm:
    npm install
    ```

- Servir em desenvolvimento
  - URL padrão: http://localhost:4200
  - Comando:
    ```bash
    npm start
    ```

- Build de produção
  ```bash
  npm run build
  ```

- Configurações de ambiente
  - `src/environments/environment.ts` define `environment.apiUrl` (atualmente: `http://201.16.169.4:8006/api-resumo-ibg`).
  - Altere o endpoint conforme necessário para o seu ambiente. O arquivo `environment.prod.ts` é usado quando `--prod` é passado ao `ng build`.

## 2) Testes (Unitários)

O projeto usa Jasmine + Karma com Chrome Headless.

- Execução em Node moderno (>=17) — requisito importante
  - Devido a Webpack antigo, é necessário setar `NODE_OPTIONS=--openssl-legacy-provider` para que a suíte de testes execute sem erro `ERR_OSSL_EVP_UNSUPPORTED`.
  - Execução headless (não-interativa):
    ```bash
    NODE_OPTIONS=--openssl-legacy-provider npx ng test --watch=false --browsers=ChromeHeadless
    ```
  - Alternativas:
    - Em shells Windows PowerShell:
      ```powershell
      $env:NODE_OPTIONS='--openssl-legacy-provider'; npx ng test --watch=false --browsers=ChromeHeadless
      ```

- Scripts úteis
  - `npm test` mapeia para `ng test` (padrão abre o navegador e fica em watch). Use os flags acima para CI/headless.

- Cobertura
  - Karma está configurado com `karma-coverage-istanbul-reporter`. Ao rodar testes, relatórios são gravados em `coverage/resumo-ibg`.

- Pitfalls e dicas específicas deste projeto
  - Vários componentes do template raiz usam elementos personalizados (ex.: `app-barra-nagevacao`, `app-menu-lateral`, `router-outlet`). Para evitar erros de template em testes unitários, use `NO_ERRORS_SCHEMA` para ignorar elementos/atributos desconhecidos quando o template não é foco do teste.
  - `AppComponent` depende de `AmbienteService` (que chama `validaLogin()` no `ngOnInit`) e do roteador. Em testes, injete `RouterTestingModule` e faça mock de `AmbienteService` para evitar efeitos colaterais de autenticação/rota.
  - Quando um serviço usa `HttpClient`, utilize `HttpClientTestingModule` e `HttpTestingController` para testes de requisição sem I/O real.

- Como adicionar um novo teste
  1. Crie um arquivo `*.spec.ts` próximo ao arquivo testado.
  2. Use `TestBed.configureTestingModule` e importe módulos de teste necessários (`RouterTestingModule`, `HttpClientTestingModule`, etc.).
  3. Ao testar componentes com muitos filhos/elementos desconhecidos, use `schemas: [NO_ERRORS_SCHEMA]` quando a renderização completa não for necessária.

- Exemplo de teste simples (padrão usado aqui)
  - Atualizamos o teste do `AppComponent` para um smoke test robusto. Padrão:
    ```ts
    import { TestBed, async } from '@angular/core/testing';
    import { NO_ERRORS_SCHEMA } from '@angular/core';
    import { RouterTestingModule } from '@angular/router/testing';
    import { AppComponent } from './app.component';
    import { AmbienteService } from './ambiente/ambiente.service';

    class MockAmbienteService { validaLogin() {} }

    describe('AppComponent', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule],
          declarations: [AppComponent],
          providers: [{ provide: AmbienteService, useClass: MockAmbienteService }],
          schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
      }));

      it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });

      it("should have as title 'resumo-ibg'", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('resumo-ibg');
      });
    });
    ```

- Como rodar os testes e validar
  ```bash
  NODE_OPTIONS=--openssl-legacy-provider npx ng test --watch=false --browsers=ChromeHeadless
  # Saída esperada (resumo):
  # TOTAL: 2 SUCCESS
  ```

## 3) Informações adicionais de desenvolvimento

- Estilo e lint
  - TSLint está configurado (`tslint.json`). Siga convenções de Angular 8 (decorators, DI via construtor, módulos, etc.).
  - Rode `npm run lint` para checagens estáticas. Ajuste regras conforme necessário.

- Padrões vistos no código
  - Form handling: diversos componentes usam `formLogin` e controle manual de `disable()` / `enable()`; mantenha consistência de UX (alterando `btnText`, `btnFormDisable`, `mostraErro`).
  - Armazenamento local: login persiste `usuario` em `localStorage`; lembre-se de limpar/validar em fluxos de logout.
  - Serviços HTTP: endpoints são montados a partir de `environment.apiUrl`; prefira serviços injetáveis e mantenha as chamadas centralizadas.

- Testes de serviços HTTP
  - Exemplo de esqueleto:
    ```ts
    import { TestBed } from '@angular/core/testing';
    import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
    import { LoginService } from './login.service';

    describe('LoginService', () => {
      let httpMock: HttpTestingController;
      let service: LoginService;

      beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(LoginService);
      });

      afterEach(() => httpMock.verify());

      it('should be created', () => {
        expect(service).toBeTruthy();
      });

      // Adicione testes de chamadas HTTP aqui...
    });
    ```

- Execução E2E
  - O projeto possui Protractor configurado (`e2e/`, `protractor.conf.js`). Protractor está deprecated; se precisar de E2E novo, considere migrar para Cypress/Playwright. Caso use Protractor leg legado:
    ```bash
    npm run e2e
    ```

- Dicas de manutenção
  - Evite acoplamento forte de componentes a serviços no `ngOnInit` quando for possível postergar a lógica para facilitar testes.
  - Ao introduzir novos componentes, crie testes que foquem em comportamento público e use `NO_ERRORS_SCHEMA` para ignorar filhos quando não são o foco.
