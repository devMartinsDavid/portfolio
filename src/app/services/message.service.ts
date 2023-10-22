import { Injectable } from "@angular/core";

import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public swal = Swal;
  
  constructor(
    private service: ToastrService
  ) { }

  public toastError(msg = 'Falha de servidor', title = 'Ops!') {
    this.service.error(msg, title)
  }

  public toastSuccess(msg = 'Cadastrado com sucesso!', title = 'Prontinho!') {
    this.service.success(msg, title);
  }

  public toastWarning(msg = 'Algo está faltando!', title = 'Opa!') {
    this.service.warning(msg, title);
  }

  public alertNet() {
    this.swal.fire({
      icon: 'error',
      title: 'Falha na conexão',
      html: 'Parece que você está sem internet, verifique a conexão!',
      allowOutsideClick: false,
    }).then(resp => {
      if (resp.value) {
        location.reload();
      }
    });
  }

}
