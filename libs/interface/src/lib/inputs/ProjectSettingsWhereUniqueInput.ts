import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectSettingsWhereUniqueInput", {
  isAbstract: true
})
export class ProjectSettingsWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
