import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesPage } from './companies.page';
import { CompaniesRoutingModule } from './companies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesService } from './services/companies.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CompaniesRoutingModule,
  ],
  declarations: [CompaniesPage],
  providers: [CompaniesService]
})
export class CompaniesModule {}
