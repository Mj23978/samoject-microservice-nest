import { Field, InputType } from "@nestjs/graphql";

@InputType("TaskCreateManyProjectInput", {
  isAbstract: true
})
export class TaskCreateManyProjectInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: true
  })
  creatorId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  parentId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  status?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  details!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
