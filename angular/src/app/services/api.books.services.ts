import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Book } from '../types/book';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let books: Book[] = [
      {
        "id": 1887,
        "category": "web",
        "title": "Angular up details",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 2897,
        "category": "mobile",
        "title": "NativeScript in Actionffffffffdfdfdfdssqqsssq",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 8370,
        "category": "web",
        "title": "Using React & Reduxx",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 2391,
        "title": "Data Visualisation",
        "category": "data engineering",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 5648,
        "category": "iot",
        "title": "Build Robot with Java",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 5670,
        "title": "Efficient JavaScript",
        "category": "web",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 9087,
        "title": "Learning React Native",
        "category": "mobile",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        "id": 8007,
        "title": "Functional Programming",
        "category": "web",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      }
    ];
    return {
      books
    };
  }
}
