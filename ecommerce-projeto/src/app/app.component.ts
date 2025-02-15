import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-projeto';
  products = [
    {
      title: "Produto 1",
      description: "Descrição do produto 1",
      imageSrc: "https://placehold.co/250x300",
      price: "R$ 100,00",
      discount: "Desconto 10%",
      stock: "Em estoque"
    },
    {
      title: "Produto 2",
      description: "Descrição do produto 2",
      imageSrc: "https://placehold.co/250x300",
      price: "R$ 200,00",
      discount: "Desconto 20%",
      stock: "Em estoque"
    },
    {
      title: "Produto 3",
      description: "Descrição do produto 3",
      imageSrc: "https://placehold.co/250x300",
      price: "R$ 300,00",
      discount: "Desconto 30%",
      stock: "Em estoque"
    },
    {
      title: "Produto 4",
      description: "Descrição do produto 4",
      imageSrc: "https://placehold.co/250x300",
      price: "R$ 400,00",
      discount: "Desconto 40%",
      stock: "Em estoque"
    },

  ]
}
