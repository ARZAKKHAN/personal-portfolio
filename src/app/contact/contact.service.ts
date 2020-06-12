import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  public name: string;
  public email: string;
  public subject: string;
  public message: string;
  constructor() {
  }
}
