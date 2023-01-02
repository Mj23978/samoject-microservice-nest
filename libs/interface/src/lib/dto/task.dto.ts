import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateTaskInputWithoutSubTasks {
  @Field()
  status: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6)
  details: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  chatId?: string;

  @Field({ nullable: true })
  projectId?: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field(type => [String], { nullable: true })
  assignes?: string[];
}

@InputType()
export class UpdateTaskInputWithoutSubTasks {

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @MinLength(6)
  details?: string;

  @Field({ nullable: true })
  chatId?: string;

  @Field({ nullable: true })
  projectId?: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field(type => [String], { nullable: true })
  assignes?: string[];
}

@InputType()
export class UpdateTaskInput extends UpdateTaskInputWithoutSubTasks {
  @Field(() => [CreateTaskInputWithoutSubTasks], { nullable: true })
  subTasks?: CreateTaskInputWithoutSubTasks[];
}


@InputType()
export class CreateTaskInput extends CreateTaskInputWithoutSubTasks {
  @Field(() => [CreateTaskInputWithoutSubTasks], { nullable: true })
  subTasks?: CreateTaskInputWithoutSubTasks[];
}


@ObjectType()
export class DeleteTaskOutput {
  @Field()
  deleted: boolean;
}