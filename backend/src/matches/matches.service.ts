import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import type { Repository } from "typeorm"
import { Match } from "./match.entity"
import type { CreateMatchDto } from "./dto/create-match.dto"

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private matchesRepository: Repository<Match>,
  ) {}

  /**
   * استرجاع جميع المباريات
   * @returns {Promise<Match[]>} قائمة بجميع المباريات
   */
  async findAll(): Promise<Match[]> {
    return this.matchesRepository.find()
  }

  /**
   * استرجاع مباراة محددة بواسطة المعرف
   * @param {number} id معرف المباراة
   * @returns {Promise<Match>} المباراة المطلوبة
   */
  async findOne(id: number): Promise<Match> {
    return this.matchesRepository.findOne({ where: { id } })
  }

  /**
   * إنشاء مباراة جديدة
   * @param {CreateMatchDto} createMatchDto بيانات المباراة الجديدة
   * @returns {Promise<Match>} المباراة التي تم إنشاؤها
   */
  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    const match = this.matchesRepository.create(createMatchDto)
    return this.matchesRepository.save(match)
  }
}

