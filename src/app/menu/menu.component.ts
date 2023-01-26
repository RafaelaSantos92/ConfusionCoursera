import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[]=[
  {
    id: '0',
    name: 'Pizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'uma combinação única de uthappam indiano (panqueca) e pizza italiana'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: ' ',
    price: '1.99',
    description: 'abobrinha frita coberta com massa de farinha de grão-de-bico levemente temperada acompanhada de molho de tamarindo agridoce'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '2.99',
    description: 'uma experiência de confusão por excelência, é uma rosquinha ou é um donut?'
  },
  {
    id: '3',
    name: 'eElainCHeese cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: ' ',
    price: '3.99',
    description: 'um delicioso bolo de queijo semi-doce estilo nova-iorquino'
  },
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
