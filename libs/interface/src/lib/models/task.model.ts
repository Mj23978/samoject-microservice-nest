import 'reflect-metadata';
import {
  ObjectType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { BaseModel } from './base.model';
import {

} from '@nestjs/graphql';


@ObjectType()
export class Task extends BaseModel {
  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @MinLength(6)
  details: string;

  @Field({ nullable: true })
  chatId?: string;

  @Field({ nullable: true })
  projectId?: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field(() => [String], { nullable: true })
  assignes?: string[];

  @Field(() => [Task], { nullable: true })
  subTasks?: Task[];
}