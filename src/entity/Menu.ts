import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Submenu from "./Submenu";

@Entity("menu")
class Menu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text", nullable: true })
  itemKey: string;

  @Column({ type: "text", nullable: true })
  text: string;

  @Column({ type: "text" })
  icon: string;

  @OneToMany(() => Submenu, (submenu) => submenu.menu)
  items: Submenu[];
}

export default Menu;
