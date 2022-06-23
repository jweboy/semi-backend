import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Signin {
  @PrimaryGeneratedColumn()
  id: number;

  /** 新增积分 */
  @Column({ type: "integer" })
  incr_point: number;

  /** 合计积分 */
  @Column({ type: "integer" })
  sum_point: number;

  @UpdateDateColumn()
  update_time: Date;
}

export default Signin;
