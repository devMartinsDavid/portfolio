import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';
import { AppService } from '@app/services/app.service';
import { MessageService } from '@app/services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends ControllerBase {
  
  loading: Boolean = false;

  constructor(
    private title: Title,
    private service: AppService,
    private message: MessageService,
    private spinner: NgxSpinnerService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Contato');
  }

  sendMail(form: NgForm): any{
    if (!form.valid) {
      this.message.toastWarning('Preencha os campos obrigatórios!')
      return false;
    }

    this.spinner.show();
    this.service.sendMail(form.value).then((res) => {
      form.reset();
      this.spinner.hide();
      this.message.toastSuccess('Email enviado com sucesso!', 'Muito Obrigado!');
    }, (err) => {
      this.spinner.hide();
      this.message.toastError('Por favor, tente novamente mais tarde!', 'Falha no envio!')
    })
  }

}
