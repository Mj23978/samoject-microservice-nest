import { Field, InputType } from "@nestjs/graphql";

@InputType("WorkspaceWhereUniqueInput", {
  isAbstract: true
})
export class WorkspaceWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  settingsId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  userId?: string | undefined;
}
