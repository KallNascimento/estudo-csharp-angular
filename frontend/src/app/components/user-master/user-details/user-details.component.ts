// import { Component, OnInit, TemplateRef } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';
// import { Subject, takeUntil } from 'rxjs';
// import { Todo } from 'src/app/models/todo';
// import { User } from 'src/app/models/user';
// import { UserService } from 'src/app/services/user.service';
// import { TitleComponent } from '../../shared/titulo/title.component';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent implements OnInit {

//   public modalRef: BsModalRef;
//   public selectedUser: User;
//   public title = '';
//   private unsubscriber = new Subject();

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private userService: UserService,    
//     private modalService: BsModalService,
//     private toastr: ToastrService,
//     private spinner: NgxSpinnerService
//   ) { }

//   openModal(template: TemplateRef<any>, todoId: number) {
//     this.usersTodos(template,todoId);
//   }

//   closeModal() {
//     this.modalRef.hide();
//   }

//   todosUsers(template: TemplateRef<any>, id: number) {
//     this.spinner.show();
//     this.todoService.getByDisciplinaId(id)
//       .pipe(takeUntil(this.unsubscriber))
//       .subscribe((todos: Todo[]) => {
//         this.userTodos = todos;
//         this.modalRef = this.modalService.show(template);
//       }, (error: any) => {
//         this.toastr.error(`erro: ${error}`);
//         console.log(error);
//       }, () => this.spinner.hide()
//     );
//   }

//   ngOnInit() {
//     this.spinner.show();
//     this.loadUser();
//   }

//   loadUser() {
//     const userId = +this.route.snapshot.paramMap.get('id');
//     this.userService.getById(userId)
//       .pipe(takeUntil(this.unsubscriber))
//       .subscribe((user: User) => {
//         this.selectedUser = user;
//         this.title = 'Usuário: ' + this.selectedUser.id;
//         this.toastr.success('Usuário carregado com Sucesso!');
//       }, (error: any) => {
//         this.toastr.error('Usuário não carregados!');
//         console.log(error);
//       }, () => this.spinner.hide()
//     );
//   }

//   voltar() {
//     this.router.navigate(['/user']);
//   }

//   ngOnDestroy(): void {
//     this.unsubscriber.next();
//     this.unsubscriber.complete();
//   }

// }