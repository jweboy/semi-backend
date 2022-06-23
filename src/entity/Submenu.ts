import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Menu from "./Menu";

@Entity("submenu")
class Submenu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text", nullable: true })
  itemKey: string;

  @Column({ type: "text", nullable: true })
  text: string;

  @ManyToOne(() => Menu, (menu) => menu.items)
  menu: Menu;
}

export default Submenu;
