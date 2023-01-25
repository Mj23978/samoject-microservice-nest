import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedOneWithoutSettingsInput } from "../inputs/ProjectCreateNestedOneWithoutSettingsInput";

@InputType("ProjectSettingsCreateInput", {
  isAbstract: true
})
export class ProjectSettingsCreateInput {
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
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => ProjectCreateNestedOneWithoutSettingsInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutSettingsInput | undefined;
}
