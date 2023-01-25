import { Field, InputType } from "@nestjs/graphql";

@InputType("TaskWhereUniqueInput", {
  isAbstract: true
})
export class TaskWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
