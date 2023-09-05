import { Ingredients } from '../share/ingredients.model';

// เนื่องจาก Component นี้จะใช้เยอะมากๆ ใน Project จึงควรสร้างเป็น Model เพื่อให้เวลาที่ส่วนอื่นอ้างอิงถึงจะได้เป็นตัวเดียว/ประเภทเดียวกันหมด
export class Recipes {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredients[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredients[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
