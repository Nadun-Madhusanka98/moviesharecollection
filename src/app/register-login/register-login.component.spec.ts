import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RegisterLoginComponent } from './register-login.component';

describe('RegisterLoginComponent', () => {
  let component: RegisterLoginComponent;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        RegisterLoginComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
    component = TestBed.createComponent(RegisterLoginComponent).componentInstance;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty username, email and password initially', () => {
    expect(component.username).toEqual('');
    expect(component.email).toEqual('');
    expect(component.password).toEqual('');
  });

  it('should validate the fields in register()', () => {
    component.register();
    expect(component.errMsgRegister).toEqual('Please Fill all the fields');

    component.username = 'testuser';
    component.email = 'invalidemail';
    component.password = 'password123';
    component.register();
    expect(component.errMsgRegister).toEqual('Please enter a valid email address');
  });

  it('should make a post request to create a user in register()', () => {
    component.username = 'testuser';
    component.email = 'testuser@email.com';
    component.password = 'password123';

    component.register();

    const req = httpMock.expectOne('http://localhost:9000/user/create');
    expect(req.request.method).toEqual('POST');
    req.flush({ status: true });

    expect(component.passMsgRegister).toEqual('Registered Succeessfully!!!');
  });

  it('should set error message if any field is empty during login', () => {
    component.emailLogin = '';
    component.passwordLogin = '';
    component.login();
    expect(component.errorMessage).toEqual('Please fill all the fields');
    });
  it('should set error message if email is not valid during register', () => {
    component.username = 'user';
    component.email = 'invalidemail';
    component.password = 'password';
    component.register();
    expect(component.errMsgRegister).toEqual('Please enter a valid email address');
    });
  it('should redirect to home page in login() on successful login', fakeAsync(() => {
    spyOn(router, 'navigateByUrl');
    component.emailLogin = 'testuser@email.com';
    component.passwordLogin = 'password123';

    component.login();

    const req = httpMock.expectOne('http://localhost:9000/user/login');
    expect(req.request.method).toEqual('POST');
    req.flush({ status: true });

    tick();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/Home');

  }));
});
