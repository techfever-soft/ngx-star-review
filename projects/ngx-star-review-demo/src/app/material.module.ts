import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule],
})
export class MaterialModule {}
