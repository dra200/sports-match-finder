import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common"
import type { MatchesService } from "./matches.service"
import type { CreateMatchDto } from "./dto/create-match.dto"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"

@Controller("matches")
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  findAll() {
    return this.matchesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchesService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }
}

