import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  sport: string

  @Column()
  location: string

  @Column()
  date: Date

  @Column()
  maxPlayers: number

  @Column("simple-array")
  players: string[]
}

