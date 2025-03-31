import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';
import { AppService } from '@app/services/app.service';
import { MessageService } from '@app/services/message.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent extends ControllerBase implements OnInit {

  loading: boolean = false;

  constructor(
    private titleService: Title,
    private appService: AppService,
    private messageService: MessageService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService
  ) {
    super(translateService);
  }

  ngOnInit(): void { this.setTitle('DevMartins | Contato'); }

  setTitle(newTitle: string): void { this.titleService.setTitle(newTitle); }

  sendMail(form: NgForm): void {
    if (!form.valid) {
      this.messageService.toastWarning('Preencha os campos obrigatórios!');
      return;
    }

    this.spinner.show();
    this.appService.sendMail(form.value)
      .then((res) => {
        form.reset();
        this.spinner.hide();
        this.messageService.toastSuccess('Email enviado com sucesso!', 'Muito Obrigado!');
      })
      .catch((err) => {
        this.spinner.hide();
        this.messageService.toastError('Por favor, tente novamente mais tarde!', 'Falha no envio!');
      });
  }
}
