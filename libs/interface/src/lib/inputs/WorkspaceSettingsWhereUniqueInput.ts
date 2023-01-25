import { Field, InputType } from "@nestjs/graphql";

@InputType("WorkspaceSettingsWhereUniqueInput", {
  isAbstract: true
})
export class WorkspaceSettingsWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
