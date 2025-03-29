import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ContactComponent } from './contact.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '@app/services/message.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let messageService: MessageService;
  let spinnerService: NgxSpinnerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ContactComponent],
    imports: [FormsModule,
        NgxSpinnerModule,
        ToastrModule.forRoot()],
    providers: [
        ToastrService,
        MessageService,
        NgxSpinnerService,
        provideHttpClient(withInterceptorsFromDi()),
    ]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    spinnerService = TestBed.inject(NgxSpinnerService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 });
