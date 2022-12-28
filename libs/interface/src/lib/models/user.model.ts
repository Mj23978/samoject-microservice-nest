import 'reflect-metadata';
import {
  ObjectType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from './base.model';
import {
  
} from '@nestjs/graphql';


@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;
  
  @HideField()
  password: string;

  @Field(() => String, { nullable: false })
  username: string;
  
  @Field(() => String, { nullable: true })
  active: boolean;
  
  @Field(() => String, { nullable: true })
  chatId?: string;
  
  @Field(() => String, { nullable: true })
  role: string;
}