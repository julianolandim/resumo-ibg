import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';

// Minimal shape of LoginComponent needed by LoginService.validaLogin
class FakeLoginComponent {
  formLogin: any = { value: { username: '', password: '' } };
  mostraErro = false;
  msgErro = '';
}

describe('LoginService (validaLogin)', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.get(LoginService);
  });

  function makeComp(username: string, password: string) {
    const comp = new FakeLoginComponent();
    comp.formLogin.value.username = username;
    comp.formLogin.value.password = password;
    return comp;
  }

  it('should fail and show message when username is empty', () => {
    const comp = makeComp('', 'secret');

    const result = service.validaLogin((comp as any));

    expect(result).toBeFalsy();
    expect(comp.mostraErro).toBeTruthy();
    expect(comp.msgErro).toBe('Informe o usuário');
  });

  it('should fail and show message when username is only whitespace', () => {
    const comp = makeComp('   ', 'secret');

    const result = service.validaLogin((comp as any));

    expect(result).toBeFalsy();
    expect(comp.mostraErro).toBeTruthy();
    expect(comp.msgErro).toBe('Informe o usuário');
  });

  it('should fail and show message when password is empty', () => {
    const comp = makeComp('user', '');

    const result = service.validaLogin((comp as any));

    expect(result).toBeFalsy();
    expect(comp.mostraErro).toBeTruthy();
    expect(comp.msgErro).toBe('Informe a senha.');
  });

  it('should fail and show message when password is only whitespace', () => {
    const comp = makeComp('user', '    ');

    const result = service.validaLogin((comp as any));

    expect(result).toBeFalsy();
    expect(comp.mostraErro).toBeTruthy();
    expect(comp.msgErro).toBe('Informe a senha.');
  });

  it('should pass when username and password are non-empty even with surrounding spaces', () => {
    const comp = makeComp('  user  ', '  secret  ');

    const result = service.validaLogin((comp as any));

    expect(result).toBeTruthy();
    // Should not set error state on success
    expect(comp.mostraErro).toBeFalsy();
    expect(comp.msgErro).toBe('');
  });
});
