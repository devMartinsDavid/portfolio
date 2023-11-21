import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly swal = Swal;

  constructor(private toastrService: ToastrService) { }

  public toastError(message = 'Falha de servidor', title = 'Ops!') {
    this.toastrService.error(message, title);
  }

  public toastSuccess(message = 'Cadastrado com sucesso!', title = 'Prontinho!') {
    this.toastrService.success(message, title);
  }

  public toastWarning(message = 'Algo está faltando!', title = 'Opa!') {
    this.toastrService.warning(message, title);
  }

  public alertNet() {
    this.swal.fire({
      icon: 'error',
      title: 'Falha na conexão',
      html: 'Parece que você está sem internet, verifique a conexão!',
      allowOutsideClick: false,
    }).then(result => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  }
}
